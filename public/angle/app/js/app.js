/*!
 *
 * Angle - Bootstrap Admin App + jQuery
 *
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 *
 */
/*
 * !function(e,t,o){if("undefined"==typeof o)throw new Error("This application's JavaScript requires jQuery");o(function(){var e=o("body");(new StateToggler).restoreState(e),o("#chk-fixed").prop("checked",e.hasClass("layout-fixed")),o("#chk-collapsed").prop("checked",e.hasClass("aside-collapsed")),o("#chk-boxed").prop("checked",e.hasClass("layout-boxed")),o("#chk-float").prop("checked",e.hasClass("aside-float")),o("#chk-hover").prop("checked",e.hasClass("aside-hover"))})}(window,document,window.jQuery),function(e,t,o){o(function(){o('[data-toggle="popover"]').popover(),o('[data-toggle="tooltip"]').tooltip({container:"body"}),o(".dropdown input").on("click focus",function(e){e.stopPropagation()})})}(window,document,window.jQuery),function(e,t,o){function a(e,t){var a=o("#remove-after-drop");e.fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"},buttonIcons:{prev:" fa fa-caret-left",next:" fa fa-caret-right"},buttonText:{today:"today",month:"month",week:"week",day:"day"},editable:!0,droppable:!0,drop:function(t,n){var i=o(this),r=i.data("calendarEventObject");if(r){var l=o.extend({},r);l.start=t,l.allDay=n,l.backgroundColor=i.css("background-color"),l.borderColor=i.css("border-color"),e.fullCalendar("renderEvent",l,!0),a.is(":checked")&&i.remove()}},eventDragStart:function(e){r=e},events:t})}function n(e){var t=o(".external-events");new l(t.children("div"));var a="#f6504d",n=o(".external-event-add-btn"),i=o(".external-event-name"),s=o(".external-event-color-selector .circle");o(".external-events-trash").droppable({accept:".fc-event",activeClass:"active",hoverClass:"hovered",tolerance:"touch",drop:function(t,o){if(r){var a=r.id||r._id;e.fullCalendar("removeEvents",a),o.draggable.remove(),r=null}}}),s.click(function(e){e.preventDefault();var t=o(this);a=t.css("background-color"),s.removeClass("selected"),t.addClass("selected")}),n.click(function(e){e.preventDefault();var n=i.val();if(""!==o.trim(n)){var r=o("<div/>").css({"background-color":a,"border-color":a,color:"#fff"}).html(n);t.prepend(r),new l(r),i.val("")}})}function i(){var e=new Date,t=e.getDate(),o=e.getMonth(),a=e.getFullYear();return[{title:"All Day Event",start:new Date(a,o,1),backgroundColor:"#f56954",borderColor:"#f56954"},{title:"Long Event",start:new Date(a,o,t-5),end:new Date(a,o,t-2),backgroundColor:"#f39c12",borderColor:"#f39c12"},{title:"Meeting",start:new Date(a,o,t,10,30),allDay:!1,backgroundColor:"#0073b7",borderColor:"#0073b7"},{title:"Lunch",start:new Date(a,o,t,12,0),end:new Date(a,o,t,14,0),allDay:!1,backgroundColor:"#00c0ef",borderColor:"#00c0ef"},{title:"Birthday Party",start:new Date(a,o,t+1,19,0),end:new Date(a,o,t+1,22,30),allDay:!1,backgroundColor:"#00a65a",borderColor:"#00a65a"},{title:"Open Google",start:new Date(a,o,28),end:new Date(a,o,29),url:"//google.com/",backgroundColor:"#3c8dbc",borderColor:"#3c8dbc"}]}if(o.fn.fullCalendar){o(function(){var e=o("#calendar"),t=i();n(e),a(e,t)});var r=null,l=function(e){e&&e.each(function(){var e=o(this),t={title:o.trim(e.text())};e.data("calendarEventObject",t),e.draggable({zIndex:1070,revert:!0,revertDuration:0})})}}}(window,document,window.jQuery),function(e,t,o){o(function(){if("undefined"!=typeof Chart){var e=function(){return Math.round(100*Math.random())},o={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fillColor:"rgba(114,102,186,0.2)",strokeColor:"rgba(114,102,186,1)",pointColor:"rgba(114,102,186,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(114,102,186,1)",data:[e(),e(),e(),e(),e(),e(),e()]},{label:"My Second dataset",fillColor:"rgba(35,183,229,0.2)",strokeColor:"rgba(35,183,229,1)",pointColor:"rgba(35,183,229,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(35,183,229,1)",data:[e(),e(),e(),e(),e(),e(),e()]}]},a={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,responsive:!0},n=t.getElementById("chartjs-linechart").getContext("2d"),i=(new Chart(n).Line(o,a),{labels:["January","February","March","April","May","June","July"],datasets:[{fillColor:"#23b7e5",strokeColor:"#23b7e5",highlightFill:"#23b7e5",highlightStroke:"#23b7e5",data:[e(),e(),e(),e(),e(),e(),e()]},{fillColor:"#5d9cec",strokeColor:"#5d9cec",highlightFill:"#5d9cec",highlightStroke:"#5d9cec",data:[e(),e(),e(),e(),e(),e(),e()]}]}),r={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,responsive:!0},l=t.getElementById("chartjs-barchart").getContext("2d"),s=(new Chart(l).Bar(i,r),[{value:300,color:"#7266ba",highlight:"#7266ba",label:"Purple"},{value:50,color:"#23b7e5",highlight:"#23b7e5",label:"Info"},{value:100,color:"#fad732",highlight:"#fad732",label:"Yellow"}]),c={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:85,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0},d=t.getElementById("chartjs-doughnutchart").getContext("2d"),u=(new Chart(d).Doughnut(s,c),[{value:300,color:"#7266ba",highlight:"#7266ba",label:"Purple"},{value:40,color:"#fad732",highlight:"#fad732",label:"Yellow"},{value:120,color:"#23b7e5",highlight:"#23b7e5",label:"Info"}]),f={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0},h=t.getElementById("chartjs-piechart").getContext("2d"),p=(new Chart(h).Pie(u,f),[{value:300,color:"#f532e5",highlight:"#f532e5",label:"Red"},{value:50,color:"#7266ba",highlight:"#7266ba",label:"Green"},{value:100,color:"#f532e5",highlight:"#f532e5",label:"Yellow"},{value:140,color:"#7266ba",highlight:"#7266ba",label:"Grey"}]),g={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:1,scaleBackdropPaddingX:1,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,responsive:!0},m=t.getElementById("chartjs-polarchart").getContext("2d"),y=(new Chart(m).PolarArea(p,g),{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",fillColor:"rgba(114,102,186,0.2)",strokeColor:"rgba(114,102,186,1)",pointColor:"rgba(114,102,186,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(114,102,186,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,96,27,100]}]}),v={scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"bold",pointLabelFontSize:10,pointLabelFontColor:"#565656",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,responsive:!0},b=t.getElementById("chartjs-radarchart").getContext("2d");new Chart(b).Radar(y,v)}})}(window,document,window.jQuery),function(e,t,o){o(function(){if("undefined"!=typeof Chartist){var t={labels:["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"],series:[[1,2,4,8,6,-2,-1,-4,-6,-2]]},o={high:10,low:-10,height:280,axisX:{labelInterpolationFnc:function(e,t){return t%2===0?e:null}}};new Chartist.Bar("#ct-bar1",t,o),new Chartist.Bar("#ct-bar2",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{seriesBarDistance:10,reverseData:!0,horizontalBars:!0,height:280,axisY:{offset:70}}),new Chartist.Line("#ct-line1",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},{fullWidth:!0,height:280,chartPadding:{right:40}});var a=new Chartist.Line("#ct-line3",{labels:["Mon","Tue","Wed","Thu","Fri","Sat"],series:[[1,5,2,5,4,3],[2,3,4,8,1,2],[5,4,3,2,1,.5]]},{low:0,showArea:!0,showPoint:!1,fullWidth:!0,height:300});a.on("draw",function(e){("line"===e.type||"area"===e.type)&&e.element.animate({d:{begin:2e3*e.index,dur:2e3,from:e.path.clone().scale(1,0).translate(0,e.chartRect.height()).stringify(),to:e.path.clone().stringify(),easing:Chartist.Svg.Easing.easeOutQuint}})});var n=new Chartist.Line("#ct-line2",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,9,7,8,5,4,6,2,3,3,4,6],[4,5,3,7,3,5,5,3,4,4,5,5],[5,3,4,5,6,3,3,4,5,6,3,4],[3,4,5,6,7,6,4,5,6,7,6,3]]},{low:0,height:300}),i=0,r=80,l=500;n.on("created",function(){i=0}),n.on("draw",function(e){if(i++,"line"===e.type)e.element.animate({opacity:{begin:i*r+1e3,dur:l,from:0,to:1}});else if("label"===e.type&&"x"===e.axis)e.element.animate({y:{begin:i*r,dur:l,from:e.y+100,to:e.y,easing:"easeOutQuart"}});else if("label"===e.type&&"y"===e.axis)e.element.animate({x:{begin:i*r,dur:l,from:e.x-100,to:e.x,easing:"easeOutQuart"}});else if("point"===e.type)e.element.animate({x1:{begin:i*r,dur:l,from:e.x-10,to:e.x,easing:"easeOutQuart"},x2:{begin:i*r,dur:l,from:e.x-10,to:e.x,easing:"easeOutQuart"},opacity:{begin:i*r,dur:l,from:0,to:1,easing:"easeOutQuart"}});else if("grid"===e.type){var t={begin:i*r,dur:l,from:e[e.axis+"1"]-30,to:e[e.axis+"1"],easing:"easeOutQuart"},o={begin:i*r,dur:l,from:e[e.axis+"2"]-100,to:e[e.axis+"2"],easing:"easeOutQuart"},a={};a[e.axis+"1"]=t,a[e.axis+"2"]=o,a.opacity={begin:i*r,dur:l,from:0,to:1,easing:"easeOutQuart"},e.element.animate(a)}}),n.on("created",function(){e.__exampleAnimateTimeout&&(clearTimeout(e.__exampleAnimateTimeout),e.__exampleAnimateTimeout=null),e.__exampleAnimateTimeout=setTimeout(n.update.bind(n),12e3)})}})}(window,document,window.jQuery),function(e,t,o){o(function(){function t(){var e=o(this),t=e.data();t&&(t.triggerInView?(i.scroll(function(){a(e,t)}),a(e,t)):n(e,t))}function a(e,t){var a=-20;!e.hasClass(r)&&o.Utils.isInView(e,{topoffset:a})&&n(e,t)}function n(e,t){e.ClassyLoader(t).addClass(r)}var i=o(e),r="js-is-in-view";o("[data-classyloader]").each(t)})}(window,document,window.jQuery),function(e,t,o){"use strict";var a="[data-reset-key]";e(o).on("click",a,function(o){o.preventDefault();var a=e(this).data("resetKey");a?(e.localStorage.remove(a),t.location.reload()):e.error("No storage key specified for reset.")})}(jQuery,window,document),function(e){e.APP_COLORS={primary:"#5d9cec",success:"#27c24c",info:"#23b7e5",warning:"#ff902b",danger:"#f05050",inverse:"#131e26",green:"#37bc9b",pink:"#f532e5",purple:"#7266ba",dark:"#3a3f51",yellow:"#fad732","gray-darker":"#232735","gray-dark":"#3a3f51",gray:"#dde6e9","gray-light":"#e4eaec","gray-lighter":"#edf1f2"},e.APP_MEDIAQUERY={desktopLG:1200,desktop:992,tablet:768,mobile:480}}(window,document,window.jQuery),function(e,t,o){o(function(){o(".flatdoc").each(function(){Flatdoc.run({fetcher:Flatdoc.file("documentation/readme.md"),root:".flatdoc",menu:".flatdoc-menu",title:".flatdoc-title",content:".flatdoc-content"})})})}(window,document,window.jQuery),function(e,t,o){"undefined"!=typeof screenfull&&o(function(){function e(e){screenfull.isFullscreen?e.children("em").removeClass("fa-expand").addClass("fa-compress"):e.children("em").removeClass("fa-compress").addClass("fa-expand")}var a=o(t),n=o("[data-toggle-fullscreen]");n.is(":visible")&&(n.on("click",function(t){t.preventDefault(),screenfull.enabled?(screenfull.toggle(),e(n)):console.log("Fullscreen not enabled")}),screenfull.raw&&screenfull.raw.fullscreenchange&&a.on(screenfull.raw.fullscreenchange,function(){e(n)}))})}(window,document,window.jQuery),function(e){"use strict";var t=[{featureType:"water",stylers:[{visibility:"on"},{color:"#bdd1f9"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#334165"}]},{featureType:"landscape",stylers:[{color:"#e9ebf1"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fff"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fff"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#d8dbe0"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#cfd5e0"}]},{featureType:"administrative",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"road",stylers:[{color:"#d8dbe0",lightness:20}]}],o="[data-gmap]";if(e.fn.gMap){var a=[];e(o).each(function(){var o=e(this),n=o.data("address")&&o.data("address").split(";"),i=o.data("title")&&o.data("title").split(";"),r=o.data("zoom")||14,l=o.data("maptype")||"ROADMAP",s=[];if(n){for(var c in n)"string"==typeof n[c]&&s.push({address:n[c],html:i&&i[c]||"",popup:!0});var d={controls:{panControl:!0,zoomControl:!0,mapTypeControl:!0,scaleControl:!0,streetViewControl:!0,overviewMapControl:!0},scrollwheel:!1,maptype:l,markers:s,zoom:r},u=o.gMap(d),f=u.data("gMap.reference");a.push(f),void 0!==o.data("styled")&&f.setOptions({styles:t})}})}}(jQuery,window,document),function(e,t,o){function a(e){var t="autoloaded-stylesheet",a=o("#"+t).attr("id",t+"-old");return o("head").append(o("<link/>").attr({id:t,rel:"stylesheet",href:e})),a.length&&a.remove(),o("#"+t)}o(function(){o("[data-load-css]").on("click",function(e){var t=o(this);t.is("a")&&e.preventDefault();var n,i=t.data("loadCss");i?(n=a(i),n||o.error("Error creating stylesheet link element.")):o.error("No stylesheet location defined.")})})}(window,document,window.jQuery),function(e,t,o){var a="en",n="i18n",i="site",r="jq-appLang";o(function(){function e(e){o("[data-localize]").localize(i,e)}function t(e){var t=e.parents(".dropdown-menu");if(t.length){var o=t.prev("button, a");o.text(e.text())}}if(o.fn.localize){var l=o.localStorage.get(r)||a,s={language:l,pathPrefix:n,callback:function(e,t){o.localStorage.set(r,l),t(e)}};e(s),o("[data-set-lang]").on("click",function(){l=o(this).data("setLang"),l&&(s.language=l,e(s),t(o(this)))})}})}(window,document,window.jQuery),function(e){e.defaultColors={markerColor:"#23b7e5",bgColor:"transparent",scaleColors:["#878c9a"],regionFill:"#bbbec6"},e.VectorMap=function(e,t,o){function a(e,t,o,a){e.vectorMap({map:t.mapName,backgroundColor:t.bgColor,zoomMin:1,zoomMax:8,zoomOnScroll:!1,regionStyle:{initial:{fill:t.regionFill,"fill-opacity":1,stroke:"none","stroke-width":1.5,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"blue"},selectedHover:{}},focusOn:{x:.4,y:.6,scale:t.scale},markerStyle:{initial:{fill:t.markerColor,stroke:t.markerColor}},onRegionLabelShow:function(e,t,a){o&&o[a]&&t.html(t.html()+": "+o[a]+" visitors")},markers:a,series:{regions:[{values:o,scale:t.scaleColors,normalizeFunction:"polynomial"}]}})}if(e&&e.length){var n=e.data(),i=n.height||"300",r={markerColor:n.markerColor||defaultColors.markerColor,bgColor:n.bgColor||defaultColors.bgColor,scale:n.scale||1,scaleColors:n.scaleColors||defaultColors.scaleColors,regionFill:n.regionFill||defaultColors.regionFill,mapName:n.mapName||"world_mill_en"};e.css("height",i),a(e,r,t,o)}}}(window,document,window.jQuery),function(e,t,o){o(function(){if("undefined"!=typeof Morris){var e=[{y:"2006",a:100,b:90},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],t=[{label:"Download Sales",value:12},{label:"In-Store Sales",value:30},{label:"Mail-Order Sales",value:20}];new Morris.Line({element:"morris-line",data:e,xkey:"y",ykeys:["a","b"],labels:["Serie A","Serie B"],lineColors:["#31C0BE","#7a92a3"],resize:!0}),new Morris.Donut({element:"morris-donut",data:t,colors:["#f05050","#fad732","#ff902b"],resize:!0}),new Morris.Bar({element:"morris-bar",data:e,xkey:"y",ykeys:["a","b"],labels:["Series A","Series B"],xLabelMargin:2,barColors:["#23b7e5","#f05050"],resize:!0}),new Morris.Area({element:"morris-area",data:e,xkey:"y",ykeys:["a","b"],labels:["Serie A","Serie B"],lineColors:["#7266ba","#23b7e5"],resize:!0})}})}(window,document,window.jQuery),function(e,t,o){o(function(){var e=new a,n=o("[data-search-open]");n.on("click",function(e){e.stopPropagation()}).on("click",e.toggle);var i=o("[data-search-dismiss]"),r='.navbar-form input[type="text"]';o(r).on("click",function(e){e.stopPropagation()}).on("keyup",function(t){27==t.keyCode&&e.dismiss()}),o(t).on("click",e.dismiss),i.on("click",function(e){e.stopPropagation()}).on("click",e.dismiss)});var a=function(){var e="form.navbar-form";return{toggle:function(){var t=o(e);t.toggleClass("open");var a=t.hasClass("open");t.find("input")[a?"focus":"blur"]()},dismiss:function(){o(e).removeClass("open").find('input[type="text"]').blur().val("")}}}}(window,document,window.jQuery),function(e,t,o){"use strict";function a(t){var o=t.data("message"),a=t.data("options");o||e.error("Notify: No message specified"),e.notify(o,a||{})}{var n="[data-notify]";e(o)}e(function(){e(n).each(function(){var t=e(this),o=t.data("onload");void 0!==o&&setTimeout(function(){a(t)},800),t.on("click",function(e){e.preventDefault(),a(t)})})})}(jQuery,window,document),function(e){var t={},o={},a=function(t){return"string"==e.type(t)&&(t={message:t}),arguments[1]&&(t=e.extend(t,"string"==e.type(arguments[1])?{status:arguments[1]}:arguments[1])),new i(t).show()},n=function(e,t){if(e)for(var a in o)e===o[a].group&&o[a].close(t);else for(var a in o)o[a].close(t)},i=function(a){this.options=e.extend({},i.defaults,a),this.uuid="ID"+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random()),this.element=e(['<div class="uk-notify-message alert-dismissable">','<a class="close">&times;</a>',"<div>"+this.options.message+"</div>","</div>"].join("")).data("notifyMessage",this),this.options.status&&(this.element.addClass("alert alert-"+this.options.status),this.currentstatus=this.options.status),this.group=this.options.group,o[this.uuid]=this,t[this.options.pos]||(t[this.options.pos]=e('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo("body").on("click",".uk-notify-message",function(){e(this).data("notifyMessage").close()}))};return e.extend(i.prototype,{uuid:!1,element:!1,timout:!1,currentstatus:"",group:!1,show:function(){if(!this.element.is(":visible")){var e=this;t[this.options.pos].show().prepend(this.element);var o=parseInt(this.element.css("margin-bottom"),10);return this.element.css({opacity:0,"margin-top":-1*this.element.outerHeight(),"margin-bottom":0}).animate({opacity:1,"margin-top":0,"margin-bottom":o},function(){if(e.options.timeout){var t=function(){e.close()};e.timeout=setTimeout(t,e.options.timeout),e.element.hover(function(){clearTimeout(e.timeout)},function(){e.timeout=setTimeout(t,e.options.timeout)})}}),this}},close:function(e){var a=this,n=function(){a.element.remove(),t[a.options.pos].children().length||t[a.options.pos].hide(),delete o[a.uuid]};this.timeout&&clearTimeout(this.timeout),e?n():this.element.animate({opacity:0,"margin-top":-1*this.element.outerHeight(),"margin-bottom":0},function(){n()})},content:function(e){var t=this.element.find(">div");return e?(t.html(e),this):t.html()},status:function(e){return e?(this.element.removeClass("alert alert-"+this.currentstatus).addClass("alert alert-"+e),this.currentstatus=e,this):this.currentstatus}}),i.defaults={message:"",status:"normal",timeout:5e3,group:null,pos:"top-center"},e.notify=a,e.notify.message=i,e.notify.closeAll=n,a}(jQuery,window,document),function(e,t,o){o(function(){o("[data-now]").each(function(){function e(){var e=moment(new Date).format(a);t.text(e)}var t=o(this),a=t.data("format");e(),setInterval(e,1e3)})})}(window,document,window.jQuery),function(e,t,o){"use strict";var a='[data-tool="panel-dismiss"]',n="panel.remove",i="panel.removed";e(o).on("click",a,function(){function t(){e.support.animation?a.animo({animation:"bounceOut"},o):o()}function o(){var t=a.parent();e.when(a.trigger(i,[a])).done(function(){a.remove(),t.trigger(i).filter(function(){var t=e(this);return t.is('[class*="col-"]:not(.sortable)')&&0===t.children("*").length}).remove()})}var a=e(this).closest(".panel"),r=new e.Deferred;a.trigger(n,[a,r]),r.done(t)})}(jQuery,window,document),function(e,t,o){"use strict";function a(e){e.removeClass("fa-plus").addClass("fa-minus")}function n(e){e.removeClass("fa-minus").addClass("fa-plus")}function i(t,o){var a=e.localStorage.get(s);a||(a={}),a[t]=o,e.localStorage.set(s,a)}function r(t){var o=e.localStorage.get(s);return o?o[t]||!1:void 0}var l='[data-tool="panel-collapse"]',s="jq-panelState";e(l).each(function(){var t=e(this),o=t.closest(".panel"),l=o.find(".panel-wrapper"),s={toggle:!1},c=t.children("em"),d=o.attr("id");l.length||(l=o.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"),s={}),l.collapse(s).on("hide.bs.collapse",function(){n(c),i(d,"hide"),l.prev(".panel-heading").addClass("panel-heading-collapsed")}).on("show.bs.collapse",function(){a(c),i(d,"show"),l.prev(".panel-heading").removeClass("panel-heading-collapsed")});var u=r(d);u&&(setTimeout(function(){l.collapse(u)},0),i(d,u))}),e(o).on("click",l,function(){var t=e(this).closest(".panel"),o=t.find(".panel-wrapper");o.collapse("toggle")})}(jQuery,window,document),function(e,t,o){"use strict";function a(){this.removeClass(r)}var n='[data-tool="panel-refresh"]',i="panel.refresh",r="whirl",l="standard";e(o).on("click",n,function(){var t=e(this),o=t.parents(".panel").eq(0),n=t.data("spinner")||l;o.addClass(r+" "+n),o.removeSpinner=a,t.trigger(i,[o])})}(jQuery,window,document),function(e,t,o){"use strict";var a="[data-animate]";e(function(){var n=e(t).add("body, .wrapper");e(a).each(function(){function t(t){!t.hasClass("anim-running")&&e.Utils.isInView(t,{topoffset:a})&&(t.addClass("anim-running"),setTimeout(function(){t.addClass("anim-done").animo({animation:r,duration:.7})},i))}var o=e(this),a=o.data("offset"),i=o.data("delay")||100,r=o.data("play")||"bounce";"undefined"!=typeof a&&(t(o),n.scroll(function(){t(o)}))}),e(o).on("click",a,function(){var t=e(this),o=t.data("target"),a=t.data("play")||"bounce",n=e(o);n&&n&&n.animo({animation:a})})})}(jQuery,window,document),function(e){"use strict";function t(){var t=e.localStorage.get(n);t||(t={}),t[this.id]=e(this).sortable("toArray"),t&&e.localStorage.set(n,t)}function o(){var t=e.localStorage.get(n);if(t){var o=this.id,a=t[o];if(a){var i=e("#"+o);e.each(a,function(t,o){e("#"+o).appendTo(i)})}}}if(e.fn.sortable){var a='[data-toggle="portlet"]',n="jq-portletState";e(function(){e(a).sortable({connectWith:a,items:"div.panel",handle:".portlet-handler",opacity:.7,placeholder:"portlet box-placeholder",cancel:".portlet-cancel",forcePlaceholderSize:!0,iframeFix:!1,tolerance:"pointer",helper:"original",revert:200,forceHelperSize:!0,update:t,create:o})})}}(jQuery,window,document),function(e,t,o){o(function(){if("undefined"!=typeof Rickshaw){for(var e=[[],[],[]],o=new Rickshaw.Fixtures.RandomData(150),a=0;150>a;a++)o.addData(e);var n=[{color:"#c05020",data:e[0],name:"New York"},{color:"#30c020",data:e[1],name:"London"},{color:"#6060c0",data:e[2],name:"Tokyo"}],i=new Rickshaw.Graph({element:t.querySelector("#rickshaw1"),series:n,renderer:"area"});i.render();var r=new Rickshaw.Graph({element:t.querySelector("#rickshaw2"),renderer:"area",stroke:!0,series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#f05050"},{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#fad732"}]});r.render();var l=new Rickshaw.Graph({element:t.querySelector("#rickshaw3"),renderer:"line",series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#7266ba"},{data:[{x:0,y:20},{x:1,y:24},{x:2,y:19},{x:3,y:15},{x:4,y:16}],color:"#23b7e5"}]});l.render();var s=new Rickshaw.Graph({element:t.querySelector("#rickshaw4"),renderer:"bar",series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#fad732"},{data:[{x:0,y:20},{x:1,y:24},{x:2,y:19},{x:3,y:15},{x:4,y:16}],color:"#ff902b"}]});s.render()}})}(window,document,window.jQuery),function(e,t,o){function a(){var e=o("<div/>",{"class":"dropdown-backdrop"});e.insertAfter(".aside").on("click mouseenter",function(){r()})}function n(e){e.siblings("li").removeClass("open").end().toggleClass("open")}function i(e){r();var t=e.children("ul");if(!t.length)return o();if(e.hasClass("open"))return n(e),o();var a=o(".aside"),i=o(".aside-inner"),l=parseInt(i.css("padding-top"),0)+parseInt(a.css("padding-top"),0),s=t.clone().appendTo(a);n(e);var d=e.position().top+l-p.scrollTop(),f=u.height();return s.addClass("nav-floating").css({position:c()?"fixed":"absolute",top:d,bottom:s.outerHeight(!0)+d>f?0:"auto"}),s.on("mouseleave",function(){n(e),s.remove()}),s}function r(){o(".sidebar-subnav.nav-floating").remove(),o(".dropdown-backdrop").remove(),o(".sidebar li.open").removeClass("open")}function l(){return f.hasClass("touch")}function s(){return h.hasClass("aside-collapsed")}function c(){return h.hasClass("layout-fixed")}function d(){return h.hasClass("aside-hover")}var u,f,h,p,g;o(function(){u=o(e),f=o("html"),h=o("body"),p=o(".sidebar"),g=APP_MEDIAQUERY;var t=p.find(".collapse");t.on("show.bs.collapse",function(e){e.stopPropagation(),0===o(this).parents(".collapse").length&&t.filter(".in").collapse("hide")});var n=o(".sidebar .active").parents("li");d()||n.addClass("active").children(".collapse").collapse("show"),p.find("li > a + ul").on("show.bs.collapse",function(e){d()&&e.preventDefault()});var r=l()?"click":"mouseenter",c=o();p.on(r,".nav > li",function(){(s()||d())&&(c.trigger("mouseleave"),c=i(o(this)),a())});var m=p.data("sidebarAnyclickClose");"undefined"!=typeof m&&o(".wrapper").on("click.sidebar",function(e){if(h.hasClass("aside-toggled")){var t=o(e.target);t.parents(".aside").length||t.is("#user-block-toggle")||t.parent().is("#user-block-toggle")||h.removeClass("aside-toggled")}})})}(window,document,window.jQuery),function(e,t,o){o(function(){o("[data-skycon]").each(function(){var e=o(this),t=new Skycons({color:e.data("color")||"white"});e.html('<canvas width="'+e.data("width")+'" height="'+e.data("height")+'"></canvas>'),t.add(e.children()[0],e.data("skycon")),t.play()})})}(window,document,window.jQuery),function(e,t,o){o(function(){o("[data-scrollable]").each(function(){var e=o(this),t=250;e.slimScroll({height:e.data("height")||t})})})}(window,document,window.jQuery),function(e,t,o){o(function(){function t(){var t=o(this),a=t.data(),n=a.values&&a.values.split(",");a.type=a.type||"bar",a.disableHiddenCheck=!0,t.sparkline(n,a),a.resize&&o(e).resize(function(){t.sparkline(n,a)})}o("[data-sparkline]").each(t)})}(window,document,window.jQuery),function(e,t,o){o(function(){o("[data-check-all]").on("change",function(){var e=o(this),t=e.index()+1,a=e.find('input[type="checkbox"]'),n=e.parents("table");n.find("tbody > tr > td:nth-child("+t+') input[type="checkbox"]').prop("checked",a[0].checked)})})}(window,document,window.jQuery),function(e,t,o,a){o(function(){var t=o("body");toggle=new StateToggler,o("[data-toggle-state]").on("click",function(n){n.stopPropagation();var i=o(this),r=i.data("toggleState"),l=i.attr("data-no-persist")!==a;r&&(t.hasClass(r)?(t.removeClass(r),l||toggle.removeState(r)):(t.addClass(r),l||toggle.addState(r))),o(e).resize()})}),e.StateToggler=function(){var e="jq-toggleState",t={hasWord:function(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e)},addWord:function(e,t){return this.hasWord(e,t)?void 0:e+(e?" ":"")+t},removeWord:function(e,t){return this.hasWord(e,t)?e.replace(new RegExp("(^|\\s)*"+t+"(\\s|$)*","g"),""):void 0}};return{addState:function(a){var n=o.localStorage.get(e);n=n?t.addWord(n,a):a,o.localStorage.set(e,n)},removeState:function(a){var n=o.localStorage.get(e);n&&(n=t.removeWord(n,a),o.localStorage.set(e,n))},restoreState:function(t){var a=o.localStorage.get(e);a&&t.addClass(a)}}}}(window,document,window.jQuery),function(e,t,o){"use strict";var a=e("html"),n=e(t);e.support.transition=function(){var e=function(){var e,t=o.body||o.documentElement,a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(e in a)if(void 0!==t.style[e])return a[e]}();return e&&{end:e}}(),e.support.animation=function(){var e=function(){var e,t=o.body||o.documentElement,a={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(e in a)if(void 0!==t.style[e])return a[e]}();return e&&{end:e}}(),e.support.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},e.support.touch="ontouchstart"in t&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,e.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver||null,e.Utils={},e.Utils.debounce=function(e,t,o){var a;return function(){var n=this,i=arguments,r=function(){a=null,o||e.apply(n,i)},l=o&&!a;clearTimeout(a),a=setTimeout(r,t),l&&e.apply(n,i)}},e.Utils.removeCssRules=function(e){var t,o,a,n,i,r,l,s,c,d;e&&setTimeout(function(){try{for(d=document.styleSheets,n=0,l=d.length;l>n;n++){for(a=d[n],o=[],a.cssRules=a.cssRules,t=i=0,s=a.cssRules.length;s>i;t=++i)a.cssRules[t].type===CSSRule.STYLE_RULE&&e.test(a.cssRules[t].selectorText)&&o.unshift(t);for(r=0,c=o.length;c>r;r++)a.deleteRule(o[r])}}catch(u){}},0)},e.Utils.isInView=function(t,o){var a=e(t);if(!a.is(":visible"))return!1;var i=n.scrollLeft(),r=n.scrollTop(),l=a.offset(),s=l.left,c=l.top;return o=e.extend({topoffset:0,leftoffset:0},o),c+a.height()>=r&&c-o.topoffset<=r+n.height()&&s+a.width()>=i&&s-o.leftoffset<=i+n.width()?!0:!1},e.Utils.options=function(t){if(e.isPlainObject(t))return t;var o=t?t.indexOf("{"):-1,a={};if(-1!=o)try{a=new Function("","var json = "+t.substr(o)+"; return JSON.parse(JSON.stringify(json));")()}catch(n){}return a},e.Utils.events={},e.Utils.events.click=e.support.touch?"tap":"click",e.langdirection="rtl"==a.attr("dir")?"right":"left",e(function(){if(e.support.mutationobserver){var t=new e.support.mutationobserver(e.Utils.debounce(function(){e(o).trigger("domready")},300));t.observe(document.body,{childList:!0,subtree:!0})}}),a.addClass(e.support.touch?"touch":"no-touch")}(jQuery,window,document),function(e,t,o){o(function(){})}(window,document,window.jQuery);
 */
