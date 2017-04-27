'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  var dependenciasProyecto = ['ui.router'];

  angular.module('app', dependenciasProyecto);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var about = {
      name:'aboutUs',
      url: '/aboutUs',
      template: '<view-about></view-about>'
    };

    var player = {
      name:'player',
      url: '/player',
      template: '<view-player></view-player>'
    };
  
    var game = {
      name:'game',
      url: '/game',
      template: '<view-game></view-game>'
    };
  

    $stateProvider.state(main);
    $stateProvider.state(about);
    $stateProvider.state(player);
    $stateProvider.state(game);

    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');


  }

})(angular);