basePath = '..';
autoWatch = true;
singleRun = false;
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'src/template/cd-menu-directive.tpl.js',
  'src/cd-menu-directive.js',
  'test/menu.js'
];
browsers = ['Chrome'];
reporters = ['progress', 'dots'];
colors = true;