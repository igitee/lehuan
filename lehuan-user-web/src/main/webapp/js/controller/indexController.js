//首页控制器
app.controller('indexController',function($scope,loginService){
    $scope.showName=function(){
        loginService.showName().success(
            function(response){
                //将返回的loginName给当前变量scope
                $scope.loginName=response.loginName;
            }
        );
    }
});