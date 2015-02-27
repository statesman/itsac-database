SELECT `Customer Name` as 'agency',
  `Customer Type` as 'type',
  ROUND(SUM(`Order Quantity`)) as 'hours',
  ROUND(SUM(`Purchase Amount`)) as 'sales'
FROM itsac
GROUP BY `Customer Name`
ORDER BY `sales` DESC
