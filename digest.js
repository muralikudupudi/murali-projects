var app= angular.module('myapp',[]);
app.controller('app',function($scope){

$scope.myRandomNumber = Math.random();

document.querySelector('input').addEventListener('click',function(){
console.log('Button clicked');
    $scope.myRandomNumber = Math.random();
    $scope.$digest();
},false);


});