app = angular.module('cardsApp', []);

app.controller('CardsController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    $("#cardselector").on("select2-selecting", function(e) {
      console.log("selecting val="+ e.val);
      card = $scope.cardMap[e.val];
      console.log(card);
      e.preventDefault();
      console.log (e);
      $scope.$apply(function() {
        $scope.selectedCards.push(card);
        $("#cardselector").select2("close");
      });
    });

    $scope.trustAsHtml = function(value) {
      return $sce.trustAsHtml(value);
    };

    $http.get("cards.json")
      .success(function (data) {
        $scope.cards = data;
        $scope.selectedCards = new Array();
        $scope.cardMap = {};
        for (var cat=0; cat < $scope.cards.length; cat++) {
          var category = $scope.cards[cat];
          for (var i=0; i < category.cards.length; i++) {
            var card = category.cards[i];
            $scope.cardMap[card.url] = card;
          }
          console.log($scope.cardMap);
        }
      })
      .error(function (data, status, headers, config) {
        console.log("Error loading cards: " + data);
      });

    $scope.editing = true;

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
