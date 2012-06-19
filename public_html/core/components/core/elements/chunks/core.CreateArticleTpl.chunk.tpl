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

                <!-- START Create article -->
                <div class="row">
                  <div id="create_article">
		[[!Profile]]
		[[!FormIt? 
		&hooks=`spam,formit2resource,email,redirect` 
		&preHooks=`resource2formit`
		&redirectTo=`[[++custom.article_created]]`
		&store=`1`
		&validate=`content:allowTags:escape,SideContentTV:allowTags:escape,PageBox01TV:allowTags:escape,PageBox02TV:allowTags:escape,PageBox03TV:allowTags:escape,PageBox04TV:allowTags:escape`
		&template=`[[++custom.article_template]]`
		&clearFieldsOnSuccess=`1`
		&resource2formitfields=`BreadCrumbTV,parent,pagetitle,menutitle,longtitle,description,introtext,content,SideBarTV,SideContentTV,TwitterFeedTV,LatestPostsTV,LatestCommentsTV,NumberOfPageBoxesTV,PageBox01TV,PageBox02TV,PageBox03TV,PageBox04TV,SubpagesTV,published,isfolder,class_key,hidemenu,uri_override,properties,show_in_tree,createdon,createdby,publishedon,publishedby,pub_date`
		&successMessage=`[[%custom.label_article_created? &namespace=`custom`]].<br/>[[%custom.label_confirmation_emailed_to? &namespace=`custom`]]&nbsp;[[+email]]`
		&successMessagePlaceholder=`fi.successMessage`
		&emailSubject=`[[++site_name]] | [[%custom.label_article_created? &namespace=`custom`]]: [[+pagetitle]]`
		&emailTpl=`core.CreateArticleEmailMessageTpl`
		&emailTo=`[[+email]]`
		&emailToName=`[[+fullname]]`
		&emailFrom=`[[+email]]`
		&emailFromName=`[[+username]]`
		]]

		[[!+fi.error_message:notempty=`<div class="alert-box error">[[!+fi.error_message]]</div>`]]
		[[!+fi.successMessage:notempty=`<div class="alert-box success">[[!+fi.successMessage]]</div>`]]

<h5>[[%custom.label_create_article? &namespace=`custom`]]</h5>
<p>[[+fi.error.error_message]]</p>
<form id="create_article_form" class="form custom nice" action="[[~[[*id]]]]" method="post">
    <input name="class_key" type="hidden" value="Article" />
    <input name="hidemenu" type="hidden" value="1" />
    <input name="uri_override" type="hidden" value="1" />
    <input name="show_in_tree" type="hidden" value="0" />
    <input name="properties" type="hidden" value="" />
    <input type="hidden" id="isfolder" name="isfolder" value="0"/>
    <input name="nospam:blank" type="hidden" />
    <input name="resource_id" type="hidden" value="[[+fi.id]]" />
    <!-- set the browsers local date & time as publish date & time /-->
    <script type="text/javascript">
    var ts = Math.round((new Date()).getTime() / 1000);
document.write("<input type='hidden' name='publishedon' id='publishedon' value='" + ts + "' />");
    </script>
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
        Artikelen Groep:
        <span class="alert-box error">[[!+fi.error.parent]]</span>
    </label>
		</td>
		<td>
    <select id="parent" name="parent:required">
[[!Wayfinder? &startId=`[[++custom.site_start]]` &startIdContext=`[[++custom.context]]` &ignoreHidden=`1` &where=`{"class_key:=": "ArticlesContainer"}` &rowTpl=`core.CreateArticleParentRowTpl` &parentRowTpl=`core.CreateArticleParentParentRowTpl` &sortBy=`menutitle` &sortOrder=`ASC` &includeDocs=`[[++custom.include_docs_as_article_parent]]`]]
    </select>
		</td>
		</tr>
	</tbody>
</table>
</div>     
<div class="panel">
<table style="width:96%">
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
    <label for="note">
        * deze velden zijn noodzakelijk.
    </label>
		</td>
		</tr>
	</tbody>
