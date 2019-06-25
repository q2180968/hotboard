$(document).ready(function() {

    $('body').on('click', "#accounts-button", function (e){
		$(".item-list").show();
		e.stopPropagation();
		$('body').one("click",function(){
			$(".item-list").hide();
		});
	});
    	
    	$('body').on('click', ".darkmode", function (e){
		$(".darkmode .switch").toggleClass("on");
		if(Cookies.get('darkmode')){
			Cookies.remove('darkmode');
		}
		else{
			Cookies.set('darkmode', 'on');
		}
		$('body').toggleClass("dark");
		e.stopPropagation();
	});
	
	if($(".nano").length>0){
		$(".nano").nanoScroller();
	}
	
	$('body').on('click', '.Ib-T', function (){
		var nodeid = $(this).attr("nodeid");
		var isfollow = $(this).attr("isfollow");
		var $this = $(this);
		$.post("/do", { c: "node", t: (isfollow==1?"unfollow":"follow"), nodeid:nodeid },function(data){
			if(!data.error){
				$this.attr("isfollow",(isfollow==1?"0":"1"));
				$this.removeClass("Ib-T-"+(isfollow==1?"xc":"yc")).addClass("Ib-T-"+(isfollow==1?"yc":"xc"));
				
				if($this.hasClass("popover")){
					$this.text(isfollow==1?"订阅":"已订阅");
					$("#node-"+nodeid).find(".i-o").attr("isfollow",(isfollow==1?"0":"1"));
				}
				
				if(isfollow==1 && $(document).find(".bc-tc-tb").text()=='我的订阅'){
					$('.i-o').webuiPopover('destroy');
					$("#node-"+nodeid).fadeOut('normal',function(){
						$("#node-"+nodeid).remove();
					});
				}
				
			}
			else{
				layer.msg(data.msg);
			}
		});
	
	});
	
	
	$('body').on('click', "a[itemid]", function (e){
		var docid = $(this).attr("itemid");
		$.post("/do", { c: "doc", t: "view", itemid:itemid },function(data){});
	});
	

	$('body').on('click', ".i-o", function (e){
		$(this).webuiPopover('destroy').webuiPopover({
							trigger:'manual',
							title:'节点',
							content:'<a class="Ib-T popover" nodeid="'+$(this).attr("nodeid")+'" isfollow="'+$(this).attr("isfollow")+'">'+($(this).attr("isfollow")==1?'已':'')+'订阅</a><a href="/n/'+$(this).attr("hashid")+'">访问节点</a><a href="'+$(this).attr("homepage")+'" target="_blank">访问源网站</a>',
							width:'auto',						
							multi:false,						
							closeable:true,
							style:(Cookies.get('darkmode')?'inverse':''),
							padding:true,
							backdrop:false,
							dismissible:true,
							cache:false,
							animation:'pop'
					}).webuiPopover('show');

	});

	
});