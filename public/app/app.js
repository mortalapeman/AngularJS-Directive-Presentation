angular.module('app', [])

.directive('plNoduplicate', function() {
  var usernames = ["Bob", "Harry"]
  return {
    require: 'ngModel',
    link: function(scope, el, attrs, cntrl) {
      cntrl.$parsers.push(function(val) {
        if (usernames.indexOf(val) !== -1) {
          cntrl.$setValidity('noduplicate', false);
          return undefined;
        }
        cntrl.$setValidity('noduplicate', true);
        return val;
      })
    }
  };
})

.directive('tick', function() {
  return {
    restrict: 'E',
    template: '<span>&#10003</span>',
    replace: true
  };
})
