module.exports = function (context, req) {
    req.query.tags = JSON.parse(req.query.tags)

    context.bindings.outputDocument = req.query

    context.done();
};