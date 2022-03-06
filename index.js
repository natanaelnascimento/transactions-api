import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import dirname from 'es-dirname';
import dotenv from 'dotenv';
import routes from './routes/transactions.js';
import logger from './logger/logger.js';

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join(dirname(), 'client', 'build')));

/**
 * Rota raiz
 */
app.get('/', (_, response) => {
  logger.info('/');
  response.send({
    message:
      'Bem-vindo à API de lançamentos. Acesse transactions-app-nsn.herokuapp.com e siga as orientações',
  });
});

/**
 * Rotas principais do app
 */
app.use('/transactions', routes);

/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;

logger.info('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) logger.error(`Erro na conexão ao MongoDB - ${err}`);
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  logger.info('Conectado ao MongoDB');

  /**
   * Definição de porta e
   * inicialização do app
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    logger.info(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
