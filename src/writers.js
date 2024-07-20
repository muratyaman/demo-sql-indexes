const { randomUUID } = require('crypto');

function makeWriters(db) {

  async function writeToTableWithIndexes(req, res) {
    const row = await req.json();
    row.ref = row.ref || randomUUID();
    row.created_at = new Date();
    row.updated_at = new Date();
    const result = await db('with_indexes').insert(row);
    return res.json({ row, result });
  }

  async function writeToTableWithoutIndexes(req, res) {
    const row = await req.json();
    row.ref = row.ref || randomUUID();
    row.created_at = new Date();
    row.updated_at = new Date();
    const result = await db('without_indexes').insert(row);
    return res.json({ row, result });
  }

  return {
    writeToTableWithIndexes,
    writeToTableWithoutIndexes,
  };
}

module.exports = { makeWriters };
