angular.module("login", [])
    .directive("nglLogin", [
        function () {
            return {
                scope: {},
                restrict: "E",
                templateUrl: "/src/components/login/login.html",
                replace: true,
                controller: "nglLoginCtrl"
            }
        }])
    //功能点：1、登录跳到首页 2、登录成功的返回信息要本地持久化存储 3、历史登陆用户的头像展示
    .controller("nglLoginCtrl", [
        "$scope",
        "$http",
        "$location",
        function ($scope, $http, $location) {
            // 登陆功能
            $scope.user = {
                tc_name: "前端学院",
                tc_pass: "111111"
            };
            $scope.login = function () {
                $http({
                    url: "/v6/login",
                    method: "post",
                    data: "tc_name=" + $scope.user.tc_name + "&" + "tc_pass=" + $scope.user.tc_pass,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                    .then(function (resp) {
                        var data = resp.data;
                        if (data.code == 200) {
                            localStorage.setItem("userInfo", JSON.stringify(data.result));
                            $location.path("/");
                        } else {
                            alert("服务器错误");
                        }
                    });
            };
            console.log("登录");
        }]);