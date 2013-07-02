;(function($,win,doc,undefined){
	
	$.fn.fitTextToBox = function(options){
		
		var settings = $.extend({
			'wrap': '<span class="fttb-wrap"></span>'
		}, options);
		
		return this.each(function(){
			
			var $this = $(this),
				$content = $(settings.wrap).html($this.html()).appendTo($this.html('')),
				
				getMulti = function(){
					return Math.min(
						($this.height()/$content.height()),
						($this.width()/$content.width())
					);
				};
			
			console.log($this, $content, getMulti(), [$this.width(), $this.height()], [$content.width(), $content.height()]);
				
			$content.css({
				'font-size': getMulti() + 'em'
			})
				
			
		});
	};
	
	
	
})(jQuery, window, document)