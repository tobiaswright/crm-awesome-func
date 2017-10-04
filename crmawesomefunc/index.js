module.exports = function (context, req) {
    
    context.bindings.outputDocument = req.query

    context.done();
};