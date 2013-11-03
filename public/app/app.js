angular.module('app', [])

.controller('MainCtrl', function($scope) {
  $scope.things = ['A', 'B', 'C'];
  $scope.add = function(item) {
    $scope.things.push(item);
  }
})

.directive('simpleRepeat', function() {
  return {
    priority: 1000,
    terminal: true,
    transclude: 'element',
    compile: function(el, attr, transclude) {
      return function(scope, el, attr) {
        var cleanup = [];
        scope.$watch(attr.simpleRepeat, function(val) {
          angular.forEach(cleanup, function(fn) { fn(); });
          cleanup = [];
          angular.forEach(val, function(x) {
            var child = scope.$new();
            child[attr.binding] = x;
            transclude(child, function(clone) {
              cleanup.push(function() {
                child.$destroy();
                clone.remove();
              });
              el.before(clone);
            });
          });
        }, true);
      }
    }
  }
})
