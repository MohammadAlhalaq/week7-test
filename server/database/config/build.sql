BEGIN;
DROP TABLE IF EXISTS citys CASCADE;
create table citys (id serial primary key, name varchar, city varchar);
COMMIT;