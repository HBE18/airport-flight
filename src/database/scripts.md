# Database Creation Queries  

## Creation of User (ROLE) 

```console

```

## Creation of Database

```console
-- Database: airport

-- DROP DATABASE IF EXISTS airport;

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
```

## Creation of Schemas 

```console
-- SCHEMA: airline

-- DROP SCHEMA IF EXISTS airline ;

CREATE SCHEMA IF NOT EXISTS airline
    AUTHORIZATION airliner;

GRANT ALL ON SCHEMA airline TO airliner;

-- SCHEMA: user

-- DROP SCHEMA IF EXISTS "user" ;

CREATE SCHEMA IF NOT EXISTS "user"
    AUTHORIZATION airliner;

GRANT ALL ON SCHEMA "user" TO airliner;
```
