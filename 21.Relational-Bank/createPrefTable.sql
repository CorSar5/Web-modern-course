CREATE TABLE IF NOT EXISTS prefeitos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    city_id int UNSIGNED,
    PRIMARY KEY(id),
    UNIQUE KEY(city_id),
    FOREIGN KEY(city_id) REFERENCES cities(id)
);