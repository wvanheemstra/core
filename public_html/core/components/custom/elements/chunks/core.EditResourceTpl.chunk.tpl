[[$core.HeaderTpl]]
   <div id="page">
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

                <!-- START Edit resource -->
                <div class="row">
                  <div id="edit_resource">
		[[!Profile]]

		[[!FormItRetriever]]

		[[!FormIt? 
		&hooks=`spam,formit2resource,redirect` 
		&preHooks=`resource2formit`
		&redirectTo=`[[++custom.resource_edited]]`
		&store=`1`
		&validate=`colors:required,content:allowTags:escape,SideContentTV:allowTags:escape,PageBox01TV:allowTags:escape,PageBox02TV:allowTags:escape,PageBox03TV:allowTags:escape,PageBox04TV:allowTags:escape`
		&template=`[[++custom.page_template]]`
		&clearFieldsOnSuccess=`0`
		&resource2formitfields=`BreadCrumbTV,parent,page title,menutitle,longtitle,description,introtext,colors,content,SideBarTV,SideContentTV,TwitterFeedTV,LatestPostsTV,LatestCommentsTV,NumberOfPageBoxesTV,PageBox01TV,PageBox02TV,PageBox03TV,PageBox04TV,SubpagesTV,published,isfolder,deleted`
		&successMessage=`[[%custom.label_resource_edited? &namespace=`custom`]].`
		&successMessagePlaceholder=`fi.successMessage`
		]]

		[[!+fi.error_message:notempty=`<div class="alert-box error">[[!+fi.error_message]]</div>`]]
		[[!+fi.successMessage:notempty=`<div class="alert-box success">[[!+fi.successMessage]]</div>`]]

<p>[[+fi.error.error_message]]</p>
<form id="edit_resource_form" class="form custom nice" action="[[~[[*id]]]]" method="post">

    <h5>[[%custom.label_edit_resource? &namespace=`custom`]]: <a href="[[+fi.url]]">[[+fi.pagetitle]]</a></h5>
    <input name="nospam:blank" type="hidden" />
    <input name="resource_id" type="hidden" value="[[+fi.id]]" />
    <input name="published" type="hidden" value="1" />
    <input name="isfolder" type="hidden" value="1" />
    <p></p>

<div class="panel">
<table style="width:96%">
	<tbody>
		<tr>
		<td>
    <label for="BreadCrumbTV">
        Toon een brood-kruimel menu bovenaan dit document: 
        <span class="alert-box error">[[!+fi.error.BreadCrumbTV]]</span>
    </label>
		</td>
		<td>
    <select id="BreadCrumbTV" name="BreadCrumbTV:required">
      <option value="yes" [[!+fi.BreadCrumbTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.BreadCrumbTV:FormItIsSelected=`no`]] disabled>Nee</option>
    </select> 
		</td>
		</tr><tr>
		<td>
    <label for="parent">
        Bovenliggend document:
        <span class="alert-box error">[[!+fi.error.parent]]</span>
    </label>
		</td>
		<td>
    <select id="parent" name="parent:required">
    <option value="[[++custom.site_start]]" [[!+fi.parent:FormItIsSelected=`[[++custom.site_start]]`]]>START</option>
[[!Wayfinder? &startId=`[[++custom.site_start]]` &startIdContext=`[[++custom.context]]`  &rowTpl=`core.EditResourceParentRowTpl` &parentRowTpl=`core.EditResourceParentParentRowTpl` &sortBy=`menutitle` &sortOrder=`ASC` &excludeDocs=`[[++custom.exclude_docs_as_resource_parent]]`]]
    </select>
		</td>
		</tr>
	</tbody>
</table>
</div>

<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>     
    <label for="pagetitle">
        Pagina Titel*:
        <span class="alert-box error">[[!+fi.error.pagetitle]]</span>
    </label>
		</td>
		<td>
    <input id="pagetitle" name="pagetitle:required" class="large oversize input-text" type="text" value="[[+fi.pagetitle]]" />
		</td>
		</tr><tr>
		<td>
    <label for="menutitle">
        Menu Titel*:
        <span class="alert-box error">[[!+fi.error.menutitle]]</span>
    </label>
		</td>
		<td>
    <input id="menutitle" name="menutitle:required" class="input-text" type="text" value="[[+fi.menutitle]]" />
		</td>
		</tr><tr>
		<td>
    <label for="longtitle">
        Lange Titel:
        <span class="alert-box error">[[!+fi.error.longtitle]]</span>
    </label>
		</td>
		<td>
    <input id="longtitle" name="longtitle" class="expand input-text" type="text" value="[[+fi.longtitle]]" />
		</td>
		</tr><tr>
		<td>
    <label for="description">
        Beschrijving:
        <span class="alert-box error">[[!+fi.error.description]]</span>
    </label>
		</td>
		<td>
    <textarea id="description" cols="55" rows="3" name="description:stripTags">[[+fi.description]]</textarea>
		</td>
		</tr><tr>
		<td>
    <label for="introtext">
        Samenvatting:
        <span class="alert-box error">[[!+fi.error.introtext]]</span>
    </label>
		</td>
		<td>
    <textarea id="introtext" cols="55" rows="3" name="introtext:stripTags">[[+fi.introtext]]</textarea>
		</td>
		</tr><tr>
		<td colspan="2">
		<hr />
		<label for="note">* deze velden zijn noodzakelijk.</label>
		</td>
		</tr>
	</tbody>