/*
 * http://jsbeautifier.org/
 * http://www.jspretty.com/
 * http://unminify.com/
 */
! function(e, t, o) {
    if ("undefined" == typeof o) throw new Error("This application's JavaScript requires jQuery");
    o(function() {
        var e = o("body");
        (new StateToggler).restoreState(e), o("#chk-fixed").prop("checked", e.hasClass("layout-fixed")), o("#chk-collapsed").prop("checked", e.hasClass("aside-collapsed")), o("#chk-boxed").prop("checked", e.hasClass("layout-boxed")), o("#chk-float").prop("checked", e.hasClass("aside-float")), o("#chk-hover").prop("checked", e.hasClass("aside-hover"))
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        o('[data-toggle="popover"]').popover(), o('[data-toggle="tooltip"]').tooltip({
            container: "body"
        }), o(".dropdown input").on("click focus", function(e) {
            e.stopPropagation()
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    function a(e, t) {
        var a = o("#remove-after-drop");
        e.fullCalendar({
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,agendaWeek,agendaDay"
            },
            buttonIcons: {
                prev: " fa fa-caret-left",
                next: " fa fa-caret-right"
            },
            buttonText: {
                today: "today",
                month: "month",
                week: "week",
                day: "day"
            },
            editable: !0,
            droppable: !0,
            drop: function(t, n) {
                var i = o(this),
                    r = i.data("calendarEventObject");
                if (r) {
                    var l = o.extend({}, r);
                    l.start = t, l.allDay = n, l.backgroundColor = i.css("background-color"), l.borderColor = i.css("border-color"), e.fullCalendar("renderEvent", l, !0), a.is(":checked") && i.remove()
                }
            },
            eventDragStart: function(e) {
                r = e
            },
            events: t
        })
    }

    function n(e) {
        var t = o(".external-events");
        new l(t.children("div"));
        var a = "#f6504d",
            n = o(".external-event-add-btn"),
            i = o(".external-event-name"),
            s = o(".external-event-color-selector .circle");
        o(".external-events-trash").droppable({
            accept: ".fc-event",
            activeClass: "active",
            hoverClass: "hovered",
            tolerance: "touch",
            drop: function(t, o) {
                if (r) {
                    var a = r.id || r._id;
                    e.fullCalendar("removeEvents", a), o.draggable.remove(), r = null
                }
            }
        }), s.click(function(e) {
            e.preventDefault();
            var t = o(this);
            a = t.css("background-color"), s.removeClass("selected"), t.addClass("selected")
        }), n.click(function(e) {
            e.preventDefault();
            var n = i.val();
            if ("" !== o.trim(n)) {
                var r = o("<div/>").css({
                    "background-color": a,
                    "border-color": a,
                    color: "#fff"
                }).html(n);
                t.prepend(r), new l(r), i.val("")
            }
        })
    }

    function i() {
        var e = new Date,
            t = e.getDate(),
            o = e.getMonth(),
            a = e.getFullYear();
        return [{
            title: "All Day Event",
            start: new Date(a, o, 1),
            backgroundColor: "#f56954",
            borderColor: "#f56954"
        }, {
            title: "Long Event",
            start: new Date(a, o, t - 5),
            end: new Date(a, o, t - 2),
            backgroundColor: "#f39c12",
            borderColor: "#f39c12"
        }, {
            title: "Meeting",
            start: new Date(a, o, t, 10, 30),
            allDay: !1,
            backgroundColor: "#0073b7",
            borderColor: "#0073b7"
        }, {
            title: "Lunch",
            start: new Date(a, o, t, 12, 0),
            end: new Date(a, o, t, 14, 0),
            allDay: !1,
            backgroundColor: "#00c0ef",
            borderColor: "#00c0ef"
        }, {
            title: "Birthday Party",
            start: new Date(a, o, t + 1, 19, 0),
            end: new Date(a, o, t + 1, 22, 30),
            allDay: !1,
            backgroundColor: "#00a65a",
            borderColor: "#00a65a"
        }, {
            title: "Open Google",
            start: new Date(a, o, 28),
            end: new Date(a, o, 29),
            url: "//google.com/",
            backgroundColor: "#3c8dbc",
            borderColor: "#3c8dbc"
        }]
    }
    if (o.fn.fullCalendar) {
        o(function() {
            var e = o("#calendar"),
                t = i();
            n(e), a(e, t)
        });
        var r = null,
            l = function(e) {
                e && e.each(function() {
                    var e = o(this),
                        t = {
                            title: o.trim(e.text())
                        };
                    e.data("calendarEventObject", t), e.draggable({
                        zIndex: 1070,
                        revert: !0,
                        revertDuration: 0
                    })
                })
            }
    }
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        if ("undefined" != typeof Chart) {
            var e = function() {
                    return Math.round(100 * Math.random())
                },
                o = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "My First dataset",
                        fillColor: "rgba(114,102,186,0.2)",
                        strokeColor: "rgba(114,102,186,1)",
                        pointColor: "rgba(114,102,186,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(114,102,186,1)",
                        data: [e(), e(), e(), e(), e(), e(), e()]
                    }, {
                        label: "My Second dataset",
                        fillColor: "rgba(35,183,229,0.2)",
                        strokeColor: "rgba(35,183,229,1)",
                        pointColor: "rgba(35,183,229,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(35,183,229,1)",
                        data: [e(), e(), e(), e(), e(), e(), e()]
                    }]
                },
                a = {
                    scaleShowGridLines: !0,
                    scaleGridLineColor: "rgba(0,0,0,.05)",
                    scaleGridLineWidth: 1,
                    bezierCurve: !0,
                    bezierCurveTension: .4,
                    pointDot: !0,
                    pointDotRadius: 4,
                    pointDotStrokeWidth: 1,
                    pointHitDetectionRadius: 20,
                    datasetStroke: !0,
                    datasetStrokeWidth: 2,
                    datasetFill: !0,
                    responsive: !0
                },
                n = t.getElementById("chartjs-linechart").getContext("2d"),
                i = (new Chart(n).Line(o, a), {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        fillColor: "#23b7e5",
                        strokeColor: "#23b7e5",
                        highlightFill: "#23b7e5",
                        highlightStroke: "#23b7e5",
                        data: [e(), e(), e(), e(), e(), e(), e()]
                    }, {
                        fillColor: "#5d9cec",
                        strokeColor: "#5d9cec",
                        highlightFill: "#5d9cec",
                        highlightStroke: "#5d9cec",
                        data: [e(), e(), e(), e(), e(), e(), e()]
                    }]
                }),
                r = {
                    scaleBeginAtZero: !0,
                    scaleShowGridLines: !0,
                    scaleGridLineColor: "rgba(0,0,0,.05)",
                    scaleGridLineWidth: 1,
                    barShowStroke: !0,
                    barStrokeWidth: 2,
                    barValueSpacing: 5,
                    barDatasetSpacing: 1,
                    responsive: !0
                },
                l = t.getElementById("chartjs-barchart").getContext("2d"),
                s = (new Chart(l).Bar(i, r), [{
                    value: 300,
                    color: "#7266ba",
                    highlight: "#7266ba",
                    label: "Purple"
                }, {
                    value: 50,
                    color: "#23b7e5",
                    highlight: "#23b7e5",
                    label: "Info"
                }, {
                    value: 100,
                    color: "#fad732",
                    highlight: "#fad732",
                    label: "Yellow"
                }]),
                c = {
                    segmentShowStroke: !0,
                    segmentStrokeColor: "#fff",
                    segmentStrokeWidth: 2,
                    percentageInnerCutout: 85,
                    animationSteps: 100,
                    animationEasing: "easeOutBounce",
                    animateRotate: !0,
                    animateScale: !1,
                    responsive: !0
                },
                d = t.getElementById("chartjs-doughnutchart").getContext("2d"),
                u = (new Chart(d).Doughnut(s, c), [{
                    value: 300,
                    color: "#7266ba",
                    highlight: "#7266ba",
                    label: "Purple"
                }, {
                    value: 40,
                    color: "#fad732",
                    highlight: "#fad732",
                    label: "Yellow"
                }, {
                    value: 120,
                    color: "#23b7e5",
                    highlight: "#23b7e5",
                    label: "Info"
                }]),
                f = {
                    segmentShowStroke: !0,
                    segmentStrokeColor: "#fff",
                    segmentStrokeWidth: 2,
                    percentageInnerCutout: 0,
                    animationSteps: 100,
                    animationEasing: "easeOutBounce",
                    animateRotate: !0,
                    animateScale: !1,
                    responsive: !0
                },
                h = t.getElementById("chartjs-piechart").getContext("2d"),
                p = (new Chart(h).Pie(u, f), [{
                    value: 300,
                    color: "#f532e5",
                    highlight: "#f532e5",
                    label: "Red"
                }, {
                    value: 50,
                    color: "#7266ba",
                    highlight: "#7266ba",
                    label: "Green"
                }, {
                    value: 100,
                    color: "#f532e5",
                    highlight: "#f532e5",
                    label: "Yellow"
                }, {
                    value: 140,
                    color: "#7266ba",
                    highlight: "#7266ba",
                    label: "Grey"
                }]),
                g = {
                    scaleShowLabelBackdrop: !0,
                    scaleBackdropColor: "rgba(255,255,255,0.75)",
                    scaleBeginAtZero: !0,
                    scaleBackdropPaddingY: 1,
                    scaleBackdropPaddingX: 1,
                    scaleShowLine: !0,
                    segmentShowStroke: !0,
                    segmentStrokeColor: "#fff",
                    segmentStrokeWidth: 2,
                    animationSteps: 100,
                    animationEasing: "easeOutBounce",
                    animateRotate: !0,
                    animateScale: !1,
                    responsive: !0
                },
                m = t.getElementById("chartjs-polarchart").getContext("2d"),
                y = (new Chart(m).PolarArea(p, g), {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [{
                        label: "My First dataset",
                        fillColor: "rgba(114,102,186,0.2)",
                        strokeColor: "rgba(114,102,186,1)",
                        pointColor: "rgba(114,102,186,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(114,102,186,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    }, {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }]
                }),
                v = {
                    scaleShowLine: !0,
                    angleShowLineOut: !0,
                    scaleShowLabels: !1,
                    scaleBeginAtZero: !0,
                    angleLineColor: "rgba(0,0,0,.1)",
                    angleLineWidth: 1,
                    pointLabelFontFamily: "'Arial'",
                    pointLabelFontStyle: "bold",
                    pointLabelFontSize: 10,
                    pointLabelFontColor: "#565656",
                    pointDot: !0,
                    pointDotRadius: 3,
                    pointDotStrokeWidth: 1,
                    pointHitDetectionRadius: 20,
                    datasetStroke: !0,
                    datasetStrokeWidth: 2,
                    datasetFill: !0,
                    responsive: !0
                },
                b = t.getElementById("chartjs-radarchart").getContext("2d");
            new Chart(b).Radar(y, v)
        }
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        if ("undefined" != typeof Chartist) {
            var t = {
                    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
                    series: [
                        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
                    ]
                },
                o = {
                    high: 10,
                    low: -10,
                    height: 280,
                    axisX: {
                        labelInterpolationFnc: function(e, t) {
                            return t % 2 === 0 ? e : null
                        }
                    }
                };
            new Chartist.Bar("#ct-bar1", t, o), new Chartist.Bar("#ct-bar2", {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                series: [
                    [5, 4, 3, 7, 5, 10, 3],
                    [3, 2, 9, 5, 4, 6, 4]
                ]
            }, {
                seriesBarDistance: 10,
                reverseData: !0,
                horizontalBars: !0,
                height: 280,
                axisY: {
                    offset: 70
                }
            }), new Chartist.Line("#ct-line1", {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            }, {
                fullWidth: !0,
                height: 280,
                chartPadding: {
                    right: 40
                }
            });
            var a = new Chartist.Line("#ct-line3", {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                series: [
                    [1, 5, 2, 5, 4, 3],
                    [2, 3, 4, 8, 1, 2],
                    [5, 4, 3, 2, 1, .5]
                ]
            }, {
                low: 0,
                showArea: !0,
                showPoint: !1,
                fullWidth: !0,
                height: 300
            });
            a.on("draw", function(e) {
                ("line" === e.type || "area" === e.type) && e.element.animate({
                    d: {
                        begin: 2e3 * e.index,
                        dur: 2e3,
                        from: e.path.clone().scale(1, 0).translate(0, e.chartRect.height()).stringify(),
                        to: e.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                })
            });
            var n = new Chartist.Line("#ct-line2", {
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    series: [
                        [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                        [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                        [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                        [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
                    ]
                }, {
                    low: 0,
                    height: 300
                }),
                i = 0,
                r = 80,
                l = 500;
            n.on("created", function() {
                i = 0
            }), n.on("draw", function(e) {
                if (i++, "line" === e.type) e.element.animate({
                    opacity: {
                        begin: i * r + 1e3,
                        dur: l,
                        from: 0,
                        to: 1
                    }
                });
                else if ("label" === e.type && "x" === e.axis) e.element.animate({
                    y: {
                        begin: i * r,
                        dur: l,
                        from: e.y + 100,
                        to: e.y,
                        easing: "easeOutQuart"
                    }
                });
                else if ("label" === e.type && "y" === e.axis) e.element.animate({
                    x: {
                        begin: i * r,
                        dur: l,
                        from: e.x - 100,
                        to: e.x,
                        easing: "easeOutQuart"
                    }
                });
                else if ("point" === e.type) e.element.animate({
                    x1: {
                        begin: i * r,
                        dur: l,
                        from: e.x - 10,
                        to: e.x,
                        easing: "easeOutQuart"
                    },
                    x2: {
                        begin: i * r,
                        dur: l,
                        from: e.x - 10,
                        to: e.x,
                        easing: "easeOutQuart"
                    },
                    opacity: {
                        begin: i * r,
                        dur: l,
                        from: 0,
                        to: 1,
                        easing: "easeOutQuart"
                    }
                });
                else if ("grid" === e.type) {
                    var t = {
                            begin: i * r,
                            dur: l,
                            from: e[e.axis + "1"] - 30,
                            to: e[e.axis + "1"],
                            easing: "easeOutQuart"
                        },
                        o = {
                            begin: i * r,
                            dur: l,
                            from: e[e.axis + "2"] - 100,
                            to: e[e.axis + "2"],
                            easing: "easeOutQuart"
                        },
                        a = {};
                    a[e.axis + "1"] = t, a[e.axis + "2"] = o, a.opacity = {
                        begin: i * r,
                        dur: l,
                        from: 0,
                        to: 1,
                        easing: "easeOutQuart"
                    }, e.element.animate(a)
                }
            }), n.on("created", function() {
                e.__exampleAnimateTimeout && (clearTimeout(e.__exampleAnimateTimeout), e.__exampleAnimateTimeout = null), e.__exampleAnimateTimeout = setTimeout(n.update.bind(n), 12e3)
            })
        }
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        function t() {
            var e = o(this),
                t = e.data();
            t && (t.triggerInView ? (i.scroll(function() {
                a(e, t)
            }), a(e, t)) : n(e, t))
        }

        function a(e, t) {
            var a = -20;
            !e.hasClass(r) && o.Utils.isInView(e, {
                topoffset: a
            }) && n(e, t)
        }

        function n(e, t) {
            e.ClassyLoader(t).addClass(r)
        }
        var i = o(e),
            r = "js-is-in-view";
        o("[data-classyloader]").each(t)
    })
}(window, document, window.jQuery),
function(e, t, o) {
    "use strict";
    var a = "[data-reset-key]";
    e(o).on("click", a, function(o) {
        o.preventDefault();
        var a = e(this).data("resetKey");
        a ? (e.localStorage.remove(a), t.location.reload()) : e.error("No storage key specified for reset.")
    })
}(jQuery, window, document),
function(e) {
    e.APP_COLORS = {
        primary: "#5d9cec",
        success: "#27c24c",
        info: "#23b7e5",
        warning: "#ff902b",
        danger: "#f05050",
        inverse: "#131e26",
        green: "#37bc9b",
        pink: "#f532e5",
        purple: "#7266ba",
        dark: "#3a3f51",
        yellow: "#fad732",
        "gray-darker": "#232735",
        "gray-dark": "#3a3f51",
        gray: "#dde6e9",
        "gray-light": "#e4eaec",
        "gray-lighter": "#edf1f2"
    }, e.APP_MEDIAQUERY = {
        desktopLG: 1200,
        desktop: 992,
        tablet: 768,
        mobile: 480
    }
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        o(".flatdoc").each(function() {
            Flatdoc.run({
                fetcher: Flatdoc.file("documentation/readme.md"),
                root: ".flatdoc",
                menu: ".flatdoc-menu",
                title: ".flatdoc-title",
                content: ".flatdoc-content"
            })
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    "undefined" != typeof screenfull && o(function() {
        function e(e) {
            screenfull.isFullscreen ? e.children("em").removeClass("fa-expand").addClass("fa-compress") : e.children("em").removeClass("fa-compress").addClass("fa-expand")
        }
        var a = o(t),
            n = o("[data-toggle-fullscreen]");
        n.is(":visible") && (n.on("click", function(t) {
            t.preventDefault(), screenfull.enabled ? (screenfull.toggle(), e(n)) : console.log("Fullscreen not enabled")
        }), screenfull.raw && screenfull.raw.fullscreenchange && a.on(screenfull.raw.fullscreenchange, function() {
            e(n)
        }))
    })
}(window, document, window.jQuery),
function(e) {
    "use strict";
    var t = [{
            featureType: "water",
            stylers: [{
                visibility: "on"
            }, {
                color: "#bdd1f9"
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#334165"
            }]
        }, {
            featureType: "landscape",
            stylers: [{
                color: "#e9ebf1"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#c5c6c6"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#fff"
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#fff"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#d8dbe0"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#cfd5e0"
            }]
        }, {
            featureType: "administrative",
            stylers: [{
                visibility: "on"
            }, {
                lightness: 33
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels",
            stylers: [{
                visibility: "on"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "road",
            stylers: [{
                color: "#d8dbe0",
                lightness: 20
            }]
        }],
        o = "[data-gmap]";
    if (e.fn.gMap) {
        var a = [];
        e(o).each(function() {
            var o = e(this),
                n = o.data("address") && o.data("address").split(";"),
                i = o.data("title") && o.data("title").split(";"),
                r = o.data("zoom") || 14,
                l = o.data("maptype") || "ROADMAP",
                s = [];
            if (n) {
                for (var c in n) "string" == typeof n[c] && s.push({
                    address: n[c],
                    html: i && i[c] || "",
                    popup: !0
                });
                var d = {
                        controls: {
                            panControl: !0,
                            zoomControl: !0,
                            mapTypeControl: !0,
                            scaleControl: !0,
                            streetViewControl: !0,
                            overviewMapControl: !0
                        },
                        scrollwheel: !1,
                        maptype: l,
                        markers: s,
                        zoom: r
                    },
                    u = o.gMap(d),
                    f = u.data("gMap.reference");
                a.push(f), void 0 !== o.data("styled") && f.setOptions({
                    styles: t
                })
            }
        })
    }
}(jQuery, window, document),
function(e, t, o) {
    function a(e) {
        var t = "autoloaded-stylesheet",
            a = o("#" + t).attr("id", t + "-old");
        return o("head").append(o("<link/>").attr({
            id: t,
            rel: "stylesheet",
            href: e
        })), a.length && a.remove(), o("#" + t)
    }
    o(function() {
        o("[data-load-css]").on("click", function(e) {
            var t = o(this);
            t.is("a") && e.preventDefault();
            var n, i = t.data("loadCss");
            i ? (n = a(i), n || o.error("Error creating stylesheet link element.")) : o.error("No stylesheet location defined.")
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    var a = "en",
        n = "i18n",
        i = "site",
        r = "jq-appLang";
    o(function() {
        function e(e) {
            o("[data-localize]").localize(i, e)
        }

        function t(e) {
            var t = e.parents(".dropdown-menu");
            if (t.length) {
                var o = t.prev("button, a");
                o.text(e.text())
            }
        }
        if (o.fn.localize) {
            var l = o.localStorage.get(r) || a,
                s = {
                    language: l,
                    pathPrefix: n,
                    callback: function(e, t) {
                        o.localStorage.set(r, l), t(e)
                    }
                };
            e(s), o("[data-set-lang]").on("click", function() {
                l = o(this).data("setLang"), l && (s.language = l, e(s), t(o(this)))
            })
        }
    })
}(window, document, window.jQuery),
function(e) {
    e.defaultColors = {
        markerColor: "#23b7e5",
        bgColor: "transparent",
        scaleColors: ["#878c9a"],
        regionFill: "#bbbec6"
    }, e.VectorMap = function(e, t, o) {
        function a(e, t, o, a) {
            e.vectorMap({
                map: t.mapName,
                backgroundColor: t.bgColor,
                zoomMin: 1,
                zoomMax: 8,
                zoomOnScroll: !1,
                regionStyle: {
                    initial: {
                        fill: t.regionFill,
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 1.5,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": .8
                    },
                    selected: {
                        fill: "blue"
                    },
                    selectedHover: {}
                },
                focusOn: {
                    x: .4,
                    y: .6,
                    scale: t.scale
                },
                markerStyle: {
                    initial: {
                        fill: t.markerColor,
                        stroke: t.markerColor
                    }
                },
                onRegionLabelShow: function(e, t, a) {
                    o && o[a] && t.html(t.html() + ": " + o[a] + " visitors")
                },
                markers: a,
                series: {
                    regions: [{
                        values: o,
                        scale: t.scaleColors,
                        normalizeFunction: "polynomial"
                    }]
                }
            })
        }
        if (e && e.length) {
            var n = e.data(),
                i = n.height || "300",
                r = {
                    markerColor: n.markerColor || defaultColors.markerColor,
                    bgColor: n.bgColor || defaultColors.bgColor,
                    scale: n.scale || 1,
                    scaleColors: n.scaleColors || defaultColors.scaleColors,
                    regionFill: n.regionFill || defaultColors.regionFill,
                    mapName: n.mapName || "world_mill_en"
                };
            e.css("height", i), a(e, r, t, o)
        }
    }
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        if ("undefined" != typeof Morris) {
            var e = [{
                    y: "2006",
                    a: 100,
                    b: 90
                }, {
                    y: "2007",
                    a: 75,
                    b: 65
                }, {
                    y: "2008",
                    a: 50,
                    b: 40
                }, {
                    y: "2009",
                    a: 75,
                    b: 65
                }, {
                    y: "2010",
                    a: 50,
                    b: 40
                }, {
                    y: "2011",
                    a: 75,
                    b: 65
                }, {
                    y: "2012",
                    a: 100,
                    b: 90
                }],
                t = [{
                    label: "Download Sales",
                    value: 12
                }, {
                    label: "In-Store Sales",
                    value: 30
                }, {
                    label: "Mail-Order Sales",
                    value: 20
                }];
            new Morris.Line({
                element: "morris-line",
                data: e,
                xkey: "y",
                ykeys: ["a", "b"],
                labels: ["Serie A", "Serie B"],
                lineColors: ["#31C0BE", "#7a92a3"],
                resize: !0
            }), new Morris.Donut({
                element: "morris-donut",
                data: t,
                colors: ["#f05050", "#fad732", "#ff902b"],
                resize: !0
            }), new Morris.Bar({
                element: "morris-bar",
                data: e,
                xkey: "y",
                ykeys: ["a", "b"],
                labels: ["Series A", "Series B"],
                xLabelMargin: 2,
                barColors: ["#23b7e5", "#f05050"],
                resize: !0
            }), new Morris.Area({
                element: "morris-area",
                data: e,
                xkey: "y",
                ykeys: ["a", "b"],
                labels: ["Serie A", "Serie B"],
                lineColors: ["#7266ba", "#23b7e5"],
                resize: !0
            })
        }
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        var e = new a,
            n = o("[data-search-open]");
        n.on("click", function(e) {
            e.stopPropagation()
        }).on("click", e.toggle);
        var i = o("[data-search-dismiss]"),
            r = '.navbar-form input[type="text"]';
        o(r).on("click", function(e) {
            e.stopPropagation()
        }).on("keyup", function(t) {
            27 == t.keyCode && e.dismiss()
        }), o(t).on("click", e.dismiss), i.on("click", function(e) {
            e.stopPropagation()
        }).on("click", e.dismiss)
    });
    var a = function() {
        var e = "form.navbar-form";
        return {
            toggle: function() {
                var t = o(e);
                t.toggleClass("open");
                var a = t.hasClass("open");
                t.find("input")[a ? "focus" : "blur"]()
            },
            dismiss: function() {
                o(e).removeClass("open").find('input[type="text"]').blur().val("")
            }
        }
    }
}(window, document, window.jQuery),
function(e, t, o) {
    "use strict";

    function a(t) {
        var o = t.data("message"),
            a = t.data("options");
        o || e.error("Notify: No message specified"), e.notify(o, a || {})
    } {
        var n = "[data-notify]";
        e(o)
    }
    e(function() {
        e(n).each(function() {
            var t = e(this),
                o = t.data("onload");
            void 0 !== o && setTimeout(function() {
                a(t)
            }, 800), t.on("click", function(e) {
                e.preventDefault(), a(t)
            })
        })
    })
}(jQuery, window, document),
function(e) {
    var t = {},
        o = {},
        a = function(t) {
            return "string" == e.type(t) && (t = {
                message: t
            }), arguments[1] && (t = e.extend(t, "string" == e.type(arguments[1]) ? {
                status: arguments[1]
            } : arguments[1])), new i(t).show()
        },
        n = function(e, t) {
            if (e)
                for (var a in o) e === o[a].group && o[a].close(t);
            else
                for (var a in o) o[a].close(t)
        },
        i = function(a) {
            this.options = e.extend({}, i.defaults, a), this.uuid = "ID" + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random()), this.element = e(['<div class="uk-notify-message alert-dismissable">', '<a class="close">&times;</a>', "<div>" + this.options.message + "</div>", "</div>"].join("")).data("notifyMessage", this), this.options.status && (this.element.addClass("alert alert-" + this.options.status), this.currentstatus = this.options.status), this.group = this.options.group, o[this.uuid] = this, t[this.options.pos] || (t[this.options.pos] = e('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo("body").on("click", ".uk-notify-message", function() {
                e(this).data("notifyMessage").close()
            }))
        };
    return e.extend(i.prototype, {
        uuid: !1,
        element: !1,
        timout: !1,
        currentstatus: "",
        group: !1,
        show: function() {
            if (!this.element.is(":visible")) {
                var e = this;
                t[this.options.pos].show().prepend(this.element);
                var o = parseInt(this.element.css("margin-bottom"), 10);
                return this.element.css({
                    opacity: 0,
                    "margin-top": -1 * this.element.outerHeight(),
                    "margin-bottom": 0
                }).animate({
                    opacity: 1,
                    "margin-top": 0,
                    "margin-bottom": o
                }, function() {
                    if (e.options.timeout) {
                        var t = function() {
                            e.close()
                        };
                        e.timeout = setTimeout(t, e.options.timeout), e.element.hover(function() {
                            clearTimeout(e.timeout)
                        }, function() {
                            e.timeout = setTimeout(t, e.options.timeout)
                        })
                    }
                }), this
            }
        },
        close: function(e) {
            var a = this,
                n = function() {
                    a.element.remove(), t[a.options.pos].children().length || t[a.options.pos].hide(), delete o[a.uuid]
                };
            this.timeout && clearTimeout(this.timeout), e ? n() : this.element.animate({
                opacity: 0,
                "margin-top": -1 * this.element.outerHeight(),
                "margin-bottom": 0
            }, function() {
                n()
            })
        },
        content: function(e) {
            var t = this.element.find(">div");
            return e ? (t.html(e), this) : t.html()
        },
        status: function(e) {
            return e ? (this.element.removeClass("alert alert-" + this.currentstatus).addClass("alert alert-" + e), this.currentstatus = e, this) : this.currentstatus
        }
    }), i.defaults = {
        message: "",
        status: "normal",
        timeout: 5e3,
        group: null,
        pos: "top-center"
    }, e.notify = a, e.notify.message = i, e.notify.closeAll = n, a
}(jQuery, window, document),
function(e, t, o) {
    o(function() {
        o("[data-now]").each(function() {
            function e() {
                var e = moment(new Date).format(a);
                t.text(e)
            }
            var t = o(this),
                a = t.data("format");
            e(), setInterval(e, 1e3)
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    "use strict";
    var a = '[data-tool="panel-dismiss"]',
        n = "panel.remove",
        i = "panel.removed";
    e(o).on("click", a, function() {
        function t() {
            e.support.animation ? a.animo({
                animation: "bounceOut"
            }, o) : o()
        }

        function o() {
            var t = a.parent();
            e.when(a.trigger(i, [a])).done(function() {
                a.remove(), t.trigger(i).filter(function() {
                    var t = e(this);
                    return t.is('[class*="col-"]:not(.sortable)') && 0 === t.children("*").length
                }).remove()
            })
        }
        var a = e(this).closest(".panel"),
            r = new e.Deferred;
        a.trigger(n, [a, r]), r.done(t)
    })
}(jQuery, window, document),
function(e, t, o) {
    "use strict";

    function a(e) {
        e.removeClass("fa-plus").addClass("fa-minus")
    }

    function n(e) {
        e.removeClass("fa-minus").addClass("fa-plus")
    }

    function i(t, o) {
        var a = e.localStorage.get(s);
        a || (a = {}), a[t] = o, e.localStorage.set(s, a)
    }

    function r(t) {
        var o = e.localStorage.get(s);
        return o ? o[t] || !1 : void 0
    }
    var l = '[data-tool="panel-collapse"]',
        s = "jq-panelState";
    e(l).each(function() {
        var t = e(this),
            o = t.closest(".panel"),
            l = o.find(".panel-wrapper"),
            s = {
                toggle: !1
            },
            c = t.children("em"),
            d = o.attr("id");
        l.length || (l = o.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"), s = {}), l.collapse(s).on("hide.bs.collapse", function() {
            n(c), i(d, "hide"), l.prev(".panel-heading").addClass("panel-heading-collapsed")
        }).on("show.bs.collapse", function() {
            a(c), i(d, "show"), l.prev(".panel-heading").removeClass("panel-heading-collapsed")
        });
        var u = r(d);
        u && (setTimeout(function() {
            l.collapse(u)
        }, 0), i(d, u))
    }), e(o).on("click", l, function() {
        var t = e(this).closest(".panel"),
            o = t.find(".panel-wrapper");
        o.collapse("toggle")
    })
}(jQuery, window, document),
function(e, t, o) {
    "use strict";

    function a() {
        this.removeClass(r)
    }
    var n = '[data-tool="panel-refresh"]',
        i = "panel.refresh",
        r = "whirl",
        l = "standard";
    e(o).on("click", n, function() {
        var t = e(this),
            o = t.parents(".panel").eq(0),
            n = t.data("spinner") || l;
        o.addClass(r + " " + n), o.removeSpinner = a, t.trigger(i, [o])
    })
}(jQuery, window, document),
function(e, t, o) {
    "use strict";
    var a = "[data-animate]";
    e(function() {
        var n = e(t).add("body, .wrapper");
        e(a).each(function() {
            function t(t) {
                !t.hasClass("anim-running") && e.Utils.isInView(t, {
                    topoffset: a
                }) && (t.addClass("anim-running"), setTimeout(function() {
                    t.addClass("anim-done").animo({
                        animation: r,
                        duration: .7
                    })
                }, i))
            }
            var o = e(this),
                a = o.data("offset"),
                i = o.data("delay") || 100,
                r = o.data("play") || "bounce";
            "undefined" != typeof a && (t(o), n.scroll(function() {
                t(o)
            }))
        }), e(o).on("click", a, function() {
            var t = e(this),
                o = t.data("target"),
                a = t.data("play") || "bounce",
                n = e(o);
            n && n && n.animo({
                animation: a
            })
        })
    })
}(jQuery, window, document),
function(e) {
    "use strict";

    function t() {
        var t = e.localStorage.get(n);
        t || (t = {}), t[this.id] = e(this).sortable("toArray"), t && e.localStorage.set(n, t)
    }

    function o() {
        var t = e.localStorage.get(n);
        if (t) {
            var o = this.id,
                a = t[o];
            if (a) {
                var i = e("#" + o);
                e.each(a, function(t, o) {
                    e("#" + o).appendTo(i)
                })
            }
        }
    }
    if (e.fn.sortable) {
        var a = '[data-toggle="portlet"]',
            n = "jq-portletState";
        e(function() {
            e(a).sortable({
                connectWith: a,
                items: "div.panel",
                handle: ".portlet-handler",
                opacity: .7,
                placeholder: "portlet box-placeholder",
                cancel: ".portlet-cancel",
                forcePlaceholderSize: !0,
                iframeFix: !1,
                tolerance: "pointer",
                helper: "original",
                revert: 200,
                forceHelperSize: !0,
                update: t,
                create: o
            })
        })
    }
}(jQuery, window, document),
function(e, t, o) {
    o(function() {
        if ("undefined" != typeof Rickshaw) {
            for (var e = [
                    [],
                    [],
                    []
                ], o = new Rickshaw.Fixtures.RandomData(150), a = 0; 150 > a; a++) o.addData(e);
            var n = [{
                    color: "#c05020",
                    data: e[0],
                    name: "New York"
                }, {
                    color: "#30c020",
                    data: e[1],
                    name: "London"
                }, {
                    color: "#6060c0",
                    data: e[2],
                    name: "Tokyo"
                }],
                i = new Rickshaw.Graph({
                    element: t.querySelector("#rickshaw1"),
                    series: n,
                    renderer: "area"
                });
            i.render();
            var r = new Rickshaw.Graph({
                element: t.querySelector("#rickshaw2"),
                renderer: "area",
                stroke: !0,
                series: [{
                    data: [{
                        x: 0,
                        y: 40
                    }, {
                        x: 1,
                        y: 49
                    }, {
                        x: 2,
                        y: 38
                    }, {
                        x: 3,
                        y: 30
                    }, {
                        x: 4,
                        y: 32
                    }],
                    color: "#f05050"
                }, {
                    data: [{
                        x: 0,
                        y: 40
                    }, {
                        x: 1,
                        y: 49
                    }, {
                        x: 2,
                        y: 38
                    }, {
                        x: 3,
                        y: 30
                    }, {
                        x: 4,
                        y: 32
                    }],
                    color: "#fad732"
                }]
            });
            r.render();
            var l = new Rickshaw.Graph({
                element: t.querySelector("#rickshaw3"),
                renderer: "line",
                series: [{
                    data: [{
                        x: 0,
                        y: 40
                    }, {
                        x: 1,
                        y: 49
                    }, {
                        x: 2,
                        y: 38
                    }, {
                        x: 3,
                        y: 30
                    }, {
                        x: 4,
                        y: 32
                    }],
                    color: "#7266ba"
                }, {
                    data: [{
                        x: 0,
                        y: 20
                    }, {
                        x: 1,
                        y: 24
                    }, {
                        x: 2,
                        y: 19
                    }, {
                        x: 3,
                        y: 15
                    }, {
                        x: 4,
                        y: 16
                    }],
                    color: "#23b7e5"
                }]
            });
            l.render();
            var s = new Rickshaw.Graph({
                element: t.querySelector("#rickshaw4"),
                renderer: "bar",
                series: [{
                    data: [{
                        x: 0,
                        y: 40
                    }, {
                        x: 1,
                        y: 49
                    }, {
                        x: 2,
                        y: 38
                    }, {
                        x: 3,
                        y: 30
                    }, {
                        x: 4,
                        y: 32
                    }],
                    color: "#fad732"
                }, {
                    data: [{
                        x: 0,
                        y: 20
                    }, {
                        x: 1,
                        y: 24
                    }, {
                        x: 2,
                        y: 19
                    }, {
                        x: 3,
                        y: 15
                    }, {
                        x: 4,
                        y: 16
                    }],
                    color: "#ff902b"
                }]
            });
            s.render()
        }
    })
}(window, document, window.jQuery),
function(e, t, o) {
    function a() {
        var e = o("<div/>", {
            "class": "dropdown-backdrop"
        });
        e.insertAfter(".aside").on("click mouseenter", function() {
            r()
        })
    }

    function n(e) {
        e.siblings("li").removeClass("open").end().toggleClass("open")
    }

    function i(e) {
        r();
        var t = e.children("ul");
        if (!t.length) return o();
        if (e.hasClass("open")) return n(e), o();
        var a = o(".aside"),
            i = o(".aside-inner"),
            l = parseInt(i.css("padding-top"), 0) + parseInt(a.css("padding-top"), 0),
            s = t.clone().appendTo(a);
        n(e);
        var d = e.position().top + l - p.scrollTop(),
            f = u.height();
        return s.addClass("nav-floating").css({
            position: c() ? "fixed" : "absolute",
            top: d,
            bottom: s.outerHeight(!0) + d > f ? 0 : "auto"
        }), s.on("mouseleave", function() {
            n(e), s.remove()
        }), s
    }

    function r() {
        o(".sidebar-subnav.nav-floating").remove(), o(".dropdown-backdrop").remove(), o(".sidebar li.open").removeClass("open")
    }

    function l() {
        return f.hasClass("touch")
    }

    function s() {
        return h.hasClass("aside-collapsed")
    }

    function c() {
        return h.hasClass("layout-fixed")
    }

    function d() {
        return h.hasClass("aside-hover")
    }
    var u, f, h, p, g;
    o(function() {
        u = o(e), f = o("html"), h = o("body"), p = o(".sidebar"), g = APP_MEDIAQUERY;
        var t = p.find(".collapse");
        t.on("show.bs.collapse", function(e) {
            e.stopPropagation(), 0 === o(this).parents(".collapse").length && t.filter(".in").collapse("hide")
        });
        var n = o(".sidebar .active").parents("li");
        d() || n.addClass("active").children(".collapse").collapse("show"), p.find("li > a + ul").on("show.bs.collapse", function(e) {
            d() && e.preventDefault()
        });
        var r = l() ? "click" : "mouseenter",
            c = o();
        p.on(r, ".nav > li", function() {
            (s() || d()) && (c.trigger("mouseleave"), c = i(o(this)), a())
        });
        var m = p.data("sidebarAnyclickClose");
        "undefined" != typeof m && o(".wrapper").on("click.sidebar", function(e) {
            if (h.hasClass("aside-toggled")) {
                var t = o(e.target);
                t.parents(".aside").length || t.is("#user-block-toggle") || t.parent().is("#user-block-toggle") || h.removeClass("aside-toggled")
            }
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        o("[data-skycon]").each(function() {
            var e = o(this),
                t = new Skycons({
                    color: e.data("color") || "white"
                });
            e.html('<canvas width="' + e.data("width") + '" height="' + e.data("height") + '"></canvas>'), t.add(e.children()[0], e.data("skycon")), t.play()
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        o("[data-scrollable]").each(function() {
            var e = o(this),
                t = 250;
            e.slimScroll({
                height: e.data("height") || t
            })
        })
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        function t() {
            var t = o(this),
                a = t.data(),
                n = a.values && a.values.split(",");
            a.type = a.type || "bar", a.disableHiddenCheck = !0, t.sparkline(n, a), a.resize && o(e).resize(function() {
                t.sparkline(n, a)
            })
        }
        o("[data-sparkline]").each(t)
    })
}(window, document, window.jQuery),
function(e, t, o) {
    o(function() {
        o("[data-check-all]").on("change", function() {
            var e = o(this),
                t = e.index() + 1,
                a = e.find('input[type="checkbox"]'),
                n = e.parents("table");
            n.find("tbody > tr > td:nth-child(" + t + ') input[type="checkbox"]').prop("checked", a[0].checked)
        })
    })
}(window, document, window.jQuery),
function(e, t, o, a) {
    o(function() {
        var t = o("body");
        toggle = new StateToggler, o("[data-toggle-state]").on("click", function(n) {
            n.stopPropagation();
            var i = o(this),
                r = i.data("toggleState"),
                l = i.attr("data-no-persist") !== a;
            r && (t.hasClass(r) ? (t.removeClass(r), l || toggle.removeState(r)) : (t.addClass(r), l || toggle.addState(r))), o(e).resize()
        })
    }), e.StateToggler = function() {
        var e = "jq-toggleState",
            t = {
                hasWord: function(e, t) {
                    return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e)
                },
                addWord: function(e, t) {
                    return this.hasWord(e, t) ? void 0 : e + (e ? " " : "") + t
                },
                removeWord: function(e, t) {
                    return this.hasWord(e, t) ? e.replace(new RegExp("(^|\\s)*" + t + "(\\s|$)*", "g"), "") : void 0
                }
            };
        return {
            addState: function(a) {
                var n = o.localStorage.get(e);
                n = n ? t.addWord(n, a) : a, o.localStorage.set(e, n)
            },
            removeState: function(a) {
                var n = o.localStorage.get(e);
                n && (n = t.removeWord(n, a), o.localStorage.set(e, n))
            },
            restoreState: function(t) {
                var a = o.localStorage.get(e);
                a && t.addClass(a)
            }
        }
    }
}(window, document, window.jQuery),
function(e, t, o) {
    "use strict";
    var a = e("html"),
        n = e(t);
    e.support.transition = function() {
        var e = function() {
            var e, t = o.body || o.documentElement,
                a = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (e in a)
                if (void 0 !== t.style[e]) return a[e]
        }();
        return e && {
            end: e
        }
    }(), e.support.animation = function() {
        var e = function() {
            var e, t = o.body || o.documentElement,
                a = {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (e in a)
                if (void 0 !== t.style[e]) return a[e]
        }();
        return e && {
            end: e
        }
    }(), e.support.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
        t.setTimeout(e, 1e3 / 60)
    }, e.support.touch = "ontouchstart" in t && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, e.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || t.MozMutationObserver || null, e.Utils = {}, e.Utils.debounce = function(e, t, o) {
        var a;
        return function() {
            var n = this,
                i = arguments,
                r = function() {
                    a = null, o || e.apply(n, i)
                },
                l = o && !a;
            clearTimeout(a), a = setTimeout(r, t), l && e.apply(n, i)
        }
    }, e.Utils.removeCssRules = function(e) {
        var t, o, a, n, i, r, l, s, c, d;
        e && setTimeout(function() {
            try {
                for (d = document.styleSheets, n = 0, l = d.length; l > n; n++) {
                    for (a = d[n], o = [], a.cssRules = a.cssRules, t = i = 0, s = a.cssRules.length; s > i; t = ++i) a.cssRules[t].type === CSSRule.STYLE_RULE && e.test(a.cssRules[t].selectorText) && o.unshift(t);
                    for (r = 0, c = o.length; c > r; r++) a.deleteRule(o[r])
                }
            } catch (u) {}
        }, 0)
    }, e.Utils.isInView = function(t, o) {
        var a = e(t);
        if (!a.is(":visible")) return !1;
        var i = n.scrollLeft(),
            r = n.scrollTop(),
            l = a.offset(),
            s = l.left,
            c = l.top;
        return o = e.extend({
            topoffset: 0,
            leftoffset: 0
        }, o), c + a.height() >= r && c - o.topoffset <= r + n.height() && s + a.width() >= i && s - o.leftoffset <= i + n.width() ? !0 : !1
    }, e.Utils.options = function(t) {
        if (e.isPlainObject(t)) return t;
        var o = t ? t.indexOf("{") : -1,
            a = {};
        if (-1 != o) try {
            a = new Function("", "var json = " + t.substr(o) + "; return JSON.parse(JSON.stringify(json));")()
        } catch (n) {}
        return a
    }, e.Utils.events = {}, e.Utils.events.click = e.support.touch ? "tap" : "click", e.langdirection = "rtl" == a.attr("dir") ? "right" : "left", e(function() {
        if (e.support.mutationobserver) {
            var t = new e.support.mutationobserver(e.Utils.debounce(function() {
                e(o).trigger("domready")
            }, 300));
            t.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }
    }), a.addClass(e.support.touch ? "touch" : "no-touch")
}(jQuery, window, document),
function(e, t, o) {
    o(function() {})
}(window, document, window.jQuery);
