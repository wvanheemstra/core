[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="five columns">
                        [[$core.CreateResourceButtonTpl]]
			</div>
			<div class="two columns" style="color:#ffffff">[[$core.UserNameTpl]]</div>
			<div class="one columns" style="text-align:right;">
			[[$core.EditSiteSettingsButtonTpl]]
			</div>
			<div class="one columns" style="text-align:right;">
			[[$core.LoginButtonTpl]]
			</div>
		</div>
		<!-- END Optional toolbar -->

                <!-- START Optional breadcrumbs -->
		[[switch?
		&get=`[[*BreadCrumbTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			<div id="breadcrumbs" class="twelve columns">
                               [[$core.BreadCrumbTpl]]
			</div><!-- #breadcrumbs -->
		</div>
		`&default=``]]
		<!-- END Optional breadcrumbs -->

                <!-- START Edit site settings -->
                <div class="row">
                  <div id="edit_site_settings" class="twelve columns">
		[[!Profile]]
		[[!FormItRetriever? 
		&redirectToOnNotFound=`[[++custom.error]]`
		]]
<form class="custom nice" action="">
<table style="width:100%;">
<thead>
  <tr>
<th><h5>[[%custom.label_site_settings_edited? &namespace=`custom`]]:</h5></th><th><h5>[[!getResources? &resources=`[[++custom.site_start]]` &tpl=`core.SiteSettingsEditedRowTpl`]]</h5></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
    <label for="SiteThemeCSSTV">
        [[%custom.label_choose_theme? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SiteThemeCSSTV]]</span>
    </label>
    </td><td>
	    <select id="SiteThemeCSSTV" name="SiteThemeCSSTV">
	      <option value="theme-default.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-default.css`]]>[[%custom.label_default? &namespace=`custom`]]</option>
	      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
	      <option value="theme-aqua-marine.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-aqua-marine.css`]]>[[%custom.label_aqua_marine? &namespace=`custom`]]</option>
	      <option value="theme-aqua.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-aqua.css`]]>[[%custom.label_aqua? &namespace=`custom`]]</option>
	      <option value="theme-beige.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-beige.css`]]>[[%custom.label_beige? &namespace=`custom`]]</option>
	      <option value="theme-blue-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-blue-violet.css`]]>[[%custom.label_blue_violet? &namespace=`custom`]]</option>
	      <option value="theme-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-blue.css`]]>[[%custom.label_blue? &namespace=`custom`]]</option>
	      <option value="theme-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-brown.css`]]>[[%custom.label_brown? &namespace=`custom`]]</option>
	      <option value="theme-cadet-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-cadet-blue.css`]]>[[%custom.label_cadet_blue? &namespace=`custom`]]</option>
	      <option value="theme-chart-reuse.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-chart-reuse.css`]]>[[%custom.label_chart_reuse? &namespace=`custom`]]</option>
	      <option value="theme-coral.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-coral.css`]]>[[%custom.label_coral? &namespace=`custom`]]</option>
	      <option value="theme-corn-flower-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-corn-flower-blue.css`]]>[[%custom.label_corn_flower_blue? &namespace=`custom`]]</option>
	      <option value="theme-crimson.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-crimson.css`]]>[[%custom.label_crimson? &namespace=`custom`]]</option>
	      <option value="theme-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-cyan.css`]]>[[%custom.label_cyan? &namespace=`custom`]]</option>
	      <option value="theme-dark-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-blue.css`]]>[[%custom.label_dark_blue? &namespace=`custom`]]</option>
	      <option value="theme-dark-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-cyan.css`]]>[[%custom.label_dark_cyan? &namespace=`custom`]]</option>
	      <option value="theme-dark-gold-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-gold-rod.css`]]>[[%custom.label_dark_gold_rod? &namespace=`custom`]]</option>
	      <option value="theme-dark-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-gray.css`]]>[[%custom.label_dark_gray? &namespace=`custom`]]</option>
	      <option value="theme-dark-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-green.css`]]>[[%custom.label_dark_green? &namespace=`custom`]]</option>
	      <option value="theme-dark-khaki.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-khaki.css`]]>[[%custom.label_dark_khaki? &namespace=`custom`]]</option>
	      <option value="theme-dark-magenta.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-magenta.css`]]>[[%custom.label_dark_magenta? &namespace=`custom`]]</option>
	      <option value="theme-dark-olive-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-olive-green.css`]]>[[%custom.label_dark_olive_green? &namespace=`custom`]]</option>
	      <option value="theme-dark-orange.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-orange.css`]]>[[%custom.label_dark_orange? &namespace=`custom`]]</option>
	      <option value="theme-dark-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-orchid.css`]]>[[%custom.label_dark_orchid? &namespace=`custom`]]</option>
	      <option value="theme-dark-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-red.css`]]>[[%custom.label_dark_red? &namespace=`custom`]]</option>
	      <option value="theme-dark-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-salmon.css`]]>[[%custom.label_dark_salmon? &namespace=`custom`]]</option>
	      <option value="theme-dark-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-sea-green.css`]]>[[%custom.label_dark_sea_green? &namespace=`custom`]]</option>
	      <option value="theme-dark-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-slate-blue.css`]]>[[%custom.label_dark_slate_blue? &namespace=`custom`]]</option>
	      <option value="theme-dark-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-slate-gray.css`]]>[[%custom.label_dark_slate_gray? &namespace=`custom`]]</option>
	      <option value="theme-dark-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-turquoise.css`]]>[[%custom.label_dark_turquoise? &namespace=`custom`]]</option>
	      <option value="theme-dark-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dark-violet.css`]]>[[%custom.label_dark_violet? &namespace=`custom`]]</option>
	      <option value="theme-deep-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-deep-pink.css`]]>[[%custom.label_deep_pink? &namespace=`custom`]]</option>
	      <option value="theme-deep-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-deep-sky-blue.css`]]>[[%custom.label_deep_sky_blue? &namespace=`custom`]]</option>
	      <option value="theme-dim-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dim-gray.css`]]>[[%custom.label_dim_gray? &namespace=`custom`]]</option>
	      <option value="theme-dodger-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-dodger-blue.css`]]>[[%custom.label_dodger_blue? &namespace=`custom`]]</option>
	      <option value="theme-firebrick.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-firebrick.css`]]>[[%custom.label_firebrick? &namespace=`custom`]]</option>
	      <option value="theme-floral-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-floral-white.css`]]>[[%custom.label_floral_white? &namespace=`custom`]]</option>
	      <option value="theme-forest-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-forest-green.css`]]>[[%custom.label_forest_green? &namespace=`custom`]]</option>
	      <option value="theme-gainsboro.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-gainsboro.css`]]>[[%custom.label_gainsboro? &namespace=`custom`]]</option>
	      <option value="theme-ghost-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-ghost-white.css`]]>[[%custom.label_ghost_white? &namespace=`custom`]]</option>
	      <option value="theme-gold.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-gold.css`]]>[[%custom.label_gold? &namespace=`custom`]]</option>
	      <option value="theme-golden-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-golden-rod.css`]]>[[%custom.label_golden_rod? &namespace=`custom`]]</option>
	      <option value="theme-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-gray.css`]]>[[%custom.label_gray? &namespace=`custom`]]</option>
	      <option value="theme-green-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-green-yellow.css`]]>[[%custom.label_green_yellow? &namespace=`custom`]]</option>
	      <option value="theme-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-green.css`]]>[[%custom.label_green? &namespace=`custom`]]</option>
	      <option value="theme-honeydew.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-honeydew.css`]]>[[%custom.label_honeydew? &namespace=`custom`]]</option>
	      <option value="theme-hot-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-hot-pink.css`]]>[[%custom.label_hot_pink? &namespace=`custom`]]</option>
	      <option value="theme-indian-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-indian-red.css`]]>[[%custom.label_indian_red? &namespace=`custom`]]</option>
	      <option value="theme-indigo.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-indigo.css`]]>[[%custom.label_indigo? &namespace=`custom`]]</option>
	      <option value="theme-ivory.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-ivory.css`]]>[[%custom.label_ivory? &namespace=`custom`]]</option>
	      <option value="theme-khaki.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-khaki.css`]]>[[%custom.label_khaki? &namespace=`custom`]]</option>
	      <option value="theme-lavender-blush.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-lavender-blush.css`]]>[[%custom.label_lavender_blush? &namespace=`custom`]]</option>
	      <option value="theme-lavender.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-lavender.css`]]>[[%custom.label_lavender? &namespace=`custom`]]</option>
	      <option value="theme-lawn-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-lawn-green.css`]]>[[%custom.label_lawn_green? &namespace=`custom`]]</option>
	      <option value="theme-lemon-chiffon.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-lemon-chiffon.css`]]>[[%custom.label_lemon_chiffon? &namespace=`custom`]]</option>
	      <option value="theme-light-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-blue.css`]]>[[%custom.label_light_blue? &namespace=`custom`]]</option>
	      <option value="theme-light-coral.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-coral.css`]]>[[%custom.label_light_coral? &namespace=`custom`]]</option>
	      <option value="theme-light-cyan.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-cyan.css`]]>[[%custom.label_light_cyan? &namespace=`custom`]]</option>
	      <option value="theme-light-golden-rod-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-golden-rod-yellow.css`]]>[[%custom.label_light_golden_rod_yellow? &namespace=`custom`]]</option>
	      <option value="theme-light-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-gray.css`]]>[[%custom.label_light_gray? &namespace=`custom`]]</option>
	      <option value="theme-light-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-green.css`]]>[[%custom.label_light_green? &namespace=`custom`]]</option>
	      <option value="theme-light-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-pink.css`]]>[[%custom.label_light_pink? &namespace=`custom`]]</option>
	      <option value="theme-light-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-salmon.css`]]>[[%custom.label_light_salmon? &namespace=`custom`]]</option>
	      <option value="theme-light-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-sea-green.css`]]>[[%custom.label_light_sea_green? &namespace=`custom`]]</option>
	      <option value="theme-light-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-sky-blue.css`]]>[[%custom.label_light_sky_blue? &namespace=`custom`]]</option>
	      <option value="theme-light-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-slate-gray.css`]]>[[%custom.label_light_slate_gray? &namespace=`custom`]]</option>
	      <option value="theme-light-steel-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-steel-blue.css`]]>[[%custom.label_light_steel_blue? &namespace=`custom`]]</option>
	      <option value="theme-light-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-light-yellow.css`]]>[[%custom.label_light_yellow? &namespace=`custom`]]</option>
	      <option value="theme-lime-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-lime-green.css`]]>[[%custom.label_lime_green? &namespace=`custom`]]</option>
	      <option value="theme-lime.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-lime.css`]]>[[%custom.label_lime? &namespace=`custom`]]</option>
	      <option value="theme-linen.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-linen.css`]]>[[%custom.label_linen? &namespace=`custom`]]</option>
	      <option value="theme-magenta-fuchsia.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-magenta-fuchsia.css`]]>[[%custom.label_magenta_fuchsia? &namespace=`custom`]]</option>
	      <option value="theme-maroon.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-maroon.css`]]>[[%custom.label_maroon? &namespace=`custom`]]</option>
	      <option value="theme-medium-aqua-marine.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-aqua-marine.css`]]>[[%custom.label_medium_aqua_marine? &namespace=`custom`]]</option>
	      <option value="theme-medium-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-blue.css`]]>[[%custom.label_medium_blue? &namespace=`custom`]]</option>
	      <option value="theme-medium-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-orchid.css`]]>[[%custom.label_medium_orchid? &namespace=`custom`]]</option>
	      <option value="theme-medium-purple.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-purple.css`]]>[[%custom.label_medium_purple? &namespace=`custom`]]</option>
	      <option value="theme-medium-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-sea-green.css`]]>[[%custom.label_medium_sea_green? &namespace=`custom`]]</option>
	      <option value="theme-medium-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-slate-blue.css`]]>[[%custom.label_medium_slate_blue? &namespace=`custom`]]</option>
	      <option value="theme-medium-spring-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-spring-green.css`]]>[[%custom.label_medium_spring_green? &namespace=`custom`]]</option>
	      <option value="theme-medium-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-turquoise.css`]]>[[%custom.label_medium_turquoise? &namespace=`custom`]]</option>
	      <option value="theme-medium-violet-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-medium-violet-red.css`]]>[[%custom.label_medium_violet_red? &namespace=`custom`]]</option>
	      <option value="theme-midnight-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-midnight-blue.css`]]>[[%custom.label_midnight_blue? &namespace=`custom`]]</option>
	      <option value="theme-mint-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-mint-green.css`]]>[[%custom.label_mint_green? &namespace=`custom`]]</option>
	      <option value="theme-misty-rose.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-misty-rose.css`]]>[[%custom.label_misty_rose? &namespace=`custom`]]</option>
	      <option value="theme-moccasin.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-moccasin.css`]]>[[%custom.label_moccasin? &namespace=`custom`]]</option>
	      <option value="theme-navajo-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-navajo-white.css`]]>[[%custom.label_navajo_white? &namespace=`custom`]]</option>
	      <option value="theme-navy.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-navy.css`]]>[[%custom.label_navy? &namespace=`custom`]]</option>
	      <option value="theme-old-lace.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-old-lace.css`]]>[[%custom.label_old_lace? &namespace=`custom`]]</option>
	      <option value="theme-olive-drab.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-olive-drab.css`]]>[[%custom.label_olive_drab? &namespace=`custom`]]</option>
	      <option value="theme-olive.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-olive.css`]]>[[%custom.label_olive? &namespace=`custom`]]</option>
	      <option value="theme-orange-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-orange-red.css`]]>[[%custom.label_orange_red? &namespace=`custom`]]</option>
	      <option value="theme-orange.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-orange.css`]]>[[%custom.label_orange? &namespace=`custom`]]</option>
	      <option value="theme-orchid.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-orchid.css`]]>[[%custom.label_orchid? &namespace=`custom`]]</option>
	      <option value="theme-pale-golden-rod.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-pale-golden-rod.css`]]>[[%custom.label_pale_golden_rod? &namespace=`custom`]]</option>
	      <option value="theme-pale-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-pale-green.css`]]>[[%custom.label_pale_green? &namespace=`custom`]]</option>
	      <option value="theme-pale-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-pale-turquoise.css`]]>[[%custom.label_pale_turquoise? &namespace=`custom`]]</option>
	      <option value="theme-pale-violet-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-pale-violet-red.css`]]>[[%custom.label_pale_violet_red? &namespace=`custom`]]</option>
	      <option value="theme-papaya-whip.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-papaya-whip.css`]]>[[%custom.label_papaya_whip? &namespace=`custom`]]</option>
	      <option value="theme-peach-puff.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-peach-puff.css`]]>[[%custom.label_peach_puff? &namespace=`custom`]]</option>
	      <option value="theme-peru.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-peru.css`]]>[[%custom.label_peru? &namespace=`custom`]]</option>
	      <option value="theme-pink.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-pink.css`]]>[[%custom.label_pink? &namespace=`custom`]]</option>
	      <option value="theme-plum.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-plum.css`]]>[[%custom.label_plum? &namespace=`custom`]]</option>
	      <option value="theme-powder-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-powder-blue.css`]]>[[%custom.label_powder_blue? &namespace=`custom`]]</option>
	      <option value="theme-purple.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-purple.css`]]>[[%custom.label_purple? &namespace=`custom`]]</option>
	      <option value="theme-red.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-red.css`]]>[[%custom.label_red? &namespace=`custom`]]</option>
	      <option value="theme-rosy-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-rosy-brown.css`]]>[[%custom.label_rosy_brown? &namespace=`custom`]]</option>
	      <option value="theme-royal-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-royal-blue.css`]]>[[%custom.label_royal_blue? &namespace=`custom`]]</option>
	      <option value="theme-saddle-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-saddle-brown.css`]]>[[%custom.label_saddle_brown? &namespace=`custom`]]</option>
	      <option value="theme-salmon.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-salmon.css`]]>[[%custom.label_salmon? &namespace=`custom`]]</option>
	      <option value="theme-sandy-brown.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-sandy-brown.css`]]>[[%custom.label_sandy_brown? &namespace=`custom`]]</option>
	      <option value="theme-sea-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-sea-green.css`]]>[[%custom.label_sea_green? &namespace=`custom`]]</option>
	      <option value="theme-sea-shell.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-sea-shell.css`]]>[[%custom.label_sea_shell? &namespace=`custom`]]</option>
	      <option value="theme-sienna.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-sienna.css`]]>[[%custom.label_sienna? &namespace=`custom`]]</option>
	      <option value="theme-silver.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-silver.css`]]>[[%custom.label_silver? &namespace=`custom`]]</option>
	      <option value="theme-sky-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-sky-blue.css`]]>[[%custom.label_sky_blue? &namespace=`custom`]]</option>
	      <option value="theme-slate-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-slate-blue.css`]]>[[%custom.label_slate_blue? &namespace=`custom`]]</option>
	      <option value="theme-slate-gray.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-slate-gray.css`]]>[[%custom.label_slate_gray? &namespace=`custom`]]</option>
	      <option value="theme-snow.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-snow.css`]]>[[%custom.label_snow? &namespace=`custom`]]</option>
	      <option value="theme-spring-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-spring-green.css`]]>[[%custom.label_spring_green? &namespace=`custom`]]</option>
	      <option value="theme-steel-blue.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-steel-blue.css`]]>[[%custom.label_steel_blue? &namespace=`custom`]]</option>
	      <option value="theme-tan.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-tan.css`]]>[[%custom.label_tan? &namespace=`custom`]]</option>
	      <option value="theme-teal.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-teal.css`]]>[[%custom.label_teal? &namespace=`custom`]]</option>
	      <option value="theme-thistle.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-thistle.css`]]>[[%custom.label_thistle? &namespace=`custom`]]</option>
	      <option value="theme-tomato.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-tomato.css`]]>[[%custom.label_tomato? &namespace=`custom`]]</option>
	      <option value="theme-turquoise.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-turquoise.css`]]>[[%custom.label_turquoise? &namespace=`custom`]]</option>
	      <option value="theme-violet.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-violet.css`]]>[[%custom.label_violet? &namespace=`custom`]]</option>
	      <option value="theme-wheat.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-wheat.css`]]>[[%custom.label_wheat? &namespace=`custom`]]</option>
	      <option value="theme-white-smoke.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-white-smoke.css`]]>[[%custom.label_white_smoke? &namespace=`custom`]]</option>
	      <option value="theme-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-white.css`]]>[[%custom.label_white? &namespace=`custom`]]</option>
	      <option value="theme-yellow-green.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-yellow-green.css`]]>[[%custom.label_yellow_green? &namespace=`custom`]]</option>
	      <option value="theme-yellow.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-yellow.css`]]>[[%custom.label_yellow? &namespace=`custom`]]</option>
	    </select>
    </td><tr>
    <td>
    <label for="SiteBackgroundTV">
        [[%custom.label_choose_background? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SiteBackgroundTV]]</span>
    </label>
    </td><td>
     <select id="SiteBackgroundTV" name="SiteBackgroundTV" disabled="SiteBackgroundTV">
      <option value="background_000.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_000.jpg`]]>000&nbsp;[[%custom.label_default? &namespace=`custom`]]</option>
      <option value="background_001.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>001</option>
      <option value="background_002.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_002.jpg`]]>002</option>
      <option value="background_003.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_003.jpg`]]>003</option>
      <option value="background_004.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_004.jpg`]]>004</option>
      <option value="background_005.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_005.jpg`]]>005</option>
      <option value="background_006.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_006.jpg`]]>006</option>
      <option value="background_007.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_007.jpg`]]>007</option>
      <option value="background_008.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_008.jpg`]]>008</option>
      <option value="background_009.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_009.jpg`]]>009</option>
      <option value="background_010.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_010.jpg`]]>010</option>
      <option value="background_011.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_011.jpg`]]>011</option>
      <option value="background_012.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_012.jpg`]]>012</option>
      <option value="background_013.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_013.jpg`]]>013</option>
      <option value="background_014.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_014.jpg`]]>014</option>
      <option value="background_015.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_015.jpg`]]>015</option>
      <option value="background_016.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_016.jpg`]]>016</option>
     </select>
    </td>
  </tr>
</tbody>
</table>
</form>
                  </div><!-- #edit_site_settings -->
                </div>
		<!-- END  Edit site settings -->
   </div><!-- #page -->
[[$core.FooterTpl]]