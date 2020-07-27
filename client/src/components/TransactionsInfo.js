import React from 'react';
import CurrencyField from './CurrencyField';
import InfoField from './InfoField';
import transactionsHelper from '../helpers/transactions';

export default function TransactionsInfo({ transactions }) {

    const info = transactionsHelper.getInfo(transactions);
    const {count, income, outgoing, balance} = info;
    const balanceColor = balance < 0 ? '#c0392b' : '#16a085';
    return (
        <div className="row">        
            <div className="col l3 m6 s12">
                <InfoField label="Lançamentos" value={count} color="#000"/>
            </div>
            <div className="col l3 m6 s12">
                <CurrencyField label="Receitas" value={income} color="#16a085"/>
            </div>
            <div className="col l3 m6 s12">
                <CurrencyField label="Despesas" value={outgoing} color="#c0392b"/>
            </div>
            <div className="col l3 m6 s12">
                <CurrencyField label="Saldo" value={balance} color={balanceColor}/>
            </div>
        </div>
    )
}
