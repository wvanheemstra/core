[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="five columns">
			</div>
			<div class="two columns" style="color:#ffffff">[[$core.UserNameTpl]]</div>
			<div class="five columns" style="text-align:right;">
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
                  <div id="edit_site_settings">
		[[!Profile]]

		[[!FormItRetriever]]

		[[!FormIt? 
		&hooks=`spam,formit2resource,redirect` 
		&preHooks=`resource2formit`
		&redirectTo=`[[++custom.site_settings_edited]]`
		&store=`1`
		&validate=``
		&template=`[[++custom.page_template]]`
		&clearFieldsOnSuccess=`0`
		&resource2formitfields=`SiteThemeCSSTV,SiteBackgroundTV`
		&successMessage=`[[%custom.label_site_settings_edited? &namespace=`custom`]].`
		&successMessagePlaceholder=`fi.successMessage`
		]]

		[[!+fi.error_message:notempty=`<div class="alert-box error">[[!+fi.error_message]]</div>`]]
		[[!+fi.successMessage:notempty=`<div class="alert-box success">[[!+fi.successMessage]]</div>`]]

<p>[[+fi.error.error_message]]</p>
<form id="edit_site_settings_form" class="form custom nice" action="[[~[[*id]]]]" method="post">

    <h5>[[%custom.label_edit_site_settings? &namespace=`custom`]]: <a href="[[+fi.url]]">[[+fi.pagetitle]]</a></h5>
    <input name="nospam:blank" type="hidden" />
    <input name="resource_id" type="hidden" value="[[+fi.id]]" />
    <input name="published" type="hidden" value="1" />
    <input name="isfolder" type="hidden" value="1" />
    <p></p>

<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="SiteThemeCSSTV">
        [[%custom.label_choose_theme? &namespace=`custom`]]:
        <span class="alert-box error">[[!+fi.error.SiteThemeCSSTV]]</span>
    </label>
		</td>
		<td>
    <select id="SiteThemeCSSTV" name="SiteThemeCSSTV">
      <option value="theme-default.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-default.css`]]>[[%custom.label_default? &namespace=`custom`]]</option>
      <option value="theme-antique-white.css" [[!+fi.SiteThemeCSSTV:FormItIsSelected=`theme-antique-white.css`]]>[[%custom.label_antique_white? &namespace=`custom`]]</option>
    </select>
		</td>
		</tr><tr>
		<td>
    <label for="SiteBackgroundTV">
        [[%custom.label_choose_background? &namespace=`custom`]]:
        <span class="alert-box error">[[!+fi.error.SiteBackgroundTV]]</span>
    </label>
		</td>
		<td>
    <select id="SiteBackgroundTV" name="SiteBackgroundTV">
      <option value="background_000.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_000.jpg`]]>000</option>
      <option value="background_001.jpg" [[!+fi.SiteBackgroundTV:FormItIsSelected=`background_001.jpg`]]>001</option>
    </select> 
		</td>
		</tr>
	</tbody>
</table>
</div>

<br class="clear" />
    <div class="form-buttons">
        <input class="nice small white button" type="submit" value="[[%custom.label_edit_site_settings? &namespace=`custom`]]" />
    </div>
</form>
                  </div><!-- #edit_site_settings -->
                </div>
		<!-- END  Edit site settings -->
   </div><!-- #page -->

   [[$core.TinyMCEScriptTpl]]
   <script type="text/javascript" >
      $('edit_site_settings_form').bind('form-pre-serialize', function(e) {
          tinyMCE.triggerSave();
      });
   </script >
[[$core.FooterTpl]]