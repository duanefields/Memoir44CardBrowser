angular.module('cardsApp', [])
  .controller('CardsController', ['$scope', function($scope) {
    $scope.cards = new Array();
    $scope.editing = true;

    // terrain cards
    for (i=1; i <= 67; i++) {
      card = {
        //src: "http://static.memoir44.com/lang/english/images/mm_compendium_terrain_" + i +".jpg",
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_terrain_" + i + ".jpg",
        selected: true
      };
      $scope.cards.push(card)
    }

    // troop cards
    for (i=1; i <= 26; i++) {
      card = {
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_troop_" + i + ".jpg",
        selected: true
      };
      $scope.cards.push(card)
    }

    // swa cards
    for (i=1; i <= 8; i++) {
      card = {
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_swa_" + i + ".jpg",
        selected: true
      };
      $scope.cards.push(card)
    }

    $scope.toggle = function(card) {
      card.selected = ! card.selected;
    };

    $scope.setAll = function(selected) {
      for (i=0; i < $scope.cards.length; i++) {
        $scope.cards[i].selected = selected;
      }
    };

    $scope.selectAll = function() {
      $scope.setAll(true);
    };

    $scope.selectNone = function() {
      $scope.setAll(false);
    };


  }]);
