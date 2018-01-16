const pug = require("pug");

function transformPugToFn(src, filePath) {
  try {
    const template = pug.compile(src, { filename: filePath });
    return `var pug = require("pug-runtime"); module.exports = ${template};`;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  process(src, filePath) {
    return transformPugToFn(src, filePath);
  }
};
