var app = angular.module('form-example1', []);

app.directive('validvalue', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var suggestedValues = ['A1', 'B1', 'B2', 'B3'];

      ctrl.$asyncValidators.validvalue = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.when();
        }

        var def = $q.defer();

        $timeout(function() {
          // Mock a delayed response
          if (suggestedValues.indexOf(modelValue) === -1) {
            // The username is available
            def.reject();
          } else {
            def.resolve();
          }

        }, 2000);

        return def.promise;
      };
    }
  };
});