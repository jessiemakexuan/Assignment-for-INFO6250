var angMod = angular.module("meapp", ['ngCookies']);
angMod.controller('mecontroller', function($scope, $http, $cookieStore) {
    
    var cookieEmail = $cookieStore.get("email");
    var cookiePassword = $cookieStore.get("password");
    if(cookieEmail!=undefined&&cookiePassword!=undefined){
        if (confirm("Hi" + cookieEmail+", log in directly?") == false) {
            location.href = "http://www.info6250.com/";
        } else {
           
        }
        
    }
    /* Submit sign up form*/
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
    /*Cancel sign up process*/
    $scope.reset = function(){
        $scope.info.email = "";
        $scope.info.password = "";
    }
    /* Submit log in form*/
    $scope.login = function(){
        $http.get("map.php?cmd=get&key=email")
            .success(function (data, status, headers, config) {
                console.log("Get Succeed: ");
                console.log("DATA: "+ data);
                console.log("STATUS: "+status);
                console.log("HEADERS:"+headers);
                console.log("CONFIG: "+config);
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
                            alert("your password is not corrected");
                            $scope.user.password = "";
                        }
                    })
                }
                else{
                    alert("no such user");
                }
                
            })
            .error(function (data, status, header, config) {
                alert("Cann't find you, you need sign up first!");
                console.log(data);
            });
    }
});
