app.controller('MyCtrl', ['$scope', '$http', '$q', function($scope, $http, $q) {

    $scope.MyDelegate = {
      configureItemScope: function(index, itemScope) {
        if (!itemScope.item) {
          console.log("Created item #" + index);
          itemScope.canceler = $q.defer();

          itemScope.item = {
            nane: '',
            type: '',
            desc: '',
            index: ''
          };
                    $http.get('http://ciafadmin.herokuapp.com/api/schedule', 
                    {
                       timeout: itemScope.canceler.promise
                    }).success(function (data) {
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
        return 31;
      },
      destroyItemScope: function(index, itemScope) {
        itemScope.canceler.resolve();
        console.log("Destroyed item #" + index);
      }
    };
  }]);