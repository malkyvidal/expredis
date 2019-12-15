exports.notFound = function(req, res, next){

    res.send(404,"you seem lost");

};

exports.error = function error(err, req, res, next){
    console.log(err);
    res.send(500, 'Something broke. What did you do?');
   };