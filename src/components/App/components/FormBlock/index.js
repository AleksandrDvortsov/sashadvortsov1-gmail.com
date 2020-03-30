import React, { useEffect, useState } from 'react';
import imgRed from './img/red.png';
import imgGreen from './img/green.png';
import { validationTimeDate } from '../../../App/service';

function FormBlock(props) {

    const {
        data
    } = props;

    const [price, setPrice] = useState(0);
    const [imgColor, setImgColor] = useState(imgGreen);

    useEffect(() => {
        if (data.price > price) {
            setImgColor(imgGreen);
        } else {
            setImgColor(imgRed);
        }
        setPrice(data.price);
    }, [data]);

    return (
        <div>
            <form id='myForm' >
                <label id='ticker'>{data.exchange}: {data.ticker} </label>
                <div>
                    <label id='price'>{data.price}</label>
                    <label id='usd'> USD </label>
                    {imgColor === imgGreen ? <label className='changePrice' style={{ color: '#00ff99' }}>
                        +{data.change} ({data.change_percent}%) <img src={imgColor}></img>
                    </label> : <label className='changePrice' style={{ color: '#f76300' }}>
                            -{data.change} ({data.change_percent}%) <img src={imgColor}></img>
                        </label>}</div>
                <label id='dateTime'>Closed: {validationTimeDate(data.last_trade_time)}</label>
            </form>
        </div>
    )
}

export default FormBlock;