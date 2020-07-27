import TransactionModel from '../models/Transaction.js';

const create = async (transaction) => {
    const model = new TransactionModel(transaction);
    await TransactionModel.create(model);
    return model;
}

const find = async (filter) => {
    let filterClone = await JSON.parse(JSON.stringify(filter));
    if(filterClone.description) filterClone.description = { $regex: new RegExp(filter.description), $options: 'i' };
    return await TransactionModel.find(filterClone);
}

const findById = async (id) => {
    return await TransactionModel.findOne({_id: id});
}

const update = async (transaction) => {
    const model = new TransactionModel(transaction);
    return await TransactionModel.findByIdAndUpdate(model._id, model, { new: true, useFindAndModify: false });
}

const deleteById = async (id) => {
    await TransactionModel.deleteOne({_id: id});
}

export default { create, find, findById, update, deleteById };