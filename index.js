angular.module('cardsApp', [])
  .controller('CardsController', ['$scope', function($scope) {
    $scope.cards = new Array();
    $scope.showAllCards = true;

    for (i=1; i <= 67; i++) {
      card = {
        //src: "http://static.memoir44.com/lang/english/images/mm_compendium_terrain_" + i +".jpg",
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_terrain_" + i + ".jpg",
        selected: i % 2 == 0
      };
      $scope.cards.push(card)
    }

    $scope.toggle = function() {
    };

  }]);
