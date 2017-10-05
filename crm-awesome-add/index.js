module.exports = function (context, req) {
    req.query.tags = JSON.parse(req.query.tags)
    console.log(req.query)
    context.bindings.outputDocument = req.query

    context.done();
};