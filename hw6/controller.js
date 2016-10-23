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
        angular.forEach($scope.info, function(value, key){
        console.log(key+" : "+value);
            $http.get("map.php?cmd=set&key="+key+"&value="+value)
                .success(function (data, status, headers, config) {
                    $scope.redisResponse = "Updated.";
                    console.log("Set Secceed.");
                });
            
        });
        $scope.reset();
        //location.href = "login.html";
    }
    /*reset inputs*/
    $scope.reset = function(){
        $scope.info.email = "";
        $scope.info.password = "";
    }


    /* log in page*/
    $scope.login = function(){
        $http.get("map.php?cmd=get&key=email")
            .success(function (data, status, headers, config) {
                console.log("Get Succeed: ");
                console.log("DATA: "+ data);
                console.log("DATA.DATA: "+data.data);
                 if(data.data == $scope.user.email){
                    $http.get("map.php?cmd=get&key=password")
                    .success(function (data2, status, headers, config) {
                        if(data2.data==$scope.user.password){
                            location.href = "http://www.info6250.com";
                            $cookieStore.put("email", $scope.user.email);
                            $cookieStore.put("password", $scope.user.password);
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
            .error(function (data, status, header, config) {
                console.log("Can't get data from redis");
            });
    }
});