</table>
</div>
    <!-- NOTE: alias is auto-generated on the server, therefor not supplied here -->
<div class="panel">
<table style="width:96%">
	<tbody>
		<tr>
		<td>     
    <label for="content">
        Inhoud:
        <span class="alert-box error">[[!+fi.error.content]]</span>
    </label><br />
    <textarea id="content" cols="80" rows="14" name="content">[[!+fi.content:allowTags]]</textarea>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:96%">
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
    </label><br />
    <textarea id="SideContentTV" cols="80" rows="14" name="SideContentTV">[[!+fi.SideContentTV]]</textarea>
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
<table style="width:96%">
	<tbody>
		<tr>
		<td> 
    <label for="NumberOfPageBoxesTV">
        Aantal onderliggende pagina kaders:
        <span class="alert-box error">[[!+fi.error.NumberOfPageBoxesTV]]</span>
    </label>
		</td>
		<td>
    <select id="NumberOfPageBoxesTV" name="NumberOfPageBoxesTV">
      <option value="0">0</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:96%">
	<tbody>
		<tr>
		<td> 
    <label for="PageBox01TV">
        Onderliggend pagina kader 1:
        <span class="alert-box error">[[!+fi.error.PageBox01TV]]</span>
    </label><br />
    <textarea id="PageBox01TV" cols="80" rows="14" name="PageBox01TV">[[+fi.PageBox01TV:allowTags]]</textarea>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:96%">
	<tbody>
		<tr>
		<td> 
    <label for="PageBox02TV">
        Onderliggend pagina kader 2:
        <span class="alert-box error">[[!+fi.error.PageBox02TV]]</span>
    </label><br />
    <textarea id="PageBox02TV" cols="80" rows="14" name="PageBox02TV">[[+fi.PageBox02TV:allowTags]]</textarea>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:96%">
	<tbody>
		<tr>
		<td> 
    <label for="PageBox03TV">
        Onderliggend pagina kader 3:
        <span class="alert-box error">[[!+fi.error.PageBox03TV]]</span>
    </label><br />
    <textarea id="PageBox03TV" cols="80" rows="14" name="PageBox03TV">[[+fi.PageBox03TV:allowTags]]</textarea>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:96%">
	<tbody>
		<tr>
		<td> 
    <label for="PageBox04TV">
        Onderliggend pagina kader 4:
        <span class="alert-box error">[[!+fi.error.PageBox04TV]]</span>
    </label><br />
    <textarea id="PageBox04TV" cols="80" rows="14" name="PageBox04TV">[[+fi.PageBox04TV:allowTags]]</textarea>
		</td>
		</tr>
	</tbody>
</table>
</div>
<div class="panel">
<table style="width:96%">
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
    <label for="publishedby">
        Gepubliceerd door:
        <span class="alert-box error">[[!+fi.error.publishedby]]</span>
    </label>
		</td>
		<td>
    <select id="publishedby" name="publishedby">
      [[!PeopleGroup? &usergroup=`Publishers` &toPlaceholder=`publishers` &userTpl=`core.ArticlePublishedByUserTpl`]]
        [[+publishers]]
    </select>
    <!-- set published to 1, so the article always published -->
    <input type="hidden" id="published" name="published" value="1" checked/>
		</td>
		</tr><tr>
		<td>
    <label for="deleted">
        Verwijder dit artikel:
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
        <input class="nice small white button" type="submit" value="[[%custom.label_create_article? &namespace=`custom`]]" />
    </div>
</form>
                  </div><!-- #create_article -->
                </div>
		<!-- END  Create article -->
   </div><!-- #page -->

   [[$core.TinyMCEScriptTpl]]
   <script type="text/javascript" >
      $('create_article_form').bind('form-pre-serialize', function(e) {
          tinyMCE.triggerSave();
      });
   </script >
[[$core.FooterTpl]]