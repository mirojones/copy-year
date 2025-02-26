const copyYear = {
  set: (s, e) => {
    var n = new Date().getFullYear();
    e.textContent = s == n ? n : `${s}\u2013${n}`;
  },
  return: (s) => {
    var n = new Date().getFullYear();
    return s == n ? n : `${s}\u2013${n}`;
  }
};
