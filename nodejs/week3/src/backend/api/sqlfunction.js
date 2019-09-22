
function getAllRows(table){
    const sql =  `SELECT * FROM ${table}`;
    return sql; 
  };
function updateRowById(table,id,columnName,value){
    const sql = `update ${table} set ${columnName} = '${value}' where id = ${id}` ;
    return sql; 
  };
function getRowById(table,id){
    const sql = `Select * from ${table} where id = ${id}`;
    return sql;
  };
function deleteRowById(table,id){
    const sql = `DELETE from ${table} where id = ${id}`;
    return sql;
  };
module.exports = {getAllRows,updateRowById,getRowById,deleteRowById};