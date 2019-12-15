exports.logger = function logger(req, resp, next){
    console.log(req.url);
    next();
}