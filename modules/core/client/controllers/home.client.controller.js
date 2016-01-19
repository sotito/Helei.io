'use strict';

var homeController = angular.module('core');

homeController.controller('HomeController', ['$scope', 'Authentication', 'NgMap', '$uibModal', '$timeout',
  function ($scope, Authentication, NgMap, $uibModal, $timeout) {
    // This provides Authentication context.
    $scope.authentication = Authentication;







          $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpBrWGaTh-XzFaNoaSR0FkjUaAWfDPRjE";



          $scope.dynMarkers = [];


          NgMap.getMap({timeout:5000}).then(function(map) {

              $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpBrWGaTh-XzFaNoaSR0FkjUaAWfDPRjE";


              var bounds = new google.maps.LatLngBounds();
              for (var k in map.customMarkers) {
                  var cm = map.customMarkers[k];
                  $scope.dynMarkers.push(cm);
                  bounds.extend(cm.getPosition());
              }

              map.markerCluster = new MarkerClusterer(map, map.customMarkers);
              map.markerClusterer = new MarkerClusterer(map, map.dynMarkers, {});
             // map.setCenter(bounds.getCenter());
          //    map.fitBounds(bounds);

          });



    $scope.szoom = 8;




    var edt = $scope.edt;




    $scope.ecategory = {
      ecategory: null
    };

    var imgopen = true;

    $scope.imgopen = imgopen;


    $scope.ecategory = $scope.catdata;
    var eventidtag;

    $scope.getEventId = function(article){
      console.log(article);
    };


    var eventDirId;
    $scope.getEventDir = function(eventDir){
      eventDirId = eventDir;
      $scope.eventDirId = eventDir;
      console.log(eventDir);

    };







    $scope.tabs = [
      { },
      { },
      { },
    ];


   $scope.eventmodal = function (eventId) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'modules/articles/client/views/view-articles.client.view.html',

        controller: function ($scope, $uibModalInstance, $http) {



          $scope.ok = function () {
            $uibModalInstance.ok();

          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };


        },
        size: 'lg'
      });


    };









    $scope.types = "['establishment']";

    $scope.placeChanged = function() {
      $scope.elocation = this.getPlace();
      console.log('location', $scope.elocation.geometry.location);
    };







      $scope.location = function () {


        $scope.slocation = "current-position";




         };








    $scope.today = function() {
      $scope.dt = new Date();
      $scope.edt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };

    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
      $scope.edt = new Date(year, month, day);
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events =
        [
          {
            date: tomorrow,
            status: 'full'
          },
          {
            date: afterTomorrow,
            status: 'partially'
          }
        ];

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };


    $scope.mytimestart = new Date();

    $scope.hstep = 1;
    $scope.mstep = 1;


    $scope.ismeridian = true;



    $scope.update = function() {

      $scope.dt.setHours( 14 );
      $scope.dt.setMinutes( 0 );
      $scope.mytimestart = $scope.dt;
    };




    $scope.clear = function() {
      $scope.mytimestart = null;
    };

    $scope.mytimeend = new Date();




   $scope.update = function() {


      $scope.edt.setHours( 14 );
      $scope.edt.setMinutes( 0 );
      $scope.mytimeend = $scope.edt;
    };



    $scope.clear = function() {
      $scope.mytimeend = null;
    };




  }]);


homeController.controller('DatepickerDemoCtrl', ['$scope', 'Authentication', 'NgMap', '$uibModal',
    function ($scope, Authentication, NgMap, $uibModal) {

    }]);







homeController.controller('mapController',['$scope', 'Authentication', 'NgMap', '$uibModal',
  function ($scope, Authentication, NgMap, $uibModal) {


/*

    var vm = this;
    vm.positions = [
      [54.779951, 9.334164], [47.209613, 15.991539],
      [51.975343, 7.596731], [51.97539, 7.596962],
      [47.414847, 8.23485], [47.658028, 9.159596],
      [47.525927, 7.68761], [50.85558, 9.704403],
      [54.320664, 10.285977], [49.214374, 6.97506],
      [52.975556, 7.596811], [52.975556, 7.596811],
      [52.975556, 7.596811], [52.975556, 7.596811],
      [52.975556, 7.596811], [52.975556, 7.596811],
      [52.975556, 7.596811], [52.975556, 7.596811],
      [52.975556, 7.596811], [52.975556, 7.596811]];

    vm.dynMarkers = []
    NgMap.getMap().then(function(map) {
      var bounds = new google.maps.LatLngBounds();
      for (var k in map.customMarkers) {
        var cm = map.customMarkers[k];
        vm.dynMarkers.push(cm);
        bounds.extend(cm.getPosition());
      };

      vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});
      map.setCenter(bounds.getCenter());
      map.fitBounds(bounds);
    });
*/


}]);



