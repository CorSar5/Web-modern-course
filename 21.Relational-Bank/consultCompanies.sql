select c.nome Companies, ci.nome Cities
from companies c, companies_units cu, cities ci
where c.id = cu.companie_id
and ci.id = cu.city_id
and hquarters