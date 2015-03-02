SELECT ROUND(SUM(`Purchase Amount`)) as 'amount',
  `Staffing Contractor Name` as 'name',
  `Vendor Name` as 'vendor'
FROM itsac
WHERE `Customer Name` = ?
GROUP BY `Staffing Contractor Name`, `Vendor Name`
ORDER BY `amount` DESC
LIMIT 10
