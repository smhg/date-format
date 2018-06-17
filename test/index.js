import format, {setDefaultTimeZone} from '../index';
import assert from 'assert';

describe('formatDateTime', () => {
  it('should use the default format', () => {
    const date = new Date(2018, 4, 14, 20, 52, 16);

    assert(format(date) === '5/14/2018, 18:52:16', 'invalid result without format');
    assert(format(date, 'Y-m-d H:i:s') === '2018-05-14 18:52:16', 'invalid result with format');
    assert(format(date, 'Y-m-d H:i:s', 'Europe/Brussels') === '2018-05-14 20:52:16', 'invalid result with format and timezone');
  });
});

describe('setDefaultTimeZone', () => {
  it('should use the default format', () => {
    setDefaultTimeZone('Europe/Brussels');

    const date = new Date(2018, 4, 14, 20, 52, 16);

    assert(format(date) === '5/14/2018, 20:52:16', 'invalid result without format');
    assert(format(date, 'Y-m-d H:i:s') === '2018-05-14 20:52:16', 'invalid result with format');
  });
});
