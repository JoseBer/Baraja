(function(angular) {

  angular.module('app').component('headerDecks', {
    templateUrl:  'app/components/commons/header/header.html',
    controller: ['$state', headerDecks],
    controllerAs: 'headerDecks'
  });

  function headerDecks($state) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);