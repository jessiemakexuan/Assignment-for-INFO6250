//controller:
var radisApp = angular.module("myApp", []);
radisApp.controller('meCtrl', function($scope,$http) {
            $scope.res = [];
            $scope.submit = function(){
               $scope.result ={
                  Username : "",
                  password : "",
                  firstname = "",
                  lastname = "",
                  sex="",
                  DOB="",
                  phonenumber="",
                  address = "",
                  city = "",
                  state = "",
                  zipcode=""
               };

               angular.forEach($scope.info, function(value, key){
                     $http.get("map.php?cmd=set&key="+key+"&value="+value)
                           .success(function (data, status, headers, config) {
                               $scope.redisResponse = "Updated.";
                           });
                     $http.get("map.php?cmd=get&key="+key)
                            .success(function (data, status, headers, config) {
                                $scope.result[key] = data.data;
                           })
                            .error(function (data, status, header, config) {
                                console.log(data);
                           });

               });
               $scope.res.push(userdata);
            }

            $scope.reset = function(){
               $scope.email="";
               $scope.password="";
            	$scope.firstname = "";
            	$scope.lastname = "";
               $scope.sex="";
               $scope.DOB="";
               $scope.phonenumber=""
            	$scope.address = "";
            	$scope.city = "";
            	$scope.state = "";
               $scope.zipcode="";
            }
            
         });
