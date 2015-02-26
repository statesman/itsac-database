SELECT ROUND(SUM(`Purchase Amount`)) as 'amount',
  `Staffing Contractor Name` as 'name'
FROM itsac
WHERE `Customer Name` = ?
GROUP BY `Staffing Contractor Name`
ORDER BY `amount` DESC
LIMIT 10
