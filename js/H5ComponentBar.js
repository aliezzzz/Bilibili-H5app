/*柱状图对象*/

var H5ComponentBar = function ( name, cfg ){
	var component = new H5ComponentBase( name, cfg);

	$.each(cfg.data, function(idx,item){
		var line = $('<div class="line">');
		var name =  $('<div class="name">');
		var rate =  $('<div class="rate">');
		var bg = $('<div class="bg"></div>');
		var per =  $('<div class="per">');

		var width = item[1]*10;
		
		if (item[2]){
			bg.css('background-color',item[2]);
			per.css('color',item[2]);
		}
		if (width>80){
			rate.css('width',(width-80)*3 +'%');
		}else{
			rate.css('width',(width-50)*1.2 +'%');
		}
		if(idx==0){
			name.addClass("name_top"); 
		}
		name.text(item[0]);
		per.text(width/10);

		rate.append(bg);
		line.append(name).append(rate).append(per);
		component.append(line);

	});
	
	return component;
}