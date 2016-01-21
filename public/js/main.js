!function(e,n,t){function o(e,n){return typeof e===n}function a(){var e,n,t,a,s,i,r;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],n=d[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],r=i.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),f.push((a?"":"no-")+r.join("-"))}}function s(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,a){var s,l,f,d,c="modernizr",p=i("div"),m=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=a?a[o]:c+(o+1),p.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+c,(m.fake?m:p).appendChild(s),m.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),l=t(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=d,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],d=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),m=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();c.mq=m,a(),s(f),delete c.addTest,delete c.addAsyncTest;for(var h=0;h<Modernizr._q.length;h++)Modernizr._q[h]();e.Modernizr=Modernizr}(window,document);
document.addEventListener('DOMContentLoaded', function() {

    topAnimation();

    $('[data-show-block]').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('data-show-block');
        var docTop = $(document).scrollTop();
        $('[data-popup]').addClass('show');
        setTimeout( function() {
            $('[data-popup]').addClass('dark');
            $('[data-block="'+ block + '"]').addClass('show').css('top',(docTop + 'px'));
        }, 10);
        setTimeout( function() {
            $('[data-block="'+ block + '"]').addClass('open');
            poupAnimation('[data-block="'+ block + '"]', 'start');
        }, 500);
    });

    $('[data-close-block]').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('data-close-block');
        poupAnimation('[data-block="'+ block + '"]', 'end');
        setTimeout( function() {
            $('[data-block="'+ block + '"]').removeClass('open');
            $('[data-popup]').removeClass('dark');
            $('[data-block]').removeClass('show');
            $('[data-popup]').removeClass('show');
        }, 1000);
    });

    $('[data-open-menu]').click(function(e) {
        e.preventDefault();
        $('[data-main-menu="menu"]').addClass('open');
        $('[data-menu]').addClass('open');
    });

    $('[data-main-menu="menu"]').click(function(e) {
        e.preventDefault();
        var offset = $(this).offset().top;
        offset = e.pageY - offset;
        if (Modernizr.mq('(min-width: 767px)')) {
            if(offset > 110) {
                $('[data-main-menu="menu"]').removeClass('open');
                $('[data-menu]').removeClass('open');
            }
        } else {
            if(offset > 240) {
                $('[data-main-menu="menu"]').removeClass('open');
                $('[data-menu]').removeClass('open');
            }
        }
    });

    $('[data-sroll="top"]').click(function(e) {
        e.preventDefault();
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, '500', 'swing');
    });

    $('[data-menu="close"]').click(function(e) {
        e.preventDefault();
        $('[data-main-menu="menu"]').removeClass('open');
        $('[data-menu]').removeClass('open');
    });

    $('[data-anchor-link]').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    $('[data-request]').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('data-request');
        var title = $('[data-requet-title="' + block + '"]').text();
        $('[data-request-type]').val(title);
        poupAnimation('[data-block="'+ block + '"]', 'end');
        setTimeout( function() {
            $('[data-block="'+ block + '"]').removeClass('open');
            $('[data-popup]').removeClass('dark');
            $('[data-block]').removeClass('show');
            $('[data-popup]').removeClass('show');
        }, 1000);
        $('html, body').animate({
            scrollTop: $('#request').offset().top
        }, 500);
    });

    var animationAbout = $('[data-start-anim="about"]').offset();
    var animAboutStart = false;

    var animationChelsea = $('[data-start-anim="chelsea"]').offset();
    var animChelseaStart = false;

    var animationServices = $('[data-start-anim="services"]').offset();
    var animServicesStart = false;

    window.onscroll = function() {
        var pos = $('[data-view]').offset();
        if(animationAbout.top < pos.top && !animAboutStart){
            aboutAnimation();
        }
        if(animationChelsea.top < pos.top && !animChelseaStart){
            chelseaAnimation();
        }
        if(animationServices.top < pos.top && !animServicesStart){
            servicesAnimation();
        }
    };


    function topAnimation() {
        setTimeout(function() {
            $('[data-anim-top="5"]').removeClass('hide');
            $('[data-anim-top="0"]').removeClass('hide');
            $('[data-anim-top="1"]').removeClass('hide');
            $('[data-anim-top="2"]').removeClass('hide');
            $('[data-anim-top="3"]').removeClass('hide');
            $('[data-anim-top="4"]').removeClass('hide');
        }, 1000);
    }

    function aboutAnimation() {
        $('[data-anim-about="0"]').removeClass('hide');
        $('[data-anim-about="1"]').removeClass('hide');
        $('[data-anim-about="2"]').removeClass('hide');
        $('[data-anim-about="3"]').removeClass('hide');
        $('[data-anim-about="4"]').removeClass('hide');
    }

    function chelseaAnimation() {
        $('[data-anim-chel="0"]').removeClass('hide');
        $('[data-anim-chel="1"]').removeClass('hide');
        $('[data-anim-chel="2"]').removeClass('hide');
        $('[data-anim-chel="3"]').removeClass('hide');
        $('[data-anim-chel="4"]').removeClass('hide');
    }

    function servicesAnimation() {
        for(var i = 0; i < 14; i++) {
                removeHideClass(i);
        }
        setTimeout( function() {
            $('[data-anim-serv="4"]').addClass('show');
        }, 3000);
        setTimeout( function() {
            $('[data-anim-serv]').each(function() {
                $(this).removeAttr('data-anim-serv');
            });
        }, 5000);
    }


    function removeHideClass(num) {
        $('[data-anim-serv="' + num +'"]').removeClass('hide');
    }

    function poupAnimation(popupBlock, direction) {
        if (direction == 'start') {
            $(popupBlock + ' [data-anim-popup="0"]').removeClass('hide');
            $(popupBlock + ' [data-anim-popup="1"]').removeClass('hide');
            $(popupBlock + ' [data-anim-popup="2"]').removeClass('hide');
            $(popupBlock + ' [data-anim-popup="3"]').removeClass('hide');
            $(popupBlock + ' [data-anim-popup="4"]').removeClass('hide');
        }
        else {
            $(popupBlock + ' [data-anim-popup="0"]').addClass('hide');
            $(popupBlock + ' [data-anim-popup="1"]').addClass('hide');
            $(popupBlock + ' [data-anim-popup="2"]').addClass('hide');
            $(popupBlock + ' [data-anim-popup="3"]').addClass('hide');
            $(popupBlock + ' [data-anim-popup="4"]').addClass('hide');
        }
    }

    $(window).scroll(function() {
        lightMenu();
    });

    function getsectionTop(block) {
        return $('[data-section="' + block + '"]').offset().top;
    }

    function lightMenu() {
        var bottom = false;
        ($(window).scrollTop() + $(window).height() == $(document).height()) ? (bottom = true) : (bottom = false);
        if (!bottom) {
            var winTop = $(document).scrollTop();
            winTop += 100;
            var blockNum = 5;
            for (var i=0; i<4; i++) {
                var secTop1 = getsectionTop(i);
                var secTop2 = getsectionTop(i+1);
                if (winTop > secTop1 && winTop < secTop2) {
                    blockNum = i;
                }
            }
            $('[data-red]').removeClass('light');
            $('[data-red="' + blockNum + '"]').addClass('light');
        }
        else {
            $('[data-red]').removeClass('light');
            $('[data-red="' + 4 + '"]').addClass('light');
        }
    }

    $('#reqForm').submit(function(e) {
        e.preventDefault();
        var valid = true;
        if(!Validation.email($(this).find('[name="email"]'))){
            valid = false;
            $(this).find('[name="email"]').css('border', '1px solid #cd2430');
        }
        if (valid) {
            var url = $(this).attr('data-url');
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'text',
                data: $(this).serialize(),
                success: function (response) {
                    if (response == 1) {
                        console.log('ok');
                        $('[data-send="success"]').fadeOut(300);
                        setTimeout( function() {
                            $('[data-send="thanks"]').fadeIn(300);
                        }, 300);
                        $('#reqForm').find('input').each(function() {
                            $(this).val('');
                        });
                        $('#reqForm').find('textarea').val('');
                    } else {
                        console.log('Error');
                    }
                },
                error: function() {
                    console.log('Fatal Error');
                }
            });
        }
    });
    $('#reqForm input').focus(function() {
        $(this).css('border', '');
    });

    $('[data-return="form"]').click(function(e) {
        e.preventDefault();
        $('[data-send="thanks"]').fadeOut(300);
        setTimeout( function() {
            $('[data-send="success"]').fadeIn(300);
        }, 300);
    });


    var Validation = {
        text: function (element) {
            return  (/([^\s*$])/.test(element.val()));
        },
        tel: function (element) {
            return /\+?\d{2,}/.test(element.val());
        },
        email: function (element) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(element.val());
        }
    };



});