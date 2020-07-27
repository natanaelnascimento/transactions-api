import React from 'react';
import InfoField from './InfoField';

const currencyFormat = new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" });

export default function CurrencyField({ value, label, color }) {
    value = currencyFormat.format(value);
    return (
        <InfoField value={value} label={label} color={color} />
    )
}
