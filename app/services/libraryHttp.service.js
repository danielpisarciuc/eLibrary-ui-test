(function () {
    'use strict';

    angular.module('App')
        .factory('libraryHttp', libraryHttp);

    function libraryHttp($q, $http){

        var BASE_URL = 'http://localhost:9091/elibrary-ds/';

        return {
            getBookById: getBookById
        }

        function getBookById(){
            return $http.get(BASE_URL + 'book/search/LUNI?size=5')
                .then(sendGetData)
                .catch(sendGetError)
        }

        function sendGetData(response) {
            return response.data;
        }

        function sendGetError(response) {
            return $q.reject('Error response: ' + response.status + ')');
        }
    }

}());
