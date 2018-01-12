const pug = require('pug');

function transformPugToFn(src, filePath) {
  try {
    const template = pug.compile(src, {filename: filePath});
    return `module.exports = ${template};`;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  process(src, filePath) {
    return transformPugToFn(src, filePath);
  }
};
