const rMethod = (req, res, next) => {
    console.log(`Request Method:${req.method}`);
    next();
};

const rUrl = (req, res, next) => {
    console.log(`Request URL:${req.url}\n`);
    next();
};


const validate = (schema) => (req, res, next) => {
    const {
        error
    } = schema.validate(req.body);
    if (error) {
        res.status(422).send(error.details[0].message);
        return;
    }
    next();
};


module.exports = {
    rMethod,
    rUrl,
    validate
};
