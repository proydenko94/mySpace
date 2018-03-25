angular.module("app")
    .controller("mainController", ($scope, $translate, $rootScope, $interval, $timeout)=>{
        console.log('start')
        
        if(!localStorage.lang)
            localStorage.lang = 'en'
        $rootScope.lang = localStorage.lang
        $scope.formData = {}
        var watchers = [];
        watchers.push($rootScope.$watch("lang", (val)=>{
            localStorage.lang = val;
        }))
        $scope.translate = $translate;
        console.log($scope.translate('about'));
        var actionDate = moment("6/05/2018", "DD/MM/YYYY").valueOf();
        $scope.timer = {
            days: moment(actionDate - _.now()).format("DD"),
            hours: moment(actionDate - _.now()).format("HH"),
            minutes: moment(actionDate - _.now()).format("mm"),
            seconds: moment(actionDate - _.now()).format("ss"),
        }
        var timerInterval = $interval(()=>{
            $scope.timer = {
                days: moment(actionDate - _.now()).format("DD"),
                hours: moment(actionDate - _.now()).format("HH"),
                minutes: moment(actionDate - _.now()).format("mm"),
                seconds: moment(actionDate - _.now()).format("ss"),
            }
        }, 1000)
        $scope.$on("$destroy", ()=>{
            $interval.cancel(timerInterval);
            _.each(watchers, (w)=>{
                w();
            })
        })
        $scope.submitForm = ()=>{
            console.log($scope.formData);
            var bad = 0;
            $scope.formData.emailError = '';
            $scope.formData.passwordError = '';
            if(!$scope.formData.password || $scope.formData.password.length<6) {
                $scope.formData.passwordError = $scope.translate('passwordError');
                bad = 1;
            }
            if(!$scope.formData.email || !/.+@.+/.test($scope.formData.email)){
                $scope.formData.emailError = $scope.translate('emailError');
                bad = 1;
            }
            if(!bad) {
                console.log("submit ok")
            } else {
                console.log("submit failed")
            }
        }
        $scope.slider = {
            value: 65320,
            
            options: {
                floor: 0,
                step: 1000,
                ceil: 300000000,
                translate: (c,a)=> {
                    return $scope.formatNumber(c);
                },
                showTicksValues: 150000000
            }
        }
        $scope.formatNumber = (n)=>{
            if(n==0)return "0"
            n=+n;
            var arr = [];
            while(n) {
                var cur = ''+(n%1000);
                while(cur[0]=='0' && cur.length<3)cur+='0';

                arr.push(cur);
                n = Math.floor(n/1000);
            }
            return arr.reverse().join(",")
        }
        $scope.slickReady = false;
        $scope.slickReady = true;
        $timeout(()=>{
            
            $('.slider').slick({
                infinite: true,
                autoplay: true,
                easing: 'ease-in-out',
                arrows: true,
                speed: 1000,
                touchThreshold: 10,
                dots: true,
                swipeToSlide: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-prev-custom"></button>',
                nextArrow: '<button type="button" class="slick-next-custom"></button>',
                responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 11440,
                    settings: {
                    slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 1,
                    }
                }
                ]
            })
        }, 100)
        
        console.log($scope.slickConfig)
        $scope.togglePasswordHint = ()=>{
            var input = angular.element(document.getElementById('password-field'));
            input.attr("type", input.attr('type')=='text'?'password':'text');
        }
        
    })