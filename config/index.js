import path from 'path';

const config = require(`./${process.env.NODE_ENV}`);

const defaults = {
    root: path.join(__dirname, '/..')
};

export default Object.assign(defaults, config);