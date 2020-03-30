import io from 'socket.io-client';
import { isServerCorrectRespons } from '../service';

let socket = null;

export const myConnect = (stockSymbol, setData) => {
    socket = io('http://localhost:4001');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            if (isServerCorrectRespons(JSON.parse(data))) setData(JSON.parse(data))
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

export const timeChangerToServer = (time) => {
    // set time to server 
    console.log('request tot server ', time)
} 
