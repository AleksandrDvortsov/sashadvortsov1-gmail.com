import { validationTimeDate, isServerCorrectRespons} from './service'

describe('Test validationTimeDate', ()=>{
    let timeExpect = '';
    let timeEquals = '';

    it('Respons correct time',()=>{
        timeExpect = '2020-03-28T15:38:07.000Z';
        timeEquals = '2020-3-28 17:38:07';
        expect(validationTimeDate(timeExpect)).toEqual(timeEquals);
    })
    it('Respons invalid time', ()=>{
        timeExpect = 'time';
        timeEquals = 'Invalid Date';
        expect(validationTimeDate(timeExpect)).toEqual(timeEquals);
    })
    it('Respons invalid (timeExpect ret not a string)', ()=>{
        timeExpect = 20200101;
        timeEquals = 'Invalid typeof time';
        expect(validationTimeDate(timeExpect)).toEqual(timeEquals);
    })
})

describe('Validation respons from server', () => {
    it('valid response', () => {
      const timeExp = {
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: "233.35",
        change: "87.51",
        change_percent: "0.38",
        last_trade_time: "2020-03-27T17:31:16.000Z",
        dividend: "0.82",
        yield: "1.11"
      }
      expect(isServerCorrectRespons(timeExp)).toBe(true)
    })
    it('Invalid respons', () => {
      const timeExp = {
        name: 'test'
      }
      const timeEq = false;
      expect(isServerCorrectRespons(timeExp)).toBe(timeEq)
    })
  })
  
