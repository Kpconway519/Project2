--Just starting right here, will fill out with details later. Kevin Conway 5.33 saturday 1/19






CREATE DATABASE barberoo

USE barberoo

--this is all we need for the barbers to get it working
CREATE TABLE barbers
(
    id INT NOT NULL,
    first_name
    last_name
    address
    -- bio could be added later for profile pages and whatnot.
);

--Right now, customers have 3 favorites available. Don't see any reason for that to change in the future. Not sure anybody really goes to more than 3 barbers/stylists
CREATE TABLE customers
(
    id INT NOT NULL,
    first_name
    last_name
    gender
    address
    favorite_1
    favorite_2
    favorite_3
);


CREATE TABLE appointments
(
    id INT NOT NULL,
    accepted
    comments
    customer
    barber
    TIME
    service
    LOCATION
    paid

);


CREATE TABLE reviews
(
    id INT NOT NULL,
    customer
    barber


);
GO