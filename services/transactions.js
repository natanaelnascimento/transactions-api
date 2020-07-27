import transactionsRepository from '../repositories/transactions.js';
import formatPeriod from '../helpers/periodFormatter.js';

const create = async (transaction) => {
    validateTransaction(transaction);
    transaction.yearMonth = formatPeriod({year, month} = transaction);
    transaction.yearMonthDay = formatPeriod({year, month, day} = transaction);
    return await transactionsRepository.create(transaction);
}

const find = async (filter) => {
    if(!filter.period) throw new Error('period é obrigatório!');
    return await transactionsRepository.find({description: filter.description, yearMonth: filter.period});
}

const findById = async (id) => {
    if(!id) throw new Error('id é obrigatório!');
    return await transactionsRepository.findById(id);
}

const update = async (transaction) => {
    if(!transaction._id) throw new Error('_id é obrigatório!');
    return await transactionsRepository.update(transaction);
}

const deleteById = async (id) => {
    if(!id) throw new Error('id é obrigatório!');
    await transactionsRepository.deleteById(id);
}

const validateTransaction = (transaction) => {
    if(!transaction.year) throw new Error('year é obrigatório!');
    if(!transaction.month) throw new Error('month é obrigatório!');
    if(!transaction.day) throw new Error('day é obrigatório!');
    if(!transaction.value) throw new Error('value é obrigatório!');
    if(!transaction.description) throw new Error('description é obrigatório!');
    if(!transaction.category) throw new Error('category é obrigatório!');
    if(!transaction.type) throw new Error('type é obrigatório!');
}

export default { create, find, findById, update, deleteById};