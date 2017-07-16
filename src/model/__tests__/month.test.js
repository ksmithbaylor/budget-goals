import Month from '../month';

const m = Month.fromNumberAndYear;

describe('Month', () => {
  describe('comparisons', () => {
    test('isEqualTo', () => {
      expect(m(5, 2017).isEqualTo(m(5, 2017))).toBeTruthy();
      expect(m(5, 2017).isEqualTo(m(5, 2018))).toBeFalsy();
      expect(m(5, 2017).isEqualTo(m(6, 2017))).toBeFalsy();
      expect(m(5, 2017).isEqualTo(m(6, 2016))).toBeFalsy();
    });

    test('isAfter', () => {
      expect(m(5, 2017).isAfter(m(3, 2016))).toBeTruthy();
      expect(m(5, 2017).isAfter(m(3, 2017))).toBeTruthy();
      expect(m(5, 2017).isAfter(m(3, 2018))).toBeFalsy();
      expect(m(5, 2017).isAfter(m(5, 2016))).toBeTruthy();
      expect(m(5, 2017).isAfter(m(5, 2017))).toBeFalsy();
      expect(m(5, 2017).isAfter(m(5, 2018))).toBeFalsy();
      expect(m(5, 2017).isAfter(m(7, 2016))).toBeTruthy();
      expect(m(5, 2017).isAfter(m(7, 2017))).toBeFalsy();
      expect(m(5, 2017).isAfter(m(7, 2018))).toBeFalsy();
    });

    test('isBefore', () => {
      expect(m(5, 2017).isBefore(m(3, 2016))).toBeFalsy();
      expect(m(5, 2017).isBefore(m(3, 2017))).toBeFalsy();
      expect(m(5, 2017).isBefore(m(3, 2018))).toBeTruthy();
      expect(m(5, 2017).isBefore(m(5, 2016))).toBeFalsy();
      expect(m(5, 2017).isBefore(m(5, 2017))).toBeFalsy();
      expect(m(5, 2017).isBefore(m(5, 2018))).toBeTruthy();
      expect(m(5, 2017).isBefore(m(7, 2016))).toBeFalsy();
      expect(m(5, 2017).isBefore(m(7, 2017))).toBeTruthy();
      expect(m(5, 2017).isBefore(m(7, 2018))).toBeTruthy();
    });

    test('isNotAfter', () => {
      expect(m(5, 2017).isNotAfter(m(3, 2016))).toBeFalsy();
      expect(m(5, 2017).isNotAfter(m(3, 2017))).toBeFalsy();
      expect(m(5, 2017).isNotAfter(m(3, 2018))).toBeTruthy();
      expect(m(5, 2017).isNotAfter(m(5, 2016))).toBeFalsy();
      expect(m(5, 2017).isNotAfter(m(5, 2017))).toBeTruthy();
      expect(m(5, 2017).isNotAfter(m(5, 2018))).toBeTruthy();
      expect(m(5, 2017).isNotAfter(m(7, 2016))).toBeFalsy();
      expect(m(5, 2017).isNotAfter(m(7, 2017))).toBeTruthy();
      expect(m(5, 2017).isNotAfter(m(7, 2018))).toBeTruthy();
    });

    test('isNotBefore', () => {
      expect(m(5, 2017).isNotBefore(m(3, 2016))).toBeTruthy();
      expect(m(5, 2017).isNotBefore(m(3, 2017))).toBeTruthy();
      expect(m(5, 2017).isNotBefore(m(3, 2018))).toBeFalsy();
      expect(m(5, 2017).isNotBefore(m(5, 2016))).toBeTruthy();
      expect(m(5, 2017).isNotBefore(m(5, 2017))).toBeTruthy();
      expect(m(5, 2017).isNotBefore(m(5, 2018))).toBeFalsy();
      expect(m(5, 2017).isNotBefore(m(7, 2016))).toBeTruthy();
      expect(m(5, 2017).isNotBefore(m(7, 2017))).toBeFalsy();
      expect(m(5, 2017).isNotBefore(m(7, 2018))).toBeFalsy();
    });
  });
});
