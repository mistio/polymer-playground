var TIME_MAP = {
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
    WEEK: 7 * 24 * 60 * 60 * 1000,
    MONTH: 30 * 24 * 60 * 60 * 1000,
    YEAR: 12 * 30 * 24 * 60 * 60 * 1000,
};

Date.prototype.getMonthName = function(short) {
  if (short) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ][this.getMonth()];
  }

  return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ][this.getMonth()];
}

Date.prototype.getTimeFromNow = function () {
    var now = new Date();
    var diff = now - this;
    var ret = '';

    if (diff < 10 * TIME_MAP.SECOND)
        ret = 'Now';

    else if (diff < TIME_MAP.MINUTE)
        ret = parseInt(diff / TIME_MAP.SECOND) + ' sec';

    else if (diff < TIME_MAP.HOUR)
        ret = parseInt(diff / TIME_MAP.MINUTE) + ' min';

    else if (diff < TIME_MAP.DAY)
        ret = parseInt(diff / TIME_MAP.HOUR) + ' hour';

    else if (diff < 2 * TIME_MAP.DAY)
        ret = 'Yesterday';

    else if (diff < TIME_MAP.YEAR)
        ret = this.getMonthName(true) +  ' ' + this.getDate();

    if (ret.indexOf('sec') > -1 ||
        ret.indexOf('min') > -1 ||
        ret.indexOf('hour') > -1) {

        // Add 's' for plural
        if (ret.split(' ')[0] != '1')
            ret = ret + 's';

        ret = ret + ' ago';
    }

    return ret;
}
