SELECT `Purchase Amount` as 'amount',
  `Order Quantity` as 'hours',
  `Unit Price` as 'rate',
  `Purchase Month` as 'month',
  `Staffing Level` as 'level'
FROM itsac
WHERE `Staffing Contractor Name` = ?
  AND `Vendor Name` = ?
  AND `Customer Name` = ?
