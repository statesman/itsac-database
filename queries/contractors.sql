SELECT `Staffing Contractor Name` as 'name',
  ROUND(SUM(`Purchase Amount`), 2) as 'sales',
  ROUND(SUM(`Order Quantity`), 1) as 'hours',
  ROUND(MIN(`Unit Price`), 2) as 'minRate',
  ROUND(MAX(`Unit Price`), 2) as 'maxRate',
  ROUND(SUM(`Purchase Amount`) / SUM(`Order Quantity`), 2) as 'avgRate',
  COUNT(DISTINCT `Purchase Month`) as 'monthsWorked',
  `Vendor Name` as 'vendor',
  `Customer Name` as 'agency',
  `Contract Number` as 'contract'
FROM itsac
GROUP BY `Staffing Contractor Name`, `Vendor Name`, `Customer Name`
ORDER BY `sales` DESC
