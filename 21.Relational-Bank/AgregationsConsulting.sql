select 
    regions as 'Region',
    sum(population1) as Total
from states
GROUP BY regions
order by Total desc

select 
   avg(population1) as Total
from states
 