var application = angular.module('myapp',[]);

application.service('random',function(){

var num= Math.floor(Math.random()*10);
this.generate= function(){
    return num;
};

});
application.controller('app',function($scope,random){

$scope.generateRandom =function(){
$scope.randomNumber= random.generate();
    $scope.randomNumber1= random.generate();
}

});