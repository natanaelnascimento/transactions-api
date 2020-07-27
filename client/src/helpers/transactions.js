const getInfo = (transactionsList) => {
    const count = transactionsList.length;
    let income = 0;
    let outgoing = 0;
    transactionsList.forEach(t => {
        if(t.type === '-')
            outgoing += t.value;
        else if(t.type === '+')
            income += t.value;
    });
    const balance = income - outgoing;
    return {count, income, outgoing, balance};
}

export default {getInfo};