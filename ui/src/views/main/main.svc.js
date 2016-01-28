'use strict';
module.exports = function (ngModule) {
    ngModule.factory('mainSvc', ['$q', function ($q) {

        function getData(input) {
            var data,
                error,
                deferred = $q.defer();

            if (input) {
                data = "Hello, " + input.toString();
                console.log(data);
                deferred.resolve(data);
            } else {
                error = "Please supply data input";
                deferred.reject(error);
            }
            return deferred.promise;
        }

        return {
            getData: getData
        };

    }]);
};
