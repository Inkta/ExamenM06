  app.service("ExamenServei", function($resource) {
      return $resource('/api/examen/:id', null, {
          'update': {
              method: 'PUT'
          }
      });
  })