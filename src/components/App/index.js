import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { myConnect } from './connectToServer';
import { setDataAction } from './actions';

import BlockServerTime from './components/BlockServerTime';
import FormBlock from './components/FormBlock';
import ServerError from './components/ServerError';

function App(props) {
    const {
        data, setData
    } = props;

    useEffect(() => {
        myConnect('AAPL', setData);

    }, []);

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <div >
            {data.ticker !== undefined ? <div id='myApp' >
                <BlockServerTime />
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

