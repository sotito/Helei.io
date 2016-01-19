'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', '$window',
  function ($scope, $stateParams, $location, Authentication, Articles, $window) {
    $scope.authentication = Authentication;
/*
    $scope.imageURL = "";


    // Create file uploader instance
    $scope.uploader = new FileUploader({
      url: 'api/users/picture'
    });
*/

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      // Create new Article object
      var article = new Articles({
        etitle: this.etitle,
        econtent: this.econtent,
        ecategory: this.ecategory,
        elocation: this.elocation,
        dt: this.dt,
        edt: this.edt
      });

      // Redirect after save
      article.$save(function (response) {
        $location.path('articles/' + response._id);
        $window.location.href="http://helei.co";

        // Clear form fields
        $scope.etitle = '';
        $scope.econtent = '';
        $scope.ecategory = '';
        $scope.elocation = '';
        $scope.dt = '';
        $scope.edt = '';

      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });

    };

    // Remove existing Article
    $scope.remove = function (article) {
      if (article) {
        article.$remove();

        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function () {
          $location.path('articles');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var article = $scope.article;

      article.$update(function () {
        $location.path('articles/' + article._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.articles = Articles.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.article = Articles.get({
        articleId: $stateParams.articleId
      });
    };
  }
]);