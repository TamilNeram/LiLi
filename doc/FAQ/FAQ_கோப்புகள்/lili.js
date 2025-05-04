/* FancyBox SlideShow */
jQuery(document).ready(function($){
	$("a.fancy-slideshow").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	200, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'overlayOpacity':	0.5,
		'overlayColor'	: '#000',
		'autoScale'		:	true
	});
	

	 $('#compat-list').listmenu({
		menuWidth: 800,
		includeNums: false,
		showCounts: false,		
		noMatchText: 'No Linux Distribution supported', 
		cols:{ count:2, gutter:0 }
		//onClick:function($target){ if($target.is('a')){ alert($target.text()+"\r\n\r\n"+$target.attr('rel')); }}
	});
	
	
	$("a.distro").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	200, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'overlayOpacity':	0.5,
		'overlayColor'	: '#000',
		'autoScale'		:	true
	});

	$("#compat-list a").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	200, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'overlayOpacity':	0.5,
		'overlayColor'	: '#000',
		'autoScale'		:	true
	});		
});
/* AdSense */ 
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-7719594-2']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function OpenLiLiGuide() {
setTimeout(function(){window.location = 'http://www.linuxliveusb.com/en/help/guide/preparation';},10000);
}

function OpenLiLiGuideFR() {
setTimeout(function(){window.location = 'http://www.linuxliveusb.com/fr/aide/guide-utilisateur/preparation';},10000);
}