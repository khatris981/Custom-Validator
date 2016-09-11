var app = angular.module('form-example1', []);

app.directive('validvalue', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var suggestedValues = ['A1', 'B1', 'B2', 'B3'];

      ctrl.$validators.validvalue = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return true;
        }
          if (suggestedValues.indexOf(modelValue) === -1) {
            // The username is available
            return false;
          }

        return true;
      };
    }
  };
});