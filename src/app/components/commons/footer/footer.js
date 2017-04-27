(function(angular) {

  angular.module('app').component('footerDecks', {
    templateUrl:  'app/components/commons/footer/footer.html',
    controller: ['$state', footerDecks],
    controllerAs: 'footerDecks'
  });

  function footerDecks($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('aboutUs');
    };
  }

})(angular);