/*柱状图对象*/

var H5ComponentBar_v = function ( name, cfg ){
	var component = new H5ComponentBase( name, cfg);

	$.each(cfg.data, function(idx,item){
		var line = $('<div class="line">');
		var name =  $('<div class="name">');
		var rate =  $('<div class="rate">');
		var bg = $('<div class="bg"></div>');
		var per =  $('<div class="per">');

		var height = item[1]*100;
		height = height.toFixed(0);

		//cfg
		var length = cfg.data.length;
		rate.css('width',cfg.width/length/4);
		name.css('width',cfg.width/length/2.5);
		rate.css('margin-left',cfg.width/length/3);
		name.css('margin-left',cfg.width/length/4);
		
		if (item[2]){
			bg.css('background-color',item[2]);
			per.css('color',item[2]);
		}
		rate.css('height',height*1.5 +'%');
		name.text(item[0]);
		per.text(height+'%');

		rate.append(bg).append(per);
		line.append(name).append(rate);
		component.append(line);

	});
	return component;
}