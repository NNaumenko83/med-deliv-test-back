const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidId = (id) => (req, res, next) => {
    if (!isValidObjectId(req.params[id])) {
        next(HttpError(400, `${contactId} is not valid id`));
    }
    next();
};

module.exports = isValidId;
