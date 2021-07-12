select * from states where id=  25

INSERT INTO cities (nome, area, state_id)
VALUES ('Campinas', 795, 36)

INSERT INTO cities (nome, area, state_id)
VALUES ('Niterói', 133.9, 30)

INSERT INTO cities(nome, area, state_id)
VALUES('Caruaru', 920.6, (SELECT id FROM states where initials = "PE"))

INSERT INTO cities
    (nome, area, state_id)
VALUES('Juazeiro do Norte',
        248.2,
        (select id from states where initials="CE"))