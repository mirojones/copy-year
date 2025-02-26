const copyrightYear = {
  set: function(s, e) {
    var n = new Date().getFullYear();
    e.textContent = s == n ? n : `${s}\u2013${n}`;
  },
  return: function(s) {
    var n = new Date().getFullYear();
    return s == n ? n : `${s}\u2013${n}`;
  }
};
