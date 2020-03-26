/** Rota http://localhost:3333/users
 *  Recurso /users
 */

/** Métodos http
 *  Get: buscar uma informação do back-end
 *  Post: criar uma informação no back-end
 *  Put: alterar uma informação no back-end
 *  Delete: deletar uma informação no back-end
 */

/** Tipos de parâmetros
 *  Query Params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação) 
 *  Route Params: parâmetros utilizados para identificar recursos
 *  Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/** Tipos de banco de dados
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 *  NoSQL: MongoDB, CouchDB, etc
 */

/** 
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where()
 *   
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);