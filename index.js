/*! (c) Andrea Giammarchi - ISC */
var self = this || {};
try { self.queueMicrotask = queueMicrotask; }
catch (o_O) {
  try {
    o_O = Promise.resolve();
    self.queueMicrotask = o_O.then.bind(o_O);
  } catch (o_O) {
    self.queueMicrotask = function (fn) {
      setTimeout(fn, 0);
    };
  }
}
