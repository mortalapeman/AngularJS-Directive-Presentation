angular.module('app', [])

.controller('MainCtrl', function($scope) {
  $scope.completed = function(val) {
    alert(val + ' is done!');
  }
  $scope.counter = 0;
})

.directive('plkFadein', function($parse) {
  return function(scope, el, attrs) {
    function parseAttr(option, other) {
      return attrs[option] ? $parse(attrs[option])(scope) : other;
    }
    scope.$watch($parse(attrs.plkFadein), function(val){
      if (val) {
        el.fadeIn({
          duration: parseAttr('duration', 400),
          easing: parseAttr('easing', 'swing'),
          complete: function() { parseAttr('complete', angular.noop); }
        });
      }
    });
  }
});