</table>
</div>
    <!-- NOTE: alias is auto-generated on the server, therefor not supplied here -->
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>     
    <label for="content">
        Inhoud:
        <span class="alert-box error">[[!+fi.error.content]]</span>
    </label>
    <textarea id="content" cols="80" rows="14" name="content">[[!+fi.content:allowTags:escape]]</textarea><p></p>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="SideBarTV">
        Toon een zijbalk: 
        <span class="alert-box error">[[!+fi.error.SideBarTV]]</span>
    </label>
		</td>
		<td>
    <select id="SideBarTV" name="SideBarTV">
      <option value="yes" [[!+fi.SideBarTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.SideBarTV:FormItIsSelected=`no`]]>Nee</option>
    </select>
		</td>
		</tr><tr>
		<td colspan="2">
    <label for="SideContentTV">
        Inhoud van de zijbalk:
        <span class="alert-box error">[[!+fi.error.SideContentTV]]</span>
    </label>
    <textarea id="SideContentTV" cols="80" rows="14" name="SideContentTV">[[!+fi.SideContentTV:allowTags:escape]]</textarea><p></p>
		</td>
		</tr><tr>
		<td>
    <label for="TwitterFeedTV">
        Toon recente Twitter berichten in zijbalk: 
        <span class="alert-box error">[[!+fi.error.TwitterFeedTV]]</span>
    </label>
		</td>
		<td>
    <select id="TwitterFeedTV" name="TwitterFeedTV">
      <option value="yes" [[!+fi.TwitterFeedTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.TwitterFeedTV:FormItIsSelected=`no`]]>Nee</option>
    </select>
		</td>
		</tr><tr>
		<td>
    <label for="LatestPostsTV">
        Toon lijst van recente artikelen in zijbalk: 
        <span class="alert-box error">[[!+fi.error.LatestPostsTV]]</span>
    </label>
		</td>
		<td>
    <select id="LatestPostsTV" name="LatestPostsTV">
      <option value="yes" [[!+fi.LatestPostsTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.LatestPostsTV:FormItIsSelected=`no`]]>Nee</option>
    </select>
		</td>
		</tr><tr>
		<td>
    <label for="LatestCommentsTV">
        Toon lijst van recente reacties in zijbalk:
        <span class="alert-box error">[[!+fi.error.LatestCommentsTV]]</span>
    </label>
		</td>
		<td>
    <select id="LatestCommentsTV" name="LatestCommentsTV">
      <option value="yes" [[!+fi.LatestCommentsTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.LatestCommentsTV:FormItIsSelected=`no`]]>Nee</option>
    </select>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="NumberOfPageBoxesTV">
        Aantal onderliggende pagina kaders dat getoond moeten worden:
        <span class="alert-box error">[[!+fi.error.NumberOfPageBoxesTV]]</span>
    </label>
		</td>
		<td>
    <select id="NumberOfPageBoxesTV" name="NumberOfPageBoxesTV">
      <option value="0" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`0`]]>0</option>
      <option value="2" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`2`]]>2</option>
      <option value="3" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`3`]]>3</option>
      <option value="4" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`4`]]>4</option>
    </select>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="PageBox01TV">
        Onderliggend pagina kader 1:
        <span class="alert-box error">[[!+fi.error.PageBox01TV]]</span>
    </label>
    <textarea id="PageBox01TV" cols="80" rows="14" name="PageBox01TV">[[+fi.PageBox01TV:allowTags:escape]]</textarea><p></p>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="PageBox02TV">
        Onderliggend pagina kader 2:
        <span class="alert-box error">[[!+fi.error.PageBox02TV]]</span>
    </label>
    <textarea id="PageBox02TV" cols="80" rows="14" name="PageBox02TV">[[+fi.PageBox02TV:allowTags:escape]]</textarea><p></p>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="PageBox03TV">
        Onderliggend pagina kader 3:
        <span class="alert-box error">[[!+fi.error.PageBox03TV]]</span>
    </label>
    <textarea id="PageBox03TV" cols="80" rows="14" name="PageBox03TV">[[+fi.PageBox03TV:allowTags:escape]]</textarea><p></p>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="PageBox04TV">
        Onderliggend pagina kader 4:
        <span class="alert-box error">[[!+fi.error.PageBox04TV]]</span>
    </label>
    <textarea id="PageBox04TV" cols="80" rows="14" name="PageBox04TV">[[+fi.PageBox04TV:allowTags:escape]]</textarea><p></p>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:100%">
	<tbody>
		<tr>
		<td>
    <label for="SubpagesTV">
        Toon menu onderaan dit document: 
        <span class="alert-box error">[[!+fi.error.SubpagesTV]]</span>
    </label>
		</td>
		<td>
    <select id="SubpagesTV" name="SubpagesTV">
      <option value="yes" [[!+fi.SubpagesTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.SubpagesTV:FormItIsSelected=`no`]]>Nee</option>
    </select>
		</td>
		</tr><tr>
		<td>
    <label for="deleted">
        Verwijder dit document:
        <span class="alert-box error">[[!+fi.error.deleted]]</span>
    </label>
		</td>
		<td>
    <select id="deleted" name="deleted">
      <option value="0" [[!+fi.deleted:FormItIsSelected=`0`]]>Nee</option>
      <option value="1" [[!+fi.deleted:FormItIsSelected=`1`]]>Ja</option>
    </select> 
		</td>
		</tr>
	</tbody>
</table>
</div>

<br class="clear" />
    <div class="form-buttons">
        <input class="nice small white button" type="submit" value="[[%custom.label_edit_resource? &namespace=`custom`]]" />
    </div>
</form>
                  </div><!-- #edit_resource -->
                </div>
		<!-- END  Edit resource -->
   </div><!-- #page -->

   [[$core.TinyMCEScriptTpl]]
   <script type="text/javascript" >
      $('edit_resource_form').bind('form-pre-serialize', function(e) {
          tinyMCE.triggerSave();
      });
   </script >
[[$core.FooterTpl]]