'use strict';

angular.module('losentisteApp.earthquakesList', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
