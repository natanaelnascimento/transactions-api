const periodFormatter = (year, month, day) => {
    let ret = year;
    if(month) ret += '-' + ('' + month).padStart(2, '0');
    if(day) ret += '-' + ('' + day).padStart(2, '0');
    return ret;
}

export default periodFormatter;