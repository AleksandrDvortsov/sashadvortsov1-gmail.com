import React, { useState, useRef } from 'react';
import { timeChangerToServer } from '../../connectToServer/index';
import './style.scss';

function BlockServerTime(props) {

    const {
        NAME_STOCK, setData
    } = props;

    const [isVisibleMenuTime, setIsVisibleMenuTime] = useState(false);
    const inputNumber = useRef(null);

    function listenerBtnDropDown() {
        setIsVisibleMenuTime(!isVisibleMenuTime);
        if (isVisibleMenuTime) {
            let time = inputNumber.current.valueAsNumber;
            if (isNaN(time)) return;
            if (time < inputNumber.current.min || time > inputNumber.current.max) {
                alert(`Value should be within ${inputNumber.current.min} - ${inputNumber.current.max}`);
                return;
            }
            timeChangerToServer(time, NAME_STOCK, setData);
        }
    }
    
    return (
        <div id='menu'>
            {!isVisibleMenuTime && <label className='btnDropDown' onClick={listenerBtnDropDown}>≣</label>}
            {isVisibleMenuTime && <div><label className='btnDropDown' onClick={listenerBtnDropDown}>×</label>
                <div id='time' className='time'><p>time respot to server</p>
                    <input type="number" min='500' max='10000' step='500' ref={inputNumber} /> </div>
            </div>}
        </div>
    )
}

export default BlockServerTime;