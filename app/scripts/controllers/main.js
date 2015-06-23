'use strict';

angular.module('craftsmansApp').controller('MainCtrl', function ($scope) {

	$scope.scroll = function(selector) {
		$('body').scrollTo(selector, 800);
	};

	$scope.scrollAndEmphasize = function(selector) {
		$(selector).collapse('show');
		$('body').scrollTo(selector, 800);
	};

	$scope.collapse = function(selector) {
		$(selector).collapse('toggle');
	};

	$scope.carouselIndex = 0;
	$scope.recommendations = [
		{
			text: "Eduard is an exceptional combination of pragmatism, innovation, vision and inspiration. Having Eduard in a team/company is a great success by default.",
			who: {
				img: "images/vishnya.png",
				name: "Valery Vishnyakov",
				title: "CTO of Ask.fm",
				linkedin: "https://www.linkedin.com/profile/view?id=17362383"
			}
		},
		{
			text: "Eduards is easily one of the smartest IT persons I know. He has deep understanding of software development and architecture, how well crafted software should be written and delivered in 21st century.",
			who: {
				img: "images/rolme.png",
				name: "Rolands Mekss",
				title: "System Engineers Manager @ 4finance",
				linkedin: "https://www.linkedin.com/profile/view?id=71926089"
			}
		},
		{
			text: "Eduards is one of the most productive programmers I have worked with. Call Eduards if your project is in trouble or you want to develop your software really-really fast.",
			who: {
				img: "images/buzdin.png",
				name: "Dmitry Buzdin",
				title: "Software Architect @ Neueda",
				linkedin: "https://www.linkedin.com/profile/view?id=8716140"
			}
		},		
		{
			text: "Eduards is excellent at what he does, never goes for \"good enough\", gets better all the time and makes those around him better too.  He is a true leader and role model.",
			who: {
				img: "images/alla.png",
				name: "Alla Babkina",
				title: "Development Lead @ Bondcube Limited",
				linkedin: "https://www.linkedin.com/profile/view?id=18217917"
			}
		},
		{
			text: "I had a pleasure working with probably the most energetic and technology-aware person during my entire 15+ years career.",
			who: {
				img: "images/dainius.png",
				name: "Dainius Vaznys",
				title: "Software Architect @ 4finance",
				linkedin: "https://www.linkedin.com/profile/view?id=9262838"
			}
		}						
	]
});
