/*时间*/
window.setInterval('showTime()',1000)
function showTime()
{
    var enabled = 0;
    today = new Date();
    var day;
    var date;
    if(today.getDay()==0) day = "星期日";
    if(today.getDay()==1) day = "星期一";
    if(today.getDay()==2) day = "星期二";
    if(today.getDay()==3) day = "星期三";
    if(today.getDay()==4) day = "星期四";  
    if(today.getDay()==5) day = "星期五";
    if(today.getDay()==6) day = "星期六";
    date = "20" + (today.getYear()-100) + "年" + (today.getMonth() + 1 ) + "月" + today.getDate() + "日" +
        day+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    document.getElementById("time").innerHTML=date;
}
/*统计*/
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1258162019'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1258162019%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));

/*公告栏轮播*/
$(function(){
    $(".r_center .newstab ul li").click(function(){
        var n_index=$(this).index();/*获取当前标签*/
        $(".r_tabtitle .newstab .numb").stop().animate({left:n_index*66},500);
        $(".r_news .newslist .n_list").stop().animate({left:-n_index*315},500);/*使用animate()控制移动*/
    })
})

var scrolltotop={
	setting:{
		startline:100, //起始行
		scrollto:0, //滚动到指定位置
		scrollduration:400, //滚动过渡时间
		fadeduration:[500,100] //淡出淡现消失
	},
	controlHTML:'<img src="images/top.png" style="width:30px; height:30px; border:0;" />', //返回顶部按钮
	controlattrs:{offsetx:10,offsety:10},//返回按钮固定位置
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol" >'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"返回顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();

/*爱心*/
window.requestAnimFrame = (function () {

 return window.requestAnimationFrame ||

 window.webkitRequestAnimationFrame ||

 window.mozRequestAnimationFrame ||

 window.oRequestAnimationFrame ||

 window.msRequestAnimationFrame ||

 function (callback) {

  window.setTimeout(callback, 1000 / 60);

  };

})();


/*

 *basic stuff

 */

var FX = {

    config: {

       background  :'rgba(250,250,250,0.2)',

       color       : 'red',//初始的颜色

       highlight   : 'red'//鼠标经过de鼠标经过的yanse

   },

   dots : []

};

 

FX.canvas =document.getElementById('myLove');

FX.ctx = FX.canvas.getContext('2d');

 

 

/*

 *Extend Math Object

 */

Math.TO_RAD = Math.PI/180;

 

Math.getDistance = function( x1, y1, x2, y2) {

   

   var     xs = 0,

       ys = 0;

    

   xs = x1 - x2;

   ys = y1 - y2;      

   xs = xs * xs;

   ys = ys * ys;

    

   return Math.sqrt( xs + ys );

};

 

Math.getDegree = function( x1, y1, x2, y2 ){

       

   var dx = x2 - x1,

       dy = y2 - y1;

   

   return Math.atan2(dy,dx) / Math.TO_RAD;

};

 

 

 

/*

 *Dot Object

 */

var Dot = function( opts ) {

 

   this.color = opts.color;

 

   this.x = 0;

   this.y = 0;

   this.dest_x = (opts.dest_x - 75);

   this.dest_y = (opts.dest_y - 75);

};

 

Dot.prototype.update = function() {

 

   var     d = this,

       dist_x = d.dest_x - d.x,

       dist_y = d.dest_y - d.y;

 

   d.x += dist_x * 0.05;

   d.y += dist_y * 0.05;

 

   FX.ctx.fillStyle = d.color;

   FX.ctx.fillRect( d.x-2, d.y-2, 4, 4 );

};

 

 

 

/*

 *full screen canvas

 */

FX.setFullscreen = function() {

   FX.width = FX.canvas.width = window.innerWidth;

   FX.height = FX.canvas.height = window.innerHeight;

};

 

/*

 *Mouse

 */

FX.handleMouseEvent = function(e, power) {

 

   var     radius = 75,

       k = FX.dots.length,

       i=0,

       mx, my,

       dist, degree,

       d;

 

   if(e.offsetX) {

       mx = e.offsetX;

       my = e.offsetY;

    }else if(e.layerX) {

       mx = e.layerX;

       my = e.layerY;

    }

 

   mx -= FX.width/2;

   my -= FX.height/2;

 

   for( ;i<k;i=i+1 ) {

 

       d = FX.dots[i];

 

       dist = Math.getDistance( mx, my, d.x, d.y);    

 

       if( dist < radius ) {

 

           degree = Math.getDegree( d.x, d.y, mx, my );

 

           d.x += (Math.cos( degree * Math.TO_RAD ) * ((radius-dist) * power));

           d.y += (Math.sin( degree * Math.TO_RAD ) * ((radius-dist) * power));

 

           d.color = FX.config.highlight;

 

       } else {

           d.color = FX.config.color;

       }

    }

};

 

/*

 *create the heart

 */

FX.createHeart = function() {

   var     coords =[[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[14,4],[14,5],[14,6],[14,7],[14,8]],

       k = coords.length,

       raster = 10,

       i = 0;

 

   for( ;i<k;i=i+1 ) {

       FX.dots.push( new Dot({

           dest_x : coords[i][0] * raster,

           dest_y : coords[i][1] * raster,

           color: FX.config.color

       }) );

    }

};

 

/*

 *main loop

 */

FX.loop = function() {

 

   var     ctx = FX.ctx,

       k = FX.dots.length,

       i = 0;

 

   ctx.fillStyle = FX.config.background;

   ctx.fillRect(0,0, FX.width, FX.height );

 

 

   ctx.save();

   ctx.translate( FX.width/2, FX.height/2 );

 

   for( ;i<k;i=i+1 ) {

       FX.dots[i].update();

    }

 

   ctx.restore();

   

   requestAnimFrame( FX.loop );

};

 

/*

 *Event bindings

 */

window.addEventListener('resize',FX.setFullscreen );

FX.canvas.addEventListener('mousemove',function(e) { FX.handleMouseEvent(e, -0.1); } );

FX.canvas.addEventListener('mousedown',function(e) { FX.handleMouseEvent(e, 1); } );

 

 

/*

 *Init

 */

FX.setFullscreen();

FX.createHeart();

FX.loop();