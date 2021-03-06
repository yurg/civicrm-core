(function(angular, $, _) {
  // Declare a list of dependencies.
  angular.module('statuspage', [
    'crmUi', 'crmUtil', 'ngRoute'
  ]);

  // router

  angular.module('statuspage').config( function($routeProvider) {
    $routeProvider.when('/status', {
      controller: 'statuspageStatusPage',
      templateUrl: '~/statuspage/StatusPage.html',

      resolve: {
        statuses: function(statuspageGetStatuses) {
          return statuspageGetStatuses({is_visible: 1});
        },
        statusModel: function(statuspageStatusModel) {
          return statuspageStatusModel();
        },
        preferences: function(statuspageGetPreferences){
          return statuspageGetPreferences();
        }
      }
    });

    $routeProvider.when('/status/hushed', {
      controller: 'statuspageStatusPage',
      templateUrl: '~/statuspage/StatusPage.html',

      resolve: {
        statuses: function(statuspageGetStatuses) {
          return statuspageGetStatuses({is_visible: 0});
        },
        statusModel: function(statuspageStatusModel) {
          return statuspageStatusModel();
        },
        preferences: function(statuspageGetPreferences){
          return statuspageGetPreferences();
        }
      }
    });

  }
);
})(angular, CRM.$, CRM._);
