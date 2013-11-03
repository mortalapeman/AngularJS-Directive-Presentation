angular.module('app', [])

.directive('prVisible', function() {
  return function(scope, el, attrs) {
    scope.$watch(attrs.prVisible, function(val) {
      if (val) {
        el.css('visibility', 'visible')
      } else {
        el.css('visibility', 'hidden')
      }
    });
  };
});
