SELECT * from states

select nome as 'State Name', initials from states
where regions = "South"

SELECT nome, regions, population1 from states
WHERE population1 >=10
order by population1 desc