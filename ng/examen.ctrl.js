  app.controller('examenCtrl', function($scope, ExamenServei) {
      var id;
      ExamenServei.query(function(llibres) {
          $scope.resultat = resultat;
      });
      $scope.refresh = function() {
          ExamenServei.query(function(resultat) {
              $scope.resultat = resultat;
          });
      }
      $scope.afegir = function() {
          ExamenServei.save({
              isbn: $scope.isbn,
              titol: $scope.titol,
              autors: ["Marc"]
          }, function() {
              $scope.refresh();
              $scope.isbn = "";
              $scope.titol = "";
          });
      }
      $scope.edita = function(a,b) {
          $scope.editatIsbn = a;
          $scope.titolnou = b;
      }
      $scope.editat = function() {
          ExamenServei.update({id:$scope.editatIsbn}, {
              isbn: $scope.editatIsbn,
              titol: $scope.titolnou,
              autors: ["Marc"]
          }, function(llibre) {
              $scope.refresh();
              $scope.editatIsbn = "";
              $scope.titolnou = "";
          });
      }
      $scope.esborra = function(isbn) {
          ExamenServei.remove({id:isbn});
          $scope.refresh();
      }
  });