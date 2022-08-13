const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sp.sale_id AS saleId,
    s.date AS date,
    p.id AS productId,
    sp.quantity AS quantity
FROM 
  sales_products AS sp
JOIN
  sales AS s
ON
  sp.sale_id = s.id
JOIN
  products AS p
ON 
  sp.product_id = p.id
ORDER BY
  saleID, productId;`;
  const [sales] = await connection.execute(query);

  return sales;
};

const getById = async (id) => {
  const query = `SELECT s.date AS date,
    sp.product_id AS productId,
    sp.quantity AS quantity
FROM
  sales AS s
JOIN
  sales_products AS sp
ON
  id = sale_id
WHERE
  id = ?`;
  const [product] = await connection.execute(query, [id]);
 
  return product;
};

module.exports = {
  getAll,
  getById,
};