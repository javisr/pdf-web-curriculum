(function() {

  var app = angular.module('cv', ['ngRoute', 'pascalprecht.translate']);

  app.run(['$route', '$rootScope', '$location', function($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function(path, reload) {
      if (reload === false) {
        var lastRoute = $route.current;
        var un = $rootScope.$on('$locationChangeSuccess', function() {
          $route.current = lastRoute;
          un();
        });
      }
      return original.apply($location, [path]);
    };
  }]);

  app.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'templates/cv.html',
        controller: 'cvCtrl'
      }).when('/:lang', {
        templateUrl: 'templates/cv.html',
        controller: 'cvCtrl'
      });
    }
  ]);


  app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript|skype):/);
  }]);

  app.config(function($translateProvider) {
    $translateProvider.translations('en', {
      T_DOWNLOAD: 'Download PDF',
      T_SUMMARY: 'Summary',
      T_EXPERIENCE: 'Experience',
      T_SKILLS: 'Skills',
      T_AT: 'at',
      T_AND: 'and',
      T_TO: 'to',
      T_PROJECTS: 'Projects',
      T_EDUCATION: 'Education',
      T_LANGUAGES: 'Languages',
      T_CERTIFICATIONS: 'Certifications',
      T_TECHNOLOGIES: 'Technologies',
      T_ENGLISH: 'English',
      T_SPANISH: 'Spanish'
    });
    $translateProvider.translations('es', {
      T_DOWNLOAD: 'Descargar en PDF',
      T_SUMMARY: 'Resumen',
      T_EXPERIENCE: 'Experiencia',
      T_SKILLS: 'Conocimientos',
      T_AT: 'en',
      T_AND: 'y',
      T_TO: 'hasta',
      T_PROJECTS: 'Proyectos',
      T_EDUCATION: 'Educación',
      T_LANGUAGES: 'Idiomas',
      T_CERTIFICATIONS: 'Certificaciones',
      T_TECHNOLOGIES: 'Tecnologías',
      T_ENGLISH: 'Inglés',
      T_SPANISH: 'Español'
    });
    $translateProvider.preferredLanguage('en');
  });

  app.filter("sanitize", ['$sce', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
  }]);

})();
