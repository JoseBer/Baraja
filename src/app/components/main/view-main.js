(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main.html',
    controller:  ['$state',viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state) {
    var vm = this;

    vm.goToPlayer=function(){
        $state.go('player');
    }
  }

})(angular);