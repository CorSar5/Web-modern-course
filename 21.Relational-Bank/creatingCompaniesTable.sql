CREATE TABLE IF NOT EXISTS companies (
    id int UNSIGNED not null AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

CREATE TABLE IF NOT EXISTS companies_units (
    company_id INT UNSIGNED NOT NULL,
    city_id INT UNSIGNED NOT NULL,
    hquarters TINYINT(1) NOT NULL,
    PRIMARY KEY (company_id, city_id)
);