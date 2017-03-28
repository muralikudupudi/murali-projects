
 var app= angular.module('myapp',[]);
app.provider('date',function(){
  var greet;
    return{
        setGreeting: function(value){
            greet=value;
        },

      $get:function(){
           return {
               showDate: function(){
                 var date= new Date();
                 return  greet+" It's "+date.getHours();
               },
               devshowDate: function(){
                   var date= new Date();
                   return  date.getHours();
               }

           }

      }
  }
});
  app.config (function(dateProvider){
      var time=dateProvider.$get().devshowDate();
      if(time>0&& time<12){
          dateProvider.setGreeting("Goodmorning!");

      } else if(time>12 && time<17){

          dateProvider.setGreeting("Goodday!");
      }
      else{
          dateProvider.setGreeting("Goodnight!");
      }


  });
  app.controller('app',function($scope,date){
   $scope.greetMessage= date.showDate();

  });