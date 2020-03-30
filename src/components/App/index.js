import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { myConnect } from './connectToServer';
import { setDataAction } from './actions';

import BlockServerTime from './components/BlockServerTime';
import FormBlock from './components/FormBlock';
import ServerError from './components/ServerError';

let NAME_STOCK = 'AAPL';

function App(props) {
    const {
        data, setData
    } = props;

    useEffect(() => {
        myConnect(NAME_STOCK, setData);
    }, []);

    return (
        <div >
            {data.ticker !== undefined ? <div id='myApp' >
                <BlockServerTime NAME_STOCK={NAME_STOCK} setData={setData} />
                <FormBlock data={data} />
            </div> : <ServerError />}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataAction(data));
        },
    }
}

const mapStateToProps = state => {
    return {
        data: state.info_data.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

