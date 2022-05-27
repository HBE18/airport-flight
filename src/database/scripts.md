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
