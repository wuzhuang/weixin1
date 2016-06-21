var app = angular.module('weixin',['ngAnimate','ngRoute','ngTouch']);
app.controller('mainCtrl',['$scope',function($scope){
    $scope.title = '微信';
    $scope.show = false;
}]);

 var lianxiren=[
   {tupian:"images/11.jpg",name:"权志龙",message:"你好吗",time:"9:30",liaotianjilu:[
     {xinxi:'hello',isMe:false},
     {xinxi:'怎么了',isMe:true},
     {xinxi:'没啥事',isMe:false},
     {xinxi:'好吧',isMe:true},
     {xinxi:'出来逛逛？',isMe:true},
     ] },
   {tupian:"images/12.jpg",name:"鹿晗",message:"hello",time:"8:30",liaotianjilu:[
     {xinxi:'有演唱会去吗',isMe:false},
     {xinxi:'谁的',isMe:true},
     {xinxi:'bigbang',isMe:false},
     {xinxi:'南京',isMe:false},
     {xinxi:'好啊好啊',isMe:true}, 
     ] },
   {tupian:"images/13.jpg",name:"张艺兴",message:"早上好",time:"9:30",liaotianjilu:[
     {xinxi:'星期天',isMe:false},
     {xinxi:'事儿还是很多',isMe:true},
     {xinxi:'就说没办法啊',isMe:false},
     ] },
   {tupian:"images/14.jpg",name:"王薇",message:"晚上好",time:"12:20",liaotianjilu:[
     {xinxi:'aaaa',isMe:false},
     {xinxi:'aaa',isMe:true},
     {xinxi:'aa',isMe:false},
     ] },
   {tupian:"images/15.jpg",name:"咔哇",message:"中午好",time:"9:30",liaotianjilu:[
     {xinxi:'aaaa',isMe:false},
     {xinxi:'aaa',isMe:true},
     {xinxi:'aa',isMe:false},
     ] },
   {tupian:"images/16.jpg",name:"采贝",message:"欢挺",time:"10:50",liaotianjilu:[
     {xinxi:'aaaa',isMe:false},
     {xinxi:'aaa',isMe:true},
     {xinxi:'aa',isMe:false},
     ] },
   {tupian:"images/17.jpg",name:"张杰",message:"呵呵哒",time:"9:30",liaotianjilu:[
     {xinxi:'aaaa',isMe:false},
     {xinxi:'aaa',isMe:true},
     {xinxi:'aa',isMe:false},
     ] }
   ]

app.controller('weixinCtrl',['$scope',function($scope){
  $scope.lianxiren = lianxiren;
  $scope.deleteLianxiren = function(id){
    $scope.lianxiren = $scope.lianxiren.filter(function(v,i){
      return i !== id;
    })
  }
}])

app.controller('tongxunluCtrl',['$scope',function($scope){

  $('#tongxunlu zimu-list').on('click',function(){
      var key = $trim($(this).text());
      var pos = {};
  $('#tongxunlu active'),each(function(){
    pos[$.trim($this.text())] = $(this)
  })
  var top = pos[key];
  })

      $scope.lists = [
      {
        key:'A',
        people:[
            {tupian:"images/16.jpg",name:"安婷"},
            {tupian:"images/17.jpg",name:"岸雨"},
            {tupian:"images/11.jpg",name:"艾喃"},
            {tupian:"images/12.jpg",name:"阿六"},
           
        ]
      },
      {
        key:'B',
        people:[
            {tupian:"images/13.jpg",name:"白婷"},
            {tupian:"images/14.jpg",name:"贝雨"},
            {tupian:"images/15.jpg",name:"白喃"},
        ]
      },
      {
        key:'G',
        people:[
            {tupian:"images/16.jpg",name:"顾婷"},
            {tupian:"images/17.jpg",name:"古雨"},
            {tupian:"images/11.jpg",name:"高喃"},
        ]
      },
      {
        key:'L',
        people:[
            {tupian:"images/12.jpg",name:"李婷"},
            {tupian:"images/13.jpg",name:"雷雨"},
            {tupian:"images/14.jpg",name:"落喃"},
        ]
      },
      {
        key:'Q',
        people:[
            {tupian:"images/15.jpg",name:"曲婷"},
            {tupian:"images/16.jpg",name:"屈雨"},
            {tupian:"images/17.jpg",name:"千喃"},
        ]
      },
      {
        key:'S',
        people:[
            {tupian:"images/15.jpg",name:"宋婷"},
            {tupian:"images/16.jpg",name:"松雨"},
        ]
      },
      {
        key:'W',
        people:[
            {tupian:"images/15.jpg",name:"吴婷"},
            {tupian:"images/16.jpg",name:"武雨"},
            {tupian:"images/17.jpg",name:"瓦喃"},
        ]
      },
      {
        key:'Z',
        people:[
            {tupian:"images/15.jpg",name:"张婷"},
            {tupian:"images/16.jpg",name:"周雨"},
            {tupian:"images/17.jpg",name:"钟喃"},
        ]
      },
    ];
}]);

app.controller('liaotianCtrl',['$scope','$routeParams', function($scope,$routeParams){
  var id = $routeParams.id;
  $scope.duifang = lianxiren[id].tupian;
  $scope.ziji = 'images/18.jpg';
  $scope.ll = lianxiren[id].liaotianjilu;
}])


app.controller('faxianCtrl',['$scope',function($scope){

}])

app.controller('woCtrl',['$scope',function($scope){

}])

app.directive('uqTabBar',[function(){
	return {
		restrict:'E',
		templateUrl:'view/uq-tab-bar.html'
	}
}])
app.directive('uqTop',[function(){
	return {
		restrict:'E',
		templateUrl:'view/uq-top.html'
	}
}])
app.directive('uqList',[function(){
  return {
    restrict:'E',
    templateUrl:'view/uq-list.html',
    link:function($scope,el){
      if( localStorage.scroll ){
        setTimeout(function(){
          $(content).scrollTop(localStorage.scroll)
        },0)
      }
      var opp = {};
      $('.zimu').each(function(){
        opp[ $(this).attr('data-key') ] = $(this).position().top;
      })
      $('.zimu-list').on('click','li',function(){
        var top = opp[ $.trim( $(this).text() ) ];
        $('#content').scrollTop(top)
        localStorage.scroll = top;
      })
    }
  }
}])

app.config(['$routeProvider',function($routeProvider,$locationProvider){
  $routeProvider.when('/',{
  	templateUrl:'view/weixin.html'
  }).when('/liaotian/:id',{
    templateUrl:'view/liaotian.html'
  }).when('/weixin',{
    templateUrl:'view/weixin.html'
  }).when('/tongxunlu',{
    templateUrl:'view/tongxunlu.html'
  }).when('/faxian',{
    templateUrl:'view/faxian.html'
  }).when('/wo',{
    templateUrl:'view/wo.html'
  }).otherwise({
  	redirectTo:'/'
  })

}]);
