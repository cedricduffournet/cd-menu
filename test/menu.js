'use strict';

describe('Directive : menu', function () {

  var el, scope;

  beforeEach(module('cdMenu'));

  beforeEach(inject(function ($rootScope, $compile) {
    $rootScope.links = [
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
    el = angular.element('<menu links="links"></menu>');
    scope = $rootScope;
    $compile(el)($rootScope);
    scope.$digest();
  }));


  it('should attache menu to the page with 3 links', function () {
      var links = el.find('a');
      expect(links.length).toBe(3);
  });

});