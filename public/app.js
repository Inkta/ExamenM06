var app=angular.module("app",["ngResource"]);app.controller("examenCtrl",["$scope","ExamenServei",function(e,r){r.query(function(r){e.productes=r}),e.refresh=function(){r.query(function(r){e.productes=r})},e.buscaSecc=function(){r.query(function(r){e.productes="";for(var c=[],o=0;o<r.length;o++)r[o].seccio==e.seccioBusca&&c.push(r[o]);e.productes=c})},e.menysde=function(){r.query(function(r){e.productes="";for(var c=[],o=0;o<r.length;o++)r[o].preu<10&&c.push(r[o]);e.productes=c})},e.afegir=function(){r.save({codi:e.codi,nom:e.nom,seccio:e.seccio,preu:e.preu},function(){e.refresh()})},e.edita=function(r,c,o,n){e.codiEditar=r,e.nomEditar=c,e.seccioEditar=o,e.preuEditar=n},e.editat=function(){r.update({id:e.codiEditar},{nom:e.nomEditar,seccio:e.seccioEditar,preu:e.preuEditar},function(){e.refresh()})},e.esborra=function(c){r.remove({id:c}),e.refresh()}}]),app.service("ExamenServei",["$resource",function(e){return e("/api/examen/:id",null,{update:{method:"PUT"}})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImV4YW1lbi5jdHJsLmpzIiwic2VydmVpLnN2Yy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIkV4YW1lblNlcnZlaSIsInF1ZXJ5IiwicHJvZHVjdGVzIiwicmVmcmVzaCIsImJ1c2NhU2VjYyIsInByb2R1Y3Rlc1NlY2NpbyIsImkiLCJsZW5ndGgiLCJzZWNjaW8iLCJzZWNjaW9CdXNjYSIsInB1c2giLCJtZW55c2RlIiwicHJvZHVjdGVzUHJldSIsInByZXUiLCJhZmVnaXIiLCJzYXZlIiwiY29kaSIsIm5vbSIsImVkaXRhIiwiYSIsImIiLCJjIiwiZCIsImNvZGlFZGl0YXIiLCJub21FZGl0YXIiLCJzZWNjaW9FZGl0YXIiLCJwcmV1RWRpdGFyIiwiZWRpdGF0IiwidXBkYXRlIiwiaWQiLCJlc2JvcnJhIiwicmVtb3ZlIiwic2VydmljZSIsIiRyZXNvdXJjZSIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQUEsS0FBQUMsUUFBQUMsT0FBQSxPQUFBLGNDQUFGLEtBQUFHLFdBQUEsY0FBQSxTQUFBLGVBQUEsU0FBQUMsRUFBQUMsR0FFQUEsRUFBQUMsTUFBQSxTQUFBQyxHQUNBSCxFQUFBRyxVQUFBQSxJQUVBSCxFQUFBSSxRQUFBLFdBQ0FILEVBQUFDLE1BQUEsU0FBQUMsR0FDQUgsRUFBQUcsVUFBQUEsS0FJQUgsRUFBQUssVUFBQSxXQUNBSixFQUFBQyxNQUFBLFNBQUFDLEdBQ0FILEVBQUFHLFVBQUEsRUFFQSxLQUFBLEdBREFHLE1BQ0FDLEVBQUEsRUFBQUEsRUFBQUosRUFBQUssT0FBQUQsSUFDQUosRUFBQUksR0FBQUUsUUFBQVQsRUFBQVUsYUFDQUosRUFBQUssS0FBQVIsRUFBQUksR0FFQVAsR0FBQUcsVUFBQUcsS0FLQU4sRUFBQVksUUFBQSxXQUNBWCxFQUFBQyxNQUFBLFNBQUFDLEdBQ0FILEVBQUFHLFVBQUEsRUFFQSxLQUFBLEdBREFVLE1BQ0FOLEVBQUEsRUFBQUEsRUFBQUosRUFBQUssT0FBQUQsSUFDQUosRUFBQUksR0FBQU8sS0FBQSxJQUNBRCxFQUFBRixLQUFBUixFQUFBSSxHQUVBUCxHQUFBRyxVQUFBVSxLQUtBYixFQUFBZSxPQUFBLFdBQ0FkLEVBQUFlLE1BQ0FDLEtBQUFqQixFQUFBaUIsS0FDQUMsSUFBQWxCLEVBQUFrQixJQUNBVCxPQUFBVCxFQUFBUyxPQUNBSyxLQUFBZCxFQUFBYyxNQUNBLFdBQ0FkLEVBQUFJLGFBR0FKLEVBQUFtQixNQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEdBQ0F2QixFQUFBd0IsV0FBQUosRUFDQXBCLEVBQUF5QixVQUFBSixFQUNBckIsRUFBQTBCLGFBQUFKLEVBQ0F0QixFQUFBMkIsV0FBQUosR0FHQXZCLEVBQUE0QixPQUFBLFdBQ0EzQixFQUFBNEIsUUFBQUMsR0FBQTlCLEVBQUF3QixhQUNBTixJQUFBbEIsRUFBQXlCLFVBQ0FoQixPQUFBVCxFQUFBMEIsYUFDQVosS0FBQWQsRUFBQTJCLFlBQ0EsV0FDQTNCLEVBQUFJLGFBR0FKLEVBQUErQixRQUFBLFNBQUFkLEdBQ0FoQixFQUFBK0IsUUFBQUYsR0FBQWIsSUFDQWpCLEVBQUFJLGNDakVBUixJQUFBcUMsUUFBQSxnQkFBQSxZQUFBLFNBQUFDLEdBQ0EsTUFBQUEsR0FBQSxrQkFBQSxNQUNBTCxRQUNBTSxPQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1Jlc291cmNlJ10pOyIsIiAgYXBwLmNvbnRyb2xsZXIoJ2V4YW1lbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEV4YW1lblNlcnZlaSkge1xuICAgIFxuICAgICAgRXhhbWVuU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICRzY29wZS5wcm9kdWN0ZXMgPSBwcm9kdWN0ZXM7XG4gICAgICB9KTtcbiAgICAgICRzY29wZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgRXhhbWVuU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdGVzID0gcHJvZHVjdGVzO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICAkc2NvcGUuYnVzY2FTZWNjID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEV4YW1lblNlcnZlaS5xdWVyeShmdW5jdGlvbihwcm9kdWN0ZXMpIHtcbiAgICAgICAgICAkc2NvcGUucHJvZHVjdGVzID0gXCJcIjtcbiAgICAgICAgICB2YXIgcHJvZHVjdGVzU2VjY2lvID0gW107XG4gICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHByb2R1Y3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3Rlc1tpXS5zZWNjaW8gPT0gJHNjb3BlLnNlY2Npb0J1c2NhKVxuICAgICAgICAgICAgICAgICAgcHJvZHVjdGVzU2VjY2lvLnB1c2gocHJvZHVjdGVzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdGVzID0gcHJvZHVjdGVzU2VjY2lvO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJHNjb3BlLm1lbnlzZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgRXhhbWVuU2VydmVpLnF1ZXJ5KGZ1bmN0aW9uKHByb2R1Y3Rlcykge1xuICAgICAgICAgICRzY29wZS5wcm9kdWN0ZXMgPSBcIlwiO1xuICAgICAgICAgIHZhciBwcm9kdWN0ZXNQcmV1ID0gW107XG4gICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHByb2R1Y3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3Rlc1tpXS5wcmV1IDwgMTApXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0ZXNQcmV1LnB1c2gocHJvZHVjdGVzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdGVzID0gcHJvZHVjdGVzUHJldTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICRzY29wZS5hZmVnaXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBFeGFtZW5TZXJ2ZWkuc2F2ZSh7XG4gICAgICAgICAgICAgIGNvZGk6ICRzY29wZS5jb2RpLFxuICAgICAgICAgICAgICBub206ICRzY29wZS5ub20sXG4gICAgICAgICAgICAgIHNlY2NpbzogJHNjb3BlLnNlY2NpbyxcbiAgICAgICAgICAgICAgcHJldTogJHNjb3BlLnByZXVcbiAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICRzY29wZS5lZGl0YSA9IGZ1bmN0aW9uKGEsYixjLGQpIHtcbiAgICAgICAgICAkc2NvcGUuY29kaUVkaXRhciA9IGE7XG4gICAgICAgICAgJHNjb3BlLm5vbUVkaXRhciA9IGI7XG4gICAgICAgICAgJHNjb3BlLnNlY2Npb0VkaXRhciA9IGM7XG4gICAgICAgICAgJHNjb3BlLnByZXVFZGl0YXIgPSBkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAkc2NvcGUuZWRpdGF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgRXhhbWVuU2VydmVpLnVwZGF0ZSh7aWQ6JHNjb3BlLmNvZGlFZGl0YXJ9LCB7XG4gICAgICAgICAgICAgIG5vbTogJHNjb3BlLm5vbUVkaXRhcixcbiAgICAgICAgICAgICAgc2VjY2lvOiAkc2NvcGUuc2VjY2lvRWRpdGFyLFxuICAgICAgICAgICAgICBwcmV1OiAkc2NvcGUucHJldUVkaXRhclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKHByb2R1Y3RlKSB7XG4gICAgICAgICAgICAgICRzY29wZS5yZWZyZXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAkc2NvcGUuZXNib3JyYSA9IGZ1bmN0aW9uKGNvZGkpIHtcbiAgICAgICAgICBFeGFtZW5TZXJ2ZWkucmVtb3ZlKHtpZDpjb2RpfSk7XG4gICAgICAgICAgJHNjb3BlLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgfSk7IiwiICBhcHAuc2VydmljZShcIkV4YW1lblNlcnZlaVwiLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiAkcmVzb3VyY2UoJy9hcGkvZXhhbWVuLzppZCcsIG51bGwsIHtcbiAgICAgICAgICAndXBkYXRlJzoge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9