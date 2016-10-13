var redisApp = angular.module('redis', []);
/**
 * Constructor
 */
function RedisController() {}
RedisController.prototype.onRedis = function() {
        this.scope_.message = [];    
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
        this.scope_.message.push(this.scope_.userdata);
        var value = this.scope_.userdata;
        this.http_.get("app.php?cmd=set&key=messages&value=" + value)
            .success(angular.bind(this, function(data) {
                this.scope_.redisResponse = "Updated.";
            }));
};

redisApp.controller('RedisCtrl', function ($scope, $http, $location) {
        $scope.controller = new RedisController();
        $scope.controller.scope_ = $scope;
        $scope.controller.location_ = $location;
        $scope.controller.http_ = $http;

        $scope.controller.http_.get("app.php?cmd=get&key=messages")
            .success(function(data) {
                console.log(data);
                $scope.messages = data.data.split(",");
            });
});
