angular.module("app")
  .directive('header', ($interval, $timeout)=>{
    return {
        restrict: 'C',
        link: (scope, element, attrs)=> {
            $(window).scroll(()=>{
                console.log();
                if($(window).scrollTop()>0) {
                    element.addClass('fixed');
                } else {
                    element.removeClass('fixed');
                }
            })
        }
    }
})

    