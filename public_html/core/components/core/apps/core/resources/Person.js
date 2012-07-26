var model = models.Person;

/*
 * List
 * @GET /model/
 * @returns JSON list of records
 */
exports.index = function(request, response) {
    model.findAll()
        .success(function(models) {
            response.json(models.map(function(record) {
                return record.mapAttributes();
            }));
        })
        .failure(function(error) {
            response.send(error);
        });
};

/*
 * Show by Id
 * @GET /model/:id
 * @returns JSON requested record
 */
exports.show = function(request, response) {
    model.find(request.params.person)
        .success(function(record) {
            response.json(record.mapAttributes());
        })
        .failure(function(error) {
            response.send(error);
        });
};