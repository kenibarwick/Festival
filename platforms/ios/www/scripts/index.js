// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
	
	app.controller('MyCtrl', ['$scope', '$http', '$q', function($scope, $http, $q) {

    $scope.MyDelegate = {
      configureItemScope: function(index, itemScope) {
        if (!itemScope.item) {
          console.log("Created item #" + index);
          itemScope.canceler = $q.defer();

          itemScope.item = {
            name: '',
            type: '',
            desc: '',
            index: ''
          };
                    $http.get('http://ciafadmin.herokuapp.com/api/schedule', 
                    {
                       timeout: itemScope.canceler.promise
                    }).success(function (data) {
						if(data[index].name)
                        itemScope.item.name = data[index].name;
                        itemScope.item.type = data[index].type;
                        itemScope.item.desc = data[index].description;
                        itemScope.item.index = index;
                    }).error(function () {
                        itemScope.item.desc = 'No bacon lorem ipsum';
                        itemScope.item.type = 'No bacon'
                    });
        }
      },
      calculateItemHeight: function(index) {
        return 91;
      },
      countItems: function() {
		  console.log()
        return 31;
      },
      destroyItemScope: function(index, itemScope) {
        itemScope.canceler.resolve();
        console.log("Destroyed item #" + index);
      }
    };
  }]);
	
} )();