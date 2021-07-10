-- Creating State Table
create table states(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    initials VARCHAR(2) NOT NULL,
    regions ENUM('North', 'North East', 'Midwest', 'Southeast', 'South') NOT NULL,
    population1 DECIMAL(5, 2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (initials)
);