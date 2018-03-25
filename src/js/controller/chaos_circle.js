angular.module("app")
  .directive('chaosCircles', ($interval, $timeout)=>{
    return (scope, element, attrs)=> {
        
        // var circles = [];
        // function createCircle(){
        //     var el = angular.element("<div></div>");
        //     var size = Math.floor(Math.random()*3)+6;

        //     el.css({
        //         width: size+'px',
        //         height: size+'px',
        //         position: "absolute",
        //         opacity: 0,
        //         transition: "opacity .3s ease-in-out",
        //         "border-radius": "50%",
        //         left: Math.floor(Math.random()*screen.width)+'px',
        //         top: (80+Math.floor(Math.random()*400))+'px',
        //         background: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        //     })
        //     // circles.push(el);
        //     return el;
        // }
        // var interval = $interval(()=>{
        //     var circle = createCircle();
        //     element.append(circle);
        //     circles.push(circle);
        //     $timeout(()=>{
        //         circle.css({
        //             opacity: 1
        //         })
        //     }, 0)
        //     if(circles.length>15) {
        //         circles[0].css({
        //             opacity: 0
        //         })
        //         $timeout(()=>{
        //             circles[0].remove();
        //             circles.shift();
        //         }, 200)
                
                
        //     }
        // }, 300);
        // scope.$on("$destroy", ()=>{
        //     $interval.cancel(interval);
        // })
    }
  });
