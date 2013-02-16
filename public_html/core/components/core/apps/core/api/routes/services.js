/*
 * GET service(s).
 */
exports.findAll = function(req, res) {
    res.send([{name:'mqlread'}, {name:'mqlwrite'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};

/*
 * POST service.
 */
exports.addOne = function(req, res) {
    res.send({info: "addOne not implemented"});
};

/*
 * PUT service.
 */
exports.updateOne = function(req, res) {
    res.send({info: "updateOne not implemented"});
};

/*
 * DELETE service.
 */
exports.deleteOne = function(req, res) {
    res.send({info: "deleteOne not implemented"});
};