-- sql
-- DDL >> Data Definition Language >> DB Structure >> CREATE, ALTER, DROP, TRUNCATE, RENAME
-- DML >> Data Manipulation Language >> DB Data >> SELECT, INSERT, UPDATE, DELETE, MERGE
-- DCL >> Data Control Language >> DB Access Control >> GRANT, REVOKE
-- TCL >> Transaction Control Language >> DB Transactions >> COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION
-- DQL >> Data Query Language >> DB Query >> SELECT
-- TCL and DCL are not supported in MySQL
-- DDL and DML are supported in MySQL
-- create DB
CREATE DATABASE IF NOT EXISTS 'uber';
-- create table
USE 'uber';
CREATE TABLE  'drivers' (
    -- column dataType(lemgth) constraints
    id INT(11)             NOT NULL auto_increment,
    name VARCHAR(255)     NOT NULL,
    email VARCHAR(255)     NOT NULL UNIQUE,
    isActive BOOLEAN         NOT NULL DEFAULT TRUE,
    STATUS ENUM('available', 'unavailable') NOT NULL DEFAULT 'available',
    dob DATE                 NOT NULL,
    createdAt TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- primary key
    PRIMARY KEY (id)
);
              -- COLUMN DATA`TYPE(LEMGTH) CONSTRAINTS
ALTER TABLE 'drivers' ADD COLUMN SUBSCRIPTION ENUM('basic', 'premium', 'vip') NOT NULL DEFAULT 'basic' AFTER dob;
ALTER TABLE 'drivers' DROP subscription;
ALTER TABLE 'drivers' MODIFY name VARCHAR(100) NOT NULL;

DROP TABLE 'drivers';

