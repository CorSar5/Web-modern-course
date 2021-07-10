update states
set nome = 'Maranhão'
where initials = "MA"

select nome from states

update states
set nome = 'Paraná', 
    population1 = 11.32
where initials = "PR"

select est.nome, initials, population1 
from states est where initials = "PR"