  app.controller('examenCtrl', function($scope, ExamenServei) {
    
      ExamenServei.query(function(productes) {
          $scope.productes = productes;
      });
      $scope.refresh = function() {
          ExamenServei.query(function(productes) {
              $scope.productes = productes;
          });
      }
      
      
      $scope.buscaSecc = function() {
        ExamenServei.query(function(productes) {
          $scope.productes = "";
          var productesSeccio = [];
              for (var i=0; i < productes.length; i++) {
                  if (productes[i].seccio == $scope.seccioBusca)
                  productesSeccio.push(productes[i]);
              }
              $scope.productes = productesSeccio;
              
          });
      }
      
      $scope.menysde = function() {
        ExamenServei.query(function(productes) {
          $scope.productes = "";
          var productesPreu = [];
              for (var i=0; i < productes.length; i++) {
                  if (productes[i].preu < 10)
                  productesPreu.push(productes[i]);
              }
              $scope.productes = productesPreu;
              
          });
      }
      
      $scope.afegir = function() {
          ExamenServei.save({
              codi: $scope.codi,
              nom: $scope.nom,
              seccio: $scope.seccio,
              preu: $scope.preu
          }, function() {
              $scope.refresh();
          });
      }
      $scope.edita = function(a,b,c,d) {
          $scope.codiEditar = a;
          $scope.nomEditar = b;
          $scope.seccioEditar = c;
          $scope.preuEditar = d;
      }
      
      $scope.editat = function() {
          ExamenServei.update({id:$scope.codiEditar}, {
              nom: $scope.nomEditar,
              seccio: $scope.seccioEditar,
              preu: $scope.preuEditar
          }, function(producte) {
              $scope.refresh();
          });
      }
      $scope.esborra = function(codi) {
          ExamenServei.remove({id:codi});
          $scope.refresh();
      }
  });