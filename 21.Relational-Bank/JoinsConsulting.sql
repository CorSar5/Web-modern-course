select * from cities c inner join prefeitos p on c.id = p.city_id;
select * from cities c left join prefeitos p on c.id = p.city_id;
select * from cities c right join prefeitos p on c.id= p.city_id;
select * from cities c  full join prefeitos p on c.id = p.city_id; -- impossible, not supported

select * from cities c left join prefeitos p on c.id = p.city_id
union 
select * from cities c right join prefeitos p on c.id= p.city_id; 
-- full join equivalent