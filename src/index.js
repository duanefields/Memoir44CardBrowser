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
        selected: i <= 15
      };
      $scope.cards.push(card)
    }

    // action cards
    for (i=1; i <= 31; i++) {
      if (i == 28 || i == 29 || i ==30) {
        continue;
      }
      card = {
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_action_" + i + ".jpg",
        selected: false
      };
      $scope.cards.push(card)
    }

    // troop cards
    for (i=1; i <= 26; i++) {
      card = {
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_troop_" + i + ".jpg",
        selected: false
      };
      $scope.cards.push(card)
    }


    // nation cards
    for (i=1; i <= 7; i++) {
      card = {
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_nation_" + i + ".jpg",
        selected: false
      };
      $scope.cards.push(card)
    }

    // swa cards
    for (i=1; i <= 8; i++) {
      card = {
        number: i,
        src: "http://static.daysofwonder.com/memoir44/en/img/mm_compendium_swa_" + i + ".jpg",
        selected: false
      };
      $scope.cards.push(card)
    }

    $scope.onCardTap = function(card) {
      if ($scope.editing) {
        card.selected = ! card.selected;
      }
    };

    $scope.setAll = function(selected) {
      for (i=0; i < $scope.cards.length; i++) {
        $scope.cards[i].selected = selected;
      }
    };

    $scope.toggleAll = function() {
      for (i=0; i < $scope.cards.length; i++) {
        if ($scope.cards[i].selected) {
          $scope.setAll(false);
          return;
        }
      }
      $scope.setAll(true);
    };

    $scope.toggleSet = function(item) {
      console.log(item);
    };


  }]);
