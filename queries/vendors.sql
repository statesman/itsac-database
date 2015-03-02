SELECT `Vendor Name` as 'vendor',
  `Customer Name` as 'agency',
  ROUND(SUM(`Order Quantity`)) as 'hours',
  ROUND(SUM(`Purchase Amount`)) as 'sales'
FROM itsac
GROUP BY `Vendor Name`, `Customer Name`
ORDER BY `sales` DESC
