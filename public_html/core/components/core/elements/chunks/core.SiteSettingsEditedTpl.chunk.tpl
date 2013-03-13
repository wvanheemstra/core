[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="five columns">
                        [[$core.CreateResourceButtonTpl]]
			</div>
			<div class="two columns" style="color:#ffffff">[[$core.UserNameTpl]]</div>
			<div class="two columns" style="text-align:right;">
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
<table style="width:96%;">
<thead>
  <tr>
<th><h5>[[%custom.label_site_settings_edited? &namespace=`custom`]]:</h5></th><th><h5>[[!getResources? &resources=`[[+fi.resource_id]]` &tpl=`core.SiteSettingsEditedRowTpl`]]</h5></th>
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
     <select id="SiteThemeCSSTV" name="SiteThemeCSSTV" disabled="disabled">
      <option value="theme-default.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-default.css`]]>[[%custom.label_default? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
     </select>
    </td><tr>
    <td>
    <label for="SiteBackgroundTV">
        [[%custom.label_choose_background? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SiteBackgroundTV]]</span>
    </label>
    </td><td>
     <select id="SiteBackgroundTV" name="SiteBackgroundTV" disabled="SiteBackgroundTV">
      <option value="background_000.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_000.jpg`]]>000</option>
      <option value="background_001.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>001</option>
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