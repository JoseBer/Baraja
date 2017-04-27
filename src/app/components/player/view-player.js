(function (angular) {

    angular.module('app').component('viewPlayer', {
        templateUrl: 'app/components/player/view-player.html',
        controller: ['$state', viewPlayer],
        controllerAs: 'viewPlayer'
    });

    function viewPlayer($state) {
        var vm = this;

        vm.$onInit = function () {
            vm.showMsg = false;
            vm.formIsSend = false;
        };
        vm.addPlayer = function () {
            var newPlayer = {
                name: vm.playerName,
                surname: vm.playerSurname,
                avatar: vm.playerAvatar
            };

            vm.formIsSend = true;

            if (!newPlayer.name || !newPlayer.surname || !newPlayer.avatar) {
                vm.showMsg = true;
            } else {
                vm.showMsg = false;
            }

            /*if (!vm.showMsg) {
                animalsFactory.addAnimal(newAnimal);
            }*/
        }
        vm.goToGame = function () {
            $state.go('game');
        }
    }

})(angular);