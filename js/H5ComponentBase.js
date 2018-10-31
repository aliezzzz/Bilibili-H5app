/*基本图文组件对象*/

var H5ComponentBase = function( name, cfg ) {
	var cfg = cfg || {};
	var id = ('h5_c_' + Math.random()).replace('.','_');
	var cls = 'h5_component_' +cfg.type; 
	var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.css && component.css( cfg.css );
	cfg.bg && component.css('backgroundImage', 'url('+cfg.bg+')');

	var title;
	if(cfg.title){
		title = '<p class="title">' + cfg.title + '</p>';
		component.html(title);
	}
	cfg.text && component.text(cfg.text);
	cfg.html && component.html(cfg.html);
	
	if( cfg.center === true ){
		component.css({
				marginLeft : (cfg.width/4 * -1) +'px',
				left: '50%',
		});
	}

	// 自定义组件事件
	// 点击事件
	if(typeof cfg.onclick === 'function'){
		component.on('click',cfg.onclick);
	}


	// 页面载入事件
	component.on('onLoad',function(){
		setTimeout(function(){
			component.addClass(cls+"_load").removeClass(cls+'_leave');
			cfg.animateIn && component.animate( cfg.animateIn );
		},cfg.delay || 0);
		if(cfg.nextMove){
			setTimeout(function(){
				component.css(cfg.nextMove[0],cfg.nextMove[1]);
			},cfg.nextMove[2]);
		}
		

		
		return false;
	});
	// 页面离开事件
	component.on('onLeave',function(){
		setTimeout(function(){
			component.addClass(cls+"_leave").removeClass(cls+'_load');
			cfg.animateOut && component.animate( cfg.animateOut );
		},cfg.delay || 0);
		return false;
	});
	return component;
}