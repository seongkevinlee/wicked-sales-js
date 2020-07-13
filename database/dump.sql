--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	17	4	999
2	18	5	9900
3	19	5	9900
4	20	5	9900
5	21	5	9900
88	25	2	2595
89	25	3	2900
90	25	1	2999
91	25	6	830
92	25	4	999
93	27	1	2999
94	27	5	9900
95	28	1	2999
96	28	2	2595
97	28	6	830
98	29	1	2999
99	29	2	2595
100	30	2	639
101	30	4	1799
102	31	1	1599
103	31	8	1099
104	32	1	1599
105	32	3	125
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-06-12 22:43:35.678855-07
2	2020-06-12 22:56:27.678836-07
3	2020-06-12 23:05:52.485426-07
4	2020-06-12 23:37:35.486694-07
5	2020-06-12 23:40:40.623578-07
6	2020-06-12 23:44:24.821062-07
7	2020-06-12 23:49:46.883518-07
8	2020-06-12 23:50:22.318119-07
9	2020-06-12 23:50:57.682796-07
10	2020-06-12 23:51:21.079295-07
11	2020-06-12 23:54:54.460966-07
12	2020-06-12 23:55:31.58605-07
13	2020-06-13 00:06:28.770705-07
14	2020-06-13 00:07:06.264661-07
15	2020-06-13 00:08:09.40582-07
16	2020-06-13 00:08:32.330427-07
17	2020-06-13 00:16:29.21638-07
18	2020-06-13 00:18:15.455807-07
19	2020-06-13 00:31:59.179575-07
20	2020-06-13 00:46:40.729335-07
21	2020-06-13 00:51:13.317423-07
22	2020-06-13 01:15:10.652072-07
23	2020-06-14 22:10:20.986986-07
24	2020-06-15 12:01:24.833552-07
25	2020-06-15 12:01:24.90323-07
26	2020-06-15 12:01:25.23313-07
27	2020-06-15 17:46:11.057445-07
28	2020-06-15 18:14:58.830922-07
29	2020-07-08 15:21:14.568875-07
30	2020-07-09 22:17:43.822041-07
31	2020-07-10 11:50:06.321802-07
32	2020-07-13 10:09:05.291654-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
2	7	Kevin Lee	252453563453457	123 Hello Street	2020-06-15 16:12:29.55454-07
3	27	john	13135135135135	123 address	2020-06-15 18:11:45.309464-07
4	28	jim	13135135135135	address	2020-06-15 18:15:22.748143-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Canon EF 24-70mm f/2.8L II USM	1599	/images/canon_ef_24-70.jpg	Spanning a popular and versatile range of focal lengths, the EF 24-70mm f/2.8L II USM is a Canon L-series zoom commonly thought of as the workhorse of lenses.	Ranging from wide-angle to portrait length, this lens is also distinguished by its constant f/2.8 maximum aperture to benefit working in difficult lighting conditions and to afford greater control over depth of field. The lens is also characterized by its sophisticated optical design, which includes one Super UD element and two UD elements, which reduce color fringing and chromatic aberrations in order to realize a high degree of color accuracy and clarity. Three aspherical elements are also featured, and minimize distortion and spherical aberrations for improved sharpness. Additionally, a Super Spectra coating has been applied to individual elements to control flare and ghosting for high contrast and neutral color fidelity.
3	Canon EF 50mm f/1.8 STM	125	/images/canon_ef_50.jpg	One of the most versatile focal lengths available, the EF 50mm f/1.8 STM Lens from Canon is a compact, normal-length prime well-suited to everyday shooting.	The bright f/1.8 maximum aperture benefits working in difficult lighting conditions and also affords increased control over depth of field for isolating subject matter. Individual elements feature a Super Spectra coating to help minimize flare and ghosting to realize greater contrast and color accuracy when working in backlit and harsh conditions. Additionally, an STM stepping AF motor is used to realize quick and near-silent autofocus performance along with full-time manual focus override.
7	Canon EF 24-105mm f/4L IS II USM Lens	279	/images/canon_ef_24-105.jpg	An advanced one-lens solution, the EF 24-105mm f/4L IS II USM is a Canon L-series zoom covering wide-angle to short-telephoto focal lengths and featuring a constant f/4 maximum aperture.	The version II of this popular lens sports a redeveloped optical design, which includes four aspherical elements to significantly reduce distortion and spherical aberrations throughout the zoom range for great sharpness and accurate subject rendering. Individual elements feature an Air Sphere Coating, too, to suppress flare and ghosting for greater contrast and color accuracy in harsh lighting conditions.
2	Sigma 18-35mm f/1.8 DC HSM Art for Canon EF	639	/images/sigma_18-35.jpg	Distinguished by a uniquely fast and versatile design, the Canon EF-mount Sigma 18-35mm f/1.8 DC HSM is an Art-series zoom, covering wide-angle to normal focal lengths.	Separating itself from the pack, this zoom features an exceedingly bright f/1.8 constant maximum aperture, which suits its use in difficult lighting conditions and offers impressive depth of field control throughout the zoom range. The optical design incorporates a series of SLD and aspherical elements, which help to achieve high clarity and sharpness by suppressing various aberrations, color fringing, and distortion. A Super Multi-Layer Coating has also been applied, too, which controls lens flare and ghosting for improved contrast and color accuracy. Balancing the optical merits, this 18-35mm also sports an advanced Hyper Sonic Motor, along with an internal focusing design, to promote fast, quiet, and precise autofocus performance.
6	Canon EF-S 10-18mm f/4.5-5.6 IS STM	279	/images/canon_ef_10-18.jpg	A flexible wide-angle zoom in a compact form factor, the EF-S 10-18mm f/4.5-5.6 IS STM from Canon is a 16-28.8mm equivalent lens designed for EF-S-mount DSLRs.	Helping to reduce the overall size while maintaining high optical quality, a four-group zoom design is employed along with one ultra-low dispersion element, one aspherical element, and one large-diameter element to produce sharp, clear imagery void of chromatic and spherical aberrations. A Super Spectra coating has also been applied to suppress flare and ghosting for increased contrast and color neutrality. Benefitting both photo and video applications, an STM stepping AF motor is used to realize quick and near-silent autofocus performance along with full-time manual focus override. Additionally, a four-stop-effective Image Stabilizer system is also featured and minimizes the appearance of camera shake for sharper handheld shooting.
4	Canon EF 70-200mm f/2.8L IS III USM	1799	/images/canon_ef_70-200.jpg	One of the most versatile lenses available, the EF 70-200mm f/2.8L IS III USM from Canon is an L-series telephoto zoom distinguished by its bright design and advanced optics.	Ideal for a variety of subjects ranging from portraiture to sports, the fast constant f/2.8 maximum aperture excels in difficult lighting conditions and also offers increased control over depth of field for isolating subjects. The optical layout makes use of one fluorite element and five UD elements to suppress chromatic aberrations and color fringing in order to realize a high degree of clarity throughout the zoom range. An Air Sphere Coating is also featured, and works to reduce flare and ghosting for greater color fidelity and contrast in all conditions.
5	Canon EF 100mm f/2.8L Macro IS USM	899	/images/canon_ef_100.jpg	Primarily designed for close-up shooting, the EF 100mm f/2.8L Macro IS USM from Canon is a versatile L-series short telephoto prime that is also well-suited for portraiture and other mid-range subjects.	As a macro lens, however, this 100mm offers a life-size, 1:1 maximum magnification and an 11.8" minimum focusing distance. Complementing close-up shooting, an Image Stabilizer is featured that minimizes camera shake by two stops at full 1:1 magnification, or up to four stops at lower magnifications for sharper handheld shooting. Also contributing to smooth and intuitive handling, a ring-type USM and internal focusing design offers quick, quiet, and accurate autofocus performance along with full-time manual focus override. In regard to its optical assets, one ultra-low dispersion element is featured, to control color fringing and chromatic aberrations, and a Super Spectra coating has been applied to suppress flare and ghosting for improved contrast and color fidelity. Additionally, as an L-series lens, this 100mm f/2.8 is weather-sealed for working in inclement conditions.
8	Canon EF 16-35mm f/4L IS USM Lens	1099	/images/canon_ef_16-35.jpg	Covering a useful wide-angle focal length range, the EF 16-35mm f/4L IS USM is a Canon L-series lens distinguished by its constant f/4 maximum aperture, sophisticated optical design, and use of image stabilization to realize sharp imagery.	Two ultra-low dispersion elements are used to greatly reduce color fringing and chromatic aberrations throughout the zoom range for high clarity and color accuracy, and a Super Spectra coating has also been applied to suppress flare and ghosting for improved contrast. Three aspherical elements are also featured and help to control distortion and minimize spherical aberrations for improved sharpness.
9	Canon EF 85mm f/1.4L IS USM Lens	999	/images/canon_ef_85.jpg	Distinguished by its fast design and IS capabilities, the EF 85mm f/1.4L IS USM from Canon is a short telephoto prime well-suited to portraiture applications.	As an L-series lens, it is characterized by a sophisticated optical layout that includes one glass-molded aspherical element to greatly reduce spherical aberrations and distortion for improved sharpness and clarity. Individual elements also feature an Air Sphere coating (ASC) to suppress lens flare and ghosting for greater contrast and color fidelity in backlit situations.
10	Canon EF 400mm f/5.6L USM	1149	images/canon_ef_400.jpg	Mixing long reach with a relatively compact and lightweight design, the EF 400mm f/5.6L USM from Canon is a super telephoto L-series prime well-suited for sports and wildlife photography.	Its advanced optical design incorporates a pair of low dispersion glass elements to significantly reduce color fringing and chromatic aberrations in order to achieve a high degree of clarity, and a Super Spectra coating has also been applied to maintain contrast and color fidelity when working in difficult lighting conditions. Complementing the imaging attributes, this 400mm f/5.6 also features a ring-type USM to deliver quick and quiet autofocus performance along with full-time manual focus control. Additionally, a removable rotating tripod collar is included for stable use of the lens atop a tripod or monopod.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 105, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 32, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 4, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

