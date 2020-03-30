export const validationTimeDate = (time) => {
    if (typeof (time) === 'string') return new Date(Date.parse(time)).toLocaleString();
    else return `Invalid typeof time`;
}

export const isServerCorrectRespons = (obj) => {
    if (obj.ticker && obj.exchange && obj.price
        && obj.change && obj.change_percent && obj.last_trade_time
        && obj.dividend && obj.yield) {
        return true;
    }
    return false;
}