import { toCurrencyFormat } from './number.ts';

describe(`number utils`, () => {
  describe(`toCurrencyFormat`, () => {
    it('should return 0 if 0 is provided', () => {
      expect(toCurrencyFormat(0)).toEqual('0');
    });
    it('should return negative number if negative number is provided', () => {
      expect(toCurrencyFormat(-12)).toEqual('-12');
    });
    it('should return whole number if whole number provided', () => {
      expect(toCurrencyFormat(533)).toEqual('533');
    });
    it('should return number with two decimal places if only one decimal place provided', () => {
      expect(toCurrencyFormat(533.4)).toEqual('533.40');
    });
    it('should return number with two decimal places when number with 2 decimal places provided', () => {
      expect(toCurrencyFormat(533.36)).toEqual('533.36');
    });
    it('should return number rounded to the nearest 2 decimal places', () => {
      expect(toCurrencyFormat(123.1549)).toEqual('123.15');
      expect(toCurrencyFormat(123.155)).toEqual('123.16');
    });
  });
});
