$(function(){
	// 主页轮播图
	var mySwiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		direction:"vertical",
		mousewheelControl:true,	
		onInit: function(swiper){ 
			swiperAnimateCache(swiper); 
			swiperAnimate(swiper); 
			
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper);
			switch(mySwiper.activeIndex){
				case 0:
				{
					$("#head").css({
						"background":"#d7dade",
						"color":"#000"
					});
					$("#head").hide();
					$("#head").slideDown(500);
					break;
				}
				case 1:
				{
					$("#head").hide();
					$("#head").css({
						"background":"rgba(0,0,0,0.5)",
						"color":"#fff"
					});
					$("#head").slideDown(500);
					break;
				}
				case 2:
				{
					$("#head").hide();
					$("#head").slideDown(500);
					break;
				}
				case 3:
				{
					$("#head").hide();
					$("#head").slideDown(500);
					break;
				}
				case 4:
				{
					$("#head").hide();
					$("#head").slideDown(500);
					break;
				}
			}
		} 		
	});
});
