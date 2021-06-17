# wicked-sales-js
A full stack Node.js and React shopping card app where users can add items into his or her shopping cart.

## Live Demo
Try the application live at [[http://lens-craft.seongkevinlee.com](http://lens-craft.seongkevinlee.com)]

## Technologies Used
* JavaScript (ES5, ES6)
* HTML5
* CSS3
* React
* Bootstrap 4
* Node.js
* PostgreSQL
* Express
* Webpack 4
* Babel
* AWS EC2

## Features
* User can view the products for sale - Back End.
* User can view the products for sale - Front End.
* User can view the details of a product - Back End.
* User can view the details of a product - Front End.
* User can add a product to their cart - Back End.
* User can add a product to their cart - Front End.
* User can view their cart summary - Front End.
* User can place an order - Back End.
* User can place an order - Front End.

## Preview
![demo-1](https://github.com/seongkevinlee/wicked-sales-js/blob/master/demo-2.gif?raw=true)

## Development
### System Requirements
* Node.js 10 or higher
* NPM 6 or higher
* PostgreSQL 8 or higher

### Getting Started
1. Clone the respository
```
git clone https://github.com/seongkevinlee/wicked-sales-js.git
cd wicked-sales-js
```
2. Install dependencies with NPM
```
npm install
```
3. Import the example database to PostgreSQL
```
npm run db:import
```
4. Start the PostgreSQL database
```
sudo service postgresql start
```
5. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.
```
npm run dev
```
