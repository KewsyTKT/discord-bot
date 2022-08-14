const COLOR = require(`chalk`);

exports.warn = (...message) => {
  console.log(COLOR.yellow(`<warn>`))
  console.warn(...message);
  console.log(COLOR.yellow(`</warn>`))
};

exports.error = (...message) => {
  console.log(COLOR.red(`<error>`))
  console.warn(...message);
  console.log(COLOR.red(`</error>`))
};

exports.info = (...message) => {
  console.log(COLOR.cyan(`[SPACE DEV] > ` + COLOR.yellow(...message)));
};

exports.chat = (...message) => {
  console.log(COLOR.green(`[SPACE DEV] ` + COLOR.cyan(...message)));
};

exports.message = message => {
  console.log(COLOR.cyan(`[SPACE DEV] > ` + COLOR.yellow(...message)));
};

exports.console = (...message) => {
  console.log(...message);
};
