const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [products] = await connection.execute(query);

  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
 
  return product;
};

const update = async (product) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const [result] = await connection.execute(query, [product.name, product.id]);

  if (!result.affectedRows) {
    return null;
  }

  return product;
};

const exclude = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
};

const addProduct = async (product) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [product.name]);
  return {
    id: result.insertId,
    ...product,
  };
};

const searchProduct = async (name) => {
  const query = 'SELECT * FROM StoreManager.products where name = ?';
  await connection.execute(query, [name]);
};

module.exports = {
  getAll,
  getById,
  exclude,
  addProduct,
  update,
  searchProduct,
};