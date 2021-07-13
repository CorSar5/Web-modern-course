INSERT INTO companies
    (nome, cnpj)
VALUES 
    ('Bradesco', 98456457645),
    ('Vale', 2323523452354),
    ('Cielo', 2435234645723)

ALTER TABLE companies MODIFY cnpj VARCHAR(14)

desc companies; --description of the table
desc prefeitos;
select * from companies;
select * from cities;

INSERT INTO companies_units
    (companie_id, city_id, hquarters)
VALUES(1,1,1),
    (1, 3, 0),
    (2, 4 ,0),
    (2,1,1);