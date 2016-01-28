'use strict';
module.exports = function (ngModule) {
    ngModule.controller('mainCtrl', ['$scope', 'mainSvc', function ($scope, mainSvc) {

        $scope.view2 = "View 2 - This is a test string!!";

        //example of adding promise to the $scope
        var promise = mainSvc.getData("Joshua");
        promise.then(function (data) {
            $scope.name = data;
        });

    }]);
};
