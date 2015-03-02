SELECT ROUND(SUM(`Purchase Amount`)) as 'amount',
  `Staffing Contractor Name` as 'name',
  `Vendor Name` as 'vendor',
  `Customer Name` as 'agency'
FROM itsac
WHERE `Vendor Name` = ?
GROUP BY `Staffing Contractor Name`, `Customer Name`
ORDER BY `amount` DESC
LIMIT 10
