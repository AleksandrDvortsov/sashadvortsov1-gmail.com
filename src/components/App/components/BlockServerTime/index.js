import React, { useState, useRef } from 'react';
import { timeChangerToServer } from '../../connectToServer/index';
import './style.scss';

function BlockServerTime(props) {

    const {
        NAME_STOCK, setData
    } = props;

    // const [isVisibleMenuTime, setIsVisibleMenuTime] = useState(false);
    const inputNumber = useRef(null);

    function listenerBtnDropDown() {
        let time = inputNumber.current.valueAsNumber;
        if (isNaN(time)) return;
        if (time < inputNumber.current.min || time > inputNumber.current.max) {
            alert(`Value should be within ${inputNumber.current.min} - ${inputNumber.current.max}`);
            return;
        }
        timeChangerToServer(time, NAME_STOCK, setData);

    }

    return (
        <div id='menu'>
            <div className="card" tabindex="0">
                <span className="card__infoicon">
                    <p>≣</p>
                </span>
                <h1 className="card__title">time respot to server</h1>
                <p className="card__credits">
                    <input className="card__reference" type="number" min='500' max='10000' step='500' ref={inputNumber} onChange={listenerBtnDropDown} />
                </p>
            </div>
        </div>
    )
}

export default BlockServerTime;