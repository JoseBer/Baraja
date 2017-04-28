(function (angular) {

    /* Inyectamos $q para gestionar promesas y $http para las llamadas ajax */
    angular.module('app').factory('decksFactory', ['$q', '$http', decksFactory]);

    function decksFactory($q, $http) {
        var module = {};
        var self = module;


        module.fullDeck = [

            { "id": 0, "img": "brian.jpg", "back": "back.jpg" },
            { "id": 1, "img": "cris.jpg", "back": "back.jpg" },
            { "id": 2, "img": "loise.jpg", "back": "back.jpg" },
            { "id": 3, "img": "meg.jpg", "back": "back.jpg" },
            { "id": 4, "img": "mono.jpg", "back": "back.jpg" },
            { "id": 5, "img": "peter.jpg", "back": "back.jpg" },
            { "id": 6, "img": "quaj.jpg", "back": "back.jpg" },
            { "id": 7, "img": "stewy.jpg", "back": "back.jpg" }

        ];

        module.player = [
            { name: "", surname: "", avatar: "" }
        ];

        module.getAllDeck = function () {
            return self.fullDeck;
        }

        module.addNewPlayer = function (_player_) {
            var newPlayer = {
                name: _player_.name,
                surname: _player_.surname,
                avatar: _player_.avatar
            };
            module.player = newPlayer;
        }

        module.getPlayer = function () {
            return module.player;

        }

        module.gameDeck = function () {
            var localDeck = self.fullDeck;
            /*es duplicar el array, desordenarlo y mandarlo a la pantalla del juego*/
        }

        module.lookingTwo = function (id1,id2,arrayDoble) {
            /*Buscar en mi array doble si las dos cartas son iguales*/
        }

        return module;
    };

})(angular);
