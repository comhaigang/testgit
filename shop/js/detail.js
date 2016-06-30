$(function(){
	$('#top').load('html/top.html');
	$('#header').load('html/header.html');
	$('#nav-list').load('html/nav-list.html');
	$('#detailFooter-top').load('html/footertopDetail.html');
	$('#detailFooter-btm').load('html/footerbtm.html');
	var rightBarH = $(window).height();
	$('#index-right-bar').css({
		'height': rightBarH + 'px',
		'width': 35 + 'px',
		'position': 'fixed',
		'right': 0,
		'z-index': 999,
		'background': '#333333',
		'top': 0
	});
	$(window).resize(function() {
		var rightBarH = $(document).height();
		$('#index-right-bar').animate({
			'height': rightBarH + 'px',
			'width': 35 + 'px'
		}, 100);
	});
	$('.index-bar>li:nth-child(3)').indexbar('.index-bar>li:nth-child(3)');
	$('.index-bar>li:nth-child(5)').indexbar('.index-bar>li:nth-child(5)');
	$('.index-bar>li:nth-child(6)').indexbar('.index-bar>li:nth-child(6)');
	$('.index-bar>li:nth-child(7)').indexbar('.index-bar>li:nth-child(7)');
	$('.index-bar>li:nth-child(8)').indexbar('.index-bar>li:nth-child(8)');
	$('.index-bar>li:nth-child(8)').css('opacity', '0');
	//设置回到顶部临界值
	$(window).scroll(function(){
		var _index=$(window).scrollTop();
		if(_index<600){
			$('.index-bar>li:nth-child(8)').css('opacity', '0');
		}else{
			$('.index-bar>li:nth-child(8)').css('opacity', '1');
		}
	});
	//主页右侧客户中心
	$('.index-bar>li:nth-child(1)').menu('.index-bar>li:nth-child(1)','.index-bar>li:nth-child(13)');
	//在线客服
	$('.index-bar>li:nth-child(2)').fadetog('.index-bar>li:nth-child(2)','.index-bar>li:nth-child(12)');
	//主页右侧购物车的显示与隐藏
	$('.index-bar>li:nth-child(4)').fadetog('.index-bar>li:nth-child(4)','.index-bar>li:nth-child(10)');
	//主页右侧调查显示
	$('.index-bar>li:nth-child(3)').fadetog('.index-bar>li:nth-child(3)','.index-bar>li:nth-child(11)');
	//主页右侧微信显示与隐藏
	$('.index-bar>li:nth-child(7)').fadetog('.index-bar>li:nth-child(7)','.index-bar>li:nth-child(9)');
	//回到顶部
	$('.index-bar>li:nth-child(8)').click(function(){
		$(window).scrollTop(0);
	});
});