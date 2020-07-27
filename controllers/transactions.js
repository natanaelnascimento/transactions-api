import logger from '../logger/logger.js';
import transactionsService from '../services/transactions.js';

const create = async (req, res) => {
  try {
    const transaction = { ...req.body, ...req.params, ...req.query };
    const created = await transactionsService.create(transaction);
    res.send(created);
    logger.info(`POST /transactions - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    logger.error(`POST /transactions - ${JSON.stringify(error.message)}`);
  }
};

const find = async (req, res) => {
  const filter = { ...req.body, ...req.params, ...req.query };
  try {
    const found = await transactionsService.find(filter);
    res.send(found);
    logger.info(`GET /transactions`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao buscar transactions: ' + JSON.stringify(filter) });
    logger.error(`GET /transactions - ${JSON.stringify(error.message)}`);
  }
};

const findById = async (req, res) => {
  const transaction = { ...req.body, ...req.params, ...req.query };
  try {
    const found = await transactionsService.findById(transaction._id);
    res.send(found);
    logger.info(`GET /transactions - ${transaction._id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o transaction id: ' + transaction._id });
    logger.error(`GET /transactions - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }
  const transaction = { ...req.body, ...req.params, ...req.query };
  try {
    await transactionsService.update(transaction);
    res.send({ message: 'transaction atualizado com sucesso' });
    logger.info(`PUT /transactions - ${transaction._id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a transaction id: ' + transaction._id });
    logger.error(`PUT /transactions - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const transaction = { ...req.body, ...req.params, ...req.query };
  try {
    await transactionsService.deleteById(transaction._id);
    res.send({ message: 'transaction excluido com sucesso' });
    logger.info(`DELETE /transactions - ${transaction._id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o transaction id: ' + transaction._id });
    logger.error(`DELETE /transactions - ${JSON.stringify(error.message)}`);
  }
};

export default { create, find, findById, update, remove };
