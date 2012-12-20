<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="[[++cultureKey]]"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="[[++cultureKey]]"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="[[++cultureKey]]"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="[[++cultureKey]]"> <!--<![endif]-->
<head>
	<base href="[[++custom.site_url]]" />
	<meta http-equiv="content-type" content="text/html; charset=[[++modx_charset:lcase]]" />
	<!-- Set the viewport width to device width for mobile -->
	<meta name="viewport" content="width=device-width" />
	<title>[[getResources? &resources =`[[++custom.site_settings]]` &tpl=`core.SiteNameTpl` &includeTVs=`1` &processTVs=`1` &parents=`-1` &limit=`1` &tvPrefix=``]] - [[*pagetitle]]</title>
	<meta name="language" content="[[++cultureKey]]" />
	<meta name="description" content="" />
	<meta name="author" content="[[If? &subject=`[[*publishedby]]` &operator=`>` &operand=`0` &then=`[[*publishedby:userinfo=`fullname`]]` &else=`[[*createdby:userinfo=`fullname`]]`]]" />
	<meta name="keywords" content="" />

	<!-- Included CSS Files -->
	[[$core.CSSLinksTpl]]
	<link rel="shortcut icon" href="assets/templates/[[++custom.domain_abbreviation]]/favicon.ico">
	<!-- make sure the Theme style is always last in order, so as to overwrite others -->
	<link rel="stylesheet" href="assets/templates/core/stylesheets/[[getResources? &resources=`[[++custom.site_settings]]` &tpl=`core.SiteThemeCSSTpl` &includeTVs=`1` &processTVs=`1` &parents=`-1` &limit=`1` &tvPrefix=``]]" />
	<!-- page specific css -->
	[[*CustomCSSTV]]

</head>
<body style="background-image:url('assets/templates/core/images/backgrounds/[[getResources? &resources=`[[++custom.site_settings]]` &tpl=`core.SiteBackgroundTpl` &includeTVs=`1` &processTVs=`1` &parents=`-1` &limit=`1` &tvPrefix=``]]')">
	<!-- container -->
		<div class="container">
			<header class="row">
				<div class="twelve columns centered">
					<nav id="main_nav" class="hide-for-touch">
					[[!If?
					   &subject=`[[+modx.user.id]]`
					   &operator=`empty`
					   &then=`
					<!-- we dont know who the user is, don't show profile link -->
						[[!Wayfinder? 
						  &startId=`[[++custom.site_start]]` 
						  &outerTpl=`core.NavigationOuterTpl` 
						  &rowTpl=`core.NavigationRowTpl` 
						  &parentRowTpl=`core.NavigationParentRowTpl`
						  &innerTpl=`core.NavigationInnerTpl`  
						  &innerRowTpl=`core.NavigationInnerRowTpl`
						  &excludeDocs=`[[++custom.profile]]`
						]]
					`&else=`<!-- show the known user the profile link -->
						<!-- wayfinder's nesting order: outer(ul), if no children then row(li) else parentrow(li), inner(div), parentrow(li), inner(div), innerrow(div) -->
						[[!Wayfinder? 
						  &startId=`[[++custom.site_start]]` 
						  &outerTpl=`core.NavigationOuterTpl` 
						  &rowTpl=`core.NavigationRowTpl` 
						  &parentRowTpl=`core.NavigationParentRowTpl`
						  &innerTpl=`core.NavigationInnerTpl`  
						  &innerRowTpl=`core.NavigationInnerRowTpl`
						]]
					`]]
					</nav>
					<nav id="main_nav" class="mobile_nav show-for-touch">
					[[!If?
					   &subject=`[[+modx.user.id]]`
					   &operator=`empty`
					   &then=`
					<!-- we dont know who the user is, don't show profile link -->
						[[!Wayfinder? &startId=`[[++custom.site_start]]` &rowTpl=`core.NavigationRowTpl` &innerTpl=`core.NavigationInnerTpl` &outerTpl=`core.NavigationOuterTpl` &excludeDocs=`[[++custom.profile]]`]]
					`&else=`<!-- show the known user the profile link -->
						[[!Wayfinder? &startId=`[[++custom.site_start]]` &rowTpl=`core.NavigationRowTpl` &innerTpl=`core.NavigationInnerTpl` &outerTpl=`core.NavigationOuterTpl`]]
					`]]
					</nav>
				</div><!-- .twelve columns centered -->
			</header>
			<header class="row">
				<div class="twelve columns centered hide-for-touch" style="background: url('assets/templates/[[++custom.domain_abbreviation]]/images/logo_banner_small.png') no-repeat;width:970px;height:250px;margin-top:6px;margin-bottom:8px;"><div style="float:right;color:#000000;margin-top:8px;margin-right:8px;">[[$core.CurrentDateTpl]]</div></div>
				<div class="twelve columns show-for-touch" style="background: url('assets/templates/[[++custom.domain_abbreviation]]/images/logo_banner_small.png') no-repeat;width:278px;height:122px;margin-top:6px;margin-bottom:8px;"></div>

				<div class="loginMessage">[[+errors]]</div>
			</header>