<html>
<head>
<base href="[[++custom.site_url]]" />
<meta http-equiv="content-type" content="text/html; charset=[[++modx_charset:lcase]]" />
	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width" />
	<title>[[getResources? &resources =`[[++custom.site_settings]]` &tpl=`core.SiteNameTpl` &includeTVs=`1` &processTVs=`1` &parents=`-1` &limit=`1` &tvPrefix=``]] - [[*pagetitle]]</title>
	<meta name="language" content="[[++cultureKey]]" />
<!-- page specific css -->
[[*CustomCSSTV]]
<script type="text/javascript" src="assets/templates/core/javascripts/extjs/bootstrap.js"></script>
[[*CustomJavaScriptTV]]
</head>
<body>
[[*content]]
</body>
</html>