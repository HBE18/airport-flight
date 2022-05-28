# Database Creation Queries  

## Creation of User (ROLE) 

```console
BEGIN;
DROP ROLE IF EXISTS airliner;

CREATE ROLE airliner WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  CREATEDB
  NOCREATEROLE
  NOREPLICATION
  PASSWORD '123456';
COMMIT;
```

## Creation of Database

```console
-- Database: airport
BEGIN;
DROP DATABASE IF EXISTS airport;

CREATE DATABASE airport
    WITH
    OWNER = airliner
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT TEMPORARY, CONNECT ON DATABASE airport TO PUBLIC;

GRANT ALL ON DATABASE airport TO airliner;
COMMIT;
```

## Creation of Table
```console
-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    email character varying(30) COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    flights integer[],
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to airliner;
```

```console
-- Table: public.flights

-- DROP TABLE IF EXISTS public.flights;

CREATE TABLE IF NOT EXISTS public.flights
(
    flightid integer,
    seats integer[]
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.flights
    OWNER to airliner;
```
