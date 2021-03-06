const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);
module.exports = app;

/**
 * Rota / Recurso
 */

 /**
  * Métodos Http:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body:
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */



