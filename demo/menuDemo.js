function AppCtrl() {


  this.menuLinks = [
    {
      text: 'Item 1',
      url: '/item-1',
      path: '/item-1'

    },

    {
      text: 'Item 2',
      url: '/item-2',
      path: 'item-2',
      submenu: [
        {
          text: 'Item 2-1',
          url: '/item-2/item2-1',
          path: '/item-2/item2-1'
        }
      ]
    }
  ];


}

function config($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/item-1', {
    templateUrl: 'item-1.html'
  })
    .when('/item-2', {
      templateUrl: 'item-2.html'
    })
    .when('/item-2/item2-1', {
      templateUrl: 'item-2-1.html'
    });
}

angular
  .module('menuDemoApp', ['ngRoute','cdMenu'])
  .config(config)
  .controller('AppCtrl',AppCtrl);


