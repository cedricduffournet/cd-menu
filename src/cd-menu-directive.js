(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name ui.directive:menu
   * @restrict E
   *
   * @description
   * Insert multi level menu
   *
   * @param {string} links JSON string to deserialize
   * ```json
   [
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
   ]
   * ```
   * */

  function menu() {

    var directive = {
      templateUrl: 'template/menu-tpl.html',
      restrict: 'E',
      replace: true,
      scope: {
        links: '=links'
      }
    };

    return directive;
  }

  /**
   * !! Undocumented !!
   * ngdoc directive
   * @name ui.directive:menuItem
   * @restrict E
   *
   * @description
   * - Display an element in the menu.
   * - Add active class on item clicked
   * - Select correct item in item list refered to the $location
   *
   * @param {object} itemlink link to display
   */
  function menuItem($location) {

    function link($scope, $element, $attrs) {
      if ($attrs.ngHref === '#') {
        $element.on('click', function (e) {
          e.preventDefault();
        });
      }


      $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
          return 'active';
        } else {
          return '';
        }
      };

    }

    var directive = {
      templateUrl: 'template/menu-item-tpl.html',
      restrict: 'E',
      replace: true,
      scope: {
        itemlink: '=itemlink'
      },
      link: link
    };


    return directive;
  }

  angular
    .module('cdMenu', ['cd-menu-templates.app'])
    .directive('menu', menu)
    .directive('menuItem', menuItem);

}());

