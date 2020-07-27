const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const getCurrentPeriod = () => {
    return getPeriod(new Date());
}

const getCurrentPeriodList = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 24);
    const periodList = [];
    for(let i = 0; i < 48; i++) {
        date.setMonth(date.getMonth() + 1)
        periodList.push(getPeriod(date));
    }
    return periodList;
}

const getPreviousPeriod = (periodValue) => {
    const date = new Date(periodValue + '-15');
    date.setMonth(date.getMonth() - 1);
    return getPeriod(date);
}

const getNextPeriod = (periodValue) => {
    const date = new Date(periodValue + '-15');
    date.setMonth(date.getMonth() + 1);
    return getPeriod(date);
}

const getPeriod = (date) => {
    return {
        value: getPeriodValue(date),
        description: getPeriodDescription(date)
    }
}

const getPeriodValue = (date) => {
    return `${date.getFullYear()}-${('' + (date.getMonth() + 1)).padStart(2, '0')}`;
}

const getPeriodDescription = (date) => {
    return `${months[date.getMonth()]}/${date.getFullYear()}`;
}

export default {getCurrentPeriod, getCurrentPeriodList, getNextPeriod, getPreviousPeriod};