'use strict';

module.exports = function (Movie) {

  Movie.getmovies = async function () {
    var response;
    response = Movie.find({});
    return response
  };
  Movie.remoteMethod(
    'getmovies', {
    http: {
      path: '/l/list',
      verb: 'get'
    },
    returns: {
      arg: 'movies',
      type: 'array'
    }
  }
  );
  Movie.deletemoviebyid = async function (id) {
    var response;
    response = Movie.destroyById(id);
    return response
  };
  Movie.remoteMethod(
    'deletemoviebyid', {
    accepts: { arg: 'id', type: 'number' },
    http: {
      path: '/g/:id',
      verb: 'delete'
    },
    returns: {
      arg: 'movies',
      type: 'object'
    }
  }
  );
  Movie.getmoviebyid = async function (movieid) {
    var response;
    response = Movie.find({ where:{id:movieid} });
    if(typeof movieid=='number')
    {
      return response;
    }
    else{
      var res= Movie.find({where:{name:movieid}});
      return res;
    }
    
  };
  Movie.remoteMethod(
    'getmoviebyid', {
      accepts: { arg: 'movieid', type: 'number' },
    http: {
        path: '/g/:id',
      verb: 'get'
    },
    returns: {
      arg: 'movies',
      type: 'object'
    }
  }
  );
  Movie.countmovie = async function () {
    var response;
    response = Movie.count({});
    return response
  };
  Movie.remoteMethod(
    'countmovie', {
    http: {
      path: '/g/count',
      verb: 'get'
    },
    returns: {
      arg: 'movies',
      type: 'integer'
    }
  }
  );


};
