CREATE DATABASE 'uber';
--DDL

-- driver
CREATE TABLE `drivers` (
    id INT                NOT NULL AUTO_INCREMENT,
    name VARCHAR(255)     NOT NULL,
    email VARCHAR(255)    UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    status ENUM('online', 'offline') DEFAULT 'offline',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
-- CARS
CREATE TABLE `cars` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(255) NOT NULL,
    license_plate VARCHAR(255) UNIQUE NOT NULL,
    driver_id INT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (driver_id) REFERENCES drivers(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- DML -- DATA MANIPULATION LANGUAGE -- DATA
-- INSERT
-- UPDATE
-- DELETE

INSERT INTO drivers (name, email, password, status) VALUES ('John Doe', 'john.doe@example.com', 'password123', 'online');
INSERT INTO cars (model, license_plate, driver_id) VALUES ('Toyota Camry', 'ABC123', 1);
UPDATE drivers SET name = 'userSystem' WHERE id = 7;

DELETE FROM drivers WHERE id = 7;
