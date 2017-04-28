(function (angular) {

    angular.module('app').component('viewPlayer', {
        templateUrl: 'app/components/player/view-player.html',
        controller: ['$state','decksFactory', viewPlayer],
        controllerAs: 'viewPlayer'
    });

    function viewPlayer($state,decksFactory) {
        var vm = this;

        vm.$onInit = function () {
            vm.showMsg = false;
            vm.formIsSend = false;
        };
        vm.addPlayer = function () {
            var newPlayer = {
                name: vm.playerName,
                surname: vm.playerSurname,
                avatar: "app/styles/imgs/" + vm.playerAvatar.value+".jpg"
            };

            vm.formIsSend = true;

            if (!newPlayer.name || !newPlayer.surname ) {
                vm.showMsg = true;
            } else {
                vm.showMsg = false;
            }

            if (!vm.showMsg) {
                
                decksFactory.addNewPlayer(newPlayer);
                vm.goToGame();
            }
        }
        vm.goToGame = function () {
            $state.go('game');
        }
    }

})(angular);