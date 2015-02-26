SELECT c.`Staffing Contractor Name` as 'name',
  ROUND(SUM(c.`Purchase Amount`), 2) as 'sales',
  ROUND(SUM(c.`Order Quantity`), 1) as 'hours',
  ROUND(MIN(c.`Unit Price`), 2) as 'minRate',
  ROUND(MAX(c.`Unit Price`), 2) as 'maxRate',
  ROUND(SUM(c.`Purchase Amount`) / SUM(c.`Order Quantity`), 2) as 'avgRate',
  COUNT(DISTINCT c.`Purchase Month`) as 'monthsWorked',
  GROUP_CONCAT(DISTINCT v.`Vendor Name` SEPARATOR '|||') as 'vendors',
  GROUP_CONCAT(DISTINCT a.`Customer Name` SEPARATOR '|||') as 'agencies'
FROM itsac as c
LEFT JOIN dir.itsac as v ON
  c.`Sales Fact Number` = v.`Sales Fact Number`
LEFT JOIN dir.itsac as a ON
  c.`Sales Fact Number` = a.`Sales Fact Number`
GROUP BY c.`Staffing Contractor Name`
ORDER BY `sales` DESC
