var angMod = angular.module("meapp", ['ngCookies']);
angMod.controller('mecontroller', function($scope, $http, $cookieStore) {
    
    var cookieEmail = $cookieStore.get("email");
    var cookiePassword = $cookieStore.get("password");
    if(cookieEmail!=undefined&&cookiePassword!=undefined){
        if (confirm("Hi " + cookieEmail+" , Welcome back! log in directly?") == true) {
            location.href = "http://www.info6250.com/";
        } else {
           //login with another username
        }
        
    }
    /*sign up page*/
    $scope.signup = function(){
        angular.forEach($scope.input, function(value, key){
        // console.log(key+" : "+value);
            $http.get("map.php?cmd=set&key="+key+"&value="+value)
                .success(function () {
                    $scope.redisResponse = "Updated.";
                    // console.log("Set Secceed.");
                });
            
        });
        $scope.reset();
        location.href = "login.html";
    }
    /*reset inputs*/
    $scope.reset = function(){
        $scope.input.email = "";
        $scope.input.password = "";
    }


    /* log in page*/
    $scope.login = function(){
        $http.get("map.php?cmd=get&key=email")
            .success(function (data) {
                // console.log("Get Succeed: ");
                // console.log("DATA: "+ data);
                // console.log("DATA.DATA: "+data.data);
                 if(data.data == $scope.user.email){
                    $http.get("map.php?cmd=get&key=password")
                    .success(function (data2) {
                        if(data2.data==$scope.user.password){
                            $cookieStore.put("email", $scope.user.email);
                            $cookieStore.put("password", $scope.user.password);
                            location.href = "http://www.info6250.com";
                        }
                        else{
                            alert("Wrong password");
                            $scope.user.password = "";
                        }
                    })
                }
                else{
                    alert("no such user");
                }
                
            })
            .error(function () {
                console.log("Can't get data from redis");
            });
    }
});
