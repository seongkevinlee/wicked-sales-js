require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

// GET ALL PRODUCTS LIST
app.get('/api/products', (req, res, next) => {

  const sql = `
  SELECT  "productId",
          "name",
          "price",
          "image",
          "shortDescription"
    FROM  "products"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

// GET ONE PRODUCT USING ID
app.get('/api/products/:productId', (req, res, next) => {
  let { productId } = req.params;
  productId = parseInt(req.params.productId);
  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      error: 'productId must be a positive integer'
    });
  }

  const sql = `
  SELECT  "productId",
          "name",
          "price",
          "image",
          "longDescription",
          "shortDescription"
    FROM  "products"
   WHERE  "productId" = $1
  `;

  const params = [productId];

  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        next(new ClientError(`cannot find product with ID ${productId}`, 404));
      } else {
        res.json(product);
      }
    })
    .catch(err => next(err));
});

// GET ALL PRODUCTS IN SHOPPING CART
app.get('/api/cart', (req, res, next) => {

  if (!req.session.cartId) {
    return res.json([]);
  } else {
    const sql = `
      SELECT
              "c"."cartItemId",
              "c"."price",
              "p"."productId",
              "p"."image",
              "p"."name",
              "p"."shortDescription"
        FROM  "cartItems" AS "c"
        JOIN  "products" AS "p" USING ("productId")
       WHERE  "c"."cartId" = $1
      `;
    const params = [req.session.cartId];
    db.query(sql, params)
      .then(result => res.json(result.rows))
      .catch(err => next(err));
  }
});

// ADD NEW ITEM INTO SHOPPING CART
app.post('/api/cart', (req, res, next) => {
  const productId = req.body.productId;
  if (!productId) {
    next(new ClientError('ProductId is a required field', 400));
    return;
  } else if (productId <= 0) {
    next(new ClientError('ProductId must be an integer greater than 0', 400));
    return;
  }

  const sql = `
  SELECT  "productId", "price"
    FROM  "products"
   WHERE  "productId" = $1
  `;

  const params = [productId];

  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        throw new ClientError(`Cannot find product with ID ${productId}`, 400);
      } else if (req.session.cartId) {
        const newCartItem = { cartId: req.session.cartId, price: product.price };
        return (newCartItem);

      } else {
        const cartSql = `
          INSERT INTO   "carts" ("cartId", "createdAt")
               VALUES   (default, default)
            RETURNING   "cartId"
        `;
        return db.query(cartSql)
          .then(result => {
            const cartId = result.rows[0].cartId;
            const newCartItem = { cartId: cartId, price: product.price };
            return newCartItem;
          });
      }
    })
    .then(result => {
      req.session.cartId = result.cartId;
      const sql = `
      INSERT INTO "cartItems"
                  ("cartId", "productId", "price")
      VALUES      ($1, $2, $3)
      RETURNING   "cartItemId"
      `;

      const params = [req.session.cartId, parseInt(productId), result.price];
      return db.query(sql, params);
    })
    .then(result => {
      const newCardItemId = result.rows[0].cartItemId;
      const sql = `
      SELECT
              "c"."cartItemId",
              "c"."price",
              "p"."productId",
              "p"."image",
              "p"."name",
              "p"."shortDescription"
        FROM  "cartItems" AS "c"
        JOIN  "products" AS "p" USING ("productId")
       WHERE  "c"."cartItemId" = $1
      `;
      const params = [newCardItemId];
      return db.query(sql, params)
        .then(result => {
          const newCartItem = result.rows[0];
          res.json(newCartItem);

        });
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
