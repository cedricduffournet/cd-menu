angular.module('cd-menu-templates.app', ['template/menu-item-tpl.html', 'template/menu-tpl.html']);

angular.module("template/menu-item-tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/menu-item-tpl.html",
    "<a ng-href=\"{{itemlink.url}}\" ng-class=\"getClass('{{itemlink.url}}')\" >{{itemlink.text}}</a>\n" +
    "");
}]);

angular.module("template/menu-tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/menu-tpl.html",
    "<ul class=\"nav nav-sidebar\">\n" +
    "<li ng-repeat=\"link in links\">\n" +
    "  <menu-item itemlink=link></menu-item>\n" +
    "      <div ng-init=\"links = link.submenu;\" ng-include=\"'template/menu-tpl.html'\" ng-if=\"link.submenu\"></div>\n" +
    "</li>\n" +
    "</ul>\n" +
    "");
}]);
