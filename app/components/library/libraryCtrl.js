(function () {
    'use strict';

    angular.module('App')
        .controller('LibraryCtrl', LibraryCtrl);

    function LibraryCtrl(libraryHttp){
        var vm = this;

        vm.books = [];

        console.log('start to get book data..');
        libraryHttp.getBookById()
            .then(successFn);

        function successFn(books) {
            console.log('data is ready...');
            vm.books = books;
        }

    }
}());
