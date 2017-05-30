$(function(){
		$(".desc1").typed({
			strings: ["I am a full-stack JavaScript developer"
			],
			typeSpeed: 60,
			preStringTyped: function() {
				$(".desc1").css("text-align", "center");
			}
		});
		// $(".desc2").typed({
		// 	strings: [ 
		// 	"I'm interested in EdTech, FinTech, and BioTech..."
			
		// 	],
		// 	typeSpeed: 60,
		// 	preStringTyped: function() {
		// 		$(".desc2").css("text-align", "center");
		// 	}
		// });
		// $(".desc3").typed({
		// 	strings: [
		// 	"I currently use React, Node, and MongoDB..."
		// 	],
		// 	typeSpeed: 60,
		// 	preStringTyped: function() {
		// 		$(".desc3").css("text-align", "center");
		// 	}
		// });
});