var todoApp = angular.module('todoApp');

todoApp.factory('todoFactory', ['$resource',
  function($resource){
    return $resource('items/:itemDescription', {
      itemDescription: '@description'}
      );
  }]);
