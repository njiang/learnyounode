module.exports = scenario;

function scenario(log, cb) {
  function start() {
    process.nextTick(thing);
  }

  var value = 97;

  function foo() {
    value *= 13;
	log.info("Final value %d", value);
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
	log.info("racer value: %d", value);
    setTimeout(foo, 0);
  }

  value = 213;

  function thing() {
    value += 131;
	log.info("Thing value: %d", value);
    process.nextTick(racer);
  }
}