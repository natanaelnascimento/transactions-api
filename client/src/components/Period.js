import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import periodHelper from '../helpers/period';

export default function Period({ value, onChange }) {

    // Para funcionamento do Materialize (select)
    useEffect(() => {
        M.AutoInit();
    }, [value]);

    const periodList = periodHelper.getCurrentPeriodList();

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    const handlePreviousPeriodClick = () => {
        const period = periodHelper.getPreviousPeriod(value);
        onChange(period.value);
    }

    const handleNextPeriodClick = () => {
        const period = periodHelper.getNextPeriod(value);
        onChange(period.value);
    }

    return (
        <div style={STYLES.flex}>
            <button onClick={handlePreviousPeriodClick} className="btn waves-effect waves-light">{'<'}</button>
            <div style={STYLES.select} className="input-field">
                <select value={value} onChange={handleChange}>
                    {periodList.map(p => {
                        return (
                            <option key={p.value} value={p.value}>
                                {p.description}
                            </option>
                        )
                    })}
                </select>
            </div>
                <button onClick={handleNextPeriodClick} className="btn waves-effect waves-light">{'>'}</button>
        </div>
    )
}

const STYLES = {
    select: {
        marginLeft: "10px",
        marginRight: "10px"
    },
    flex: {
        display: "flex",
        flexDirexction: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
}
