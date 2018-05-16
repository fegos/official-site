if (typeof window !== 'undefined') {
	(function () {
		let gid = 'UA-119333161-1';
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());
		gtag('config', gid);

		var scriptEl = document.createElement("script");
		scriptEl.src = `https://www.googletagmanager.com/gtag/js?id=${gid}`;
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(scriptEl, s);
	})();
}
