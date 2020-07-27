import React from 'react';

const currencyFormat = new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" });

export default function Transaction({ transaction }) {

    let { day, category, description, value, type } = transaction;

    let containerColor = type === '+' ? '#80CBC4' : '#EF9A9A';
    day = ('' + day).padStart(2, '0');
    value = currencyFormat.format(value);

    return (
        <div className="row">
            <div className="col s12 m12 l12">
                <div style={{...STYLES.container, backgroundColor: containerColor}}>
                    <div style={STYLES.info}>
                        <span style={STYLES.day}>{day}</span>
                        <div style={STYLES.details}>
                            <span style={STYLES.category}>{category}</span>
                            <span>{description}</span>
                        </div>
                    </div>
                    <span class="right" style={STYLES.value}>{value}</span>
                </div>
            </div>
        </div>
    )
}

const STYLES = {
    container: {
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "5px",
        backgroundColor: "#aaa",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    details: {
        padding: "0",
        margin: "0"
    },
    info: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    day: {
        fontWeight: "bold",
        fontFamily: "'PT Mono', 'Inconsolata', Monaco, Consolas, 'Andale Mono', monospace",
        fontSize: "1.2rem",
        marginRight: "15px"
    },
    category: {
        fontWeight: "bold",
        display: "block"
    },
    value: {
        fontFamily: "'PT Mono', 'Inconsolata', Monaco, Consolas, 'Andale Mono', monospace",
        fontSize: "1.4rem",
        marginLeft: "15px"
    }
}
