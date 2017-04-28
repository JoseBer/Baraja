(function(angular) {

  angular.module('app').component('viewGame', {
    templateUrl:  'app/components/game/view-game.html',
    controller:  ['$state','decksFactory',viewGame],
    controllerAs: 'viewGame',
    bindings: {
      player:'<',
      itemDecks: '<'
    }
  });

  function viewGame($state,decksFactory) {
    var vm = this;
    vm.$onInit = function() {
      vm.player= decksFactory.getPlayer();
      vm.itemsDecks= decksFactory.gameDeck();
    }
    vm.buscarParejas= function (){
      var ncartas=0;
      var id1=itemDecks.id;
      
        ncartas++;
      if (ncartas===2){
        var id2= itemDecks.id;
        decksFactory.lookingTwo(id1,id2,itemDecks);
      }
    }
    vm.goToGame=function(){
        $state.go('game');
    }
  }

})(angular);