select s.nome, c.nome, regions from states s, cities c 
where s.id = c.state_id;

select c.nome as City,
    s.nome as States,
    regions as Region
from states s
inner join cities c on s.id = c.state_id ;
