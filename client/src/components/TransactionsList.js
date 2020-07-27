import React from 'react';
import Transaction from './Transaction';

export default function TransactionsList({transactions}) {
    return (
        <div>
            {transactions.map(t => {
                return (
                   <Transaction transaction={t}/>
                );
            })}
        </div>
    )
}
