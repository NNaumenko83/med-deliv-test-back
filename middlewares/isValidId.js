const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidId = (id) => (req, res, next) => {
    console.log('id:', id);
    if (!isValidObjectId(req.params[id])) {
        next(HttpError(400, `${id} is not valid id`));
    }
    next();
};

module.exports = isValidId;
