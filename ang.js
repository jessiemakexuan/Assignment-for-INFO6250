var app = angular.module("myApp", []);
app.controller('meCtrl', function($scope) {
            $scope.res = [];
            $scope.submit = function(){
               var userdata = {
               username: $scope.email,
               password: $scope.password,
               firstName: $scope.firstname,
               lastname: $scope.lastname,
               sex: $scope.sex,
               DOB: $scope.DOB,
               Phonenumber: $scope.phonenumber,
               address: $scope.address,
               city: $scope.city,
               state: $scope.state,
               zipcode: $scope.zipcode
               };
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
