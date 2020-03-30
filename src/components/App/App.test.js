
import reducer from './reducer';

describe('Test Reducer', () => {
    const state = {
        data: {
            name: 'test'
        }
    }
    it('set first data', () => {
        const action = {
            type: 'SET_DATA',
            data: {
                name: 'first name'
            }
        };

        expect(reducer(state, action)).toEqual({
            ...state,
            data: {
                name: 'first name'
            }
        })
    })
    it('set second data', () => {
        const action = {
            type: 'SET_DATA',
            data: {
                ticker: "",
                exchange: "NASDAQ",
                price: "233.35",
                change: "87.51",
                change_percent: "0.38",
                last_trade_time: "2020-03-27T17:31:16.000Z",
                dividend: "0.82",
                yield: "1.11"

            }
        };
        expect(reducer(state, action)).toEqual({
            ...state,
            data: {
                ticker: "",
                exchange: "NASDAQ",
                price: "233.35",
                change: "87.51",
                change_percent: "0.38",
                last_trade_time: "2020-03-27T17:31:16.000Z",
                dividend: "0.82",
                yield: "1.11"
            }
        })
    })
})

describe('Test actions', () => {
    it('Set data action', () => {
        const expectedAction = {
            type: 'SET_DATA',
            data: { name: 'testName' }
        }
        expect(setActionData(expectedAction.data)).toEqual(expectedAction)
    })
})
