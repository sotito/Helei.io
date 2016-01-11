'use strict';

//Setting up route
angular.module('beta').config(['$stateProvider',
    function($stateProvider) {
        // Categories state routing
        $stateProvider.
            state('beta', {
                url: '/beta',
                templateUrl: 'modules/beta/client/views/beta.client.view.html'
            });

    }
]);