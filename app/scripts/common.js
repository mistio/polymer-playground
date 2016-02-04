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
