const DATE_PARTS = ['year', 'month', 'day', 'hour', 'minute', 'second'];

let defaultLocale = 'en-UK';
let defaultTimeZone = 'UTC';

export function setDefaultLocale (locale) {
  defaultLocale = locale;
}

export function setDefaultTimeZone (timeZone) {
  defaultTimeZone = timeZone;
}

export default function formatDateTime (date, format, timeZone = defaultTimeZone, locale = defaultLocale) {
  const formatter = new Intl.DateTimeFormat(defaultLocale, {
    'year': 'numeric',
    'month': 'numeric',
    'day': 'numeric',
    'hour': 'numeric',
    'minute': 'numeric',
    'second': 'numeric',
    hour12: false,
    timeZone
  });

  if (!format) {
    return formatter.format(date);
  }

  const parts = formatter.formatToParts(date)
    .filter(({type}) => DATE_PARTS.indexOf(type) >= 0)
    .reduce((parts, {type, value}) => {
      parts[type] = value;
      return parts;
    }, {});

  console.log(parts);
}
