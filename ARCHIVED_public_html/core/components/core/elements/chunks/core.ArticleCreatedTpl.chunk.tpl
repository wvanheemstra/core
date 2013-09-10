[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="three columns">
                        [[$core.CreateArticleButtonTpl]]
			</div>
			<div class="two columns">
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

                <!-- START Create article -->
                <div class="row">
                  <div id="create_article" class="twelve columns">
		[[!Profile]]
		[[!FormItRetriever? 
		&redirectToOnNotFound=`[[++custom.error]]`
		]]
<form class="custom nice" action="">
<table style="width:96%;">
<thead>
  <tr>
    <th><h5>[[%custom.label_article_created? &namespace=`custom`]]:</h5></th>
    <th><h5>[[!Wayfinder? &startId=`[[+fi.parent]]` &rowTpl=`core.ArticleCreatedRowTpl` &ignoreHidden=`1` &limit=`1` &sortBy=`createdon` &sortOrder=`DESC` &where=`{"class_key:=": "Article"}`]]</h5></th>
  </tr>
</thead>
    <input name="publishedon" type="hidden" value="[[+fi.publishedon]]" />
<tbody>
  <tr>
    <td>
    <label for="BreadCrumbTV">
        Toon een brood-kruimel menu bovenaan dit document:
        <span class="alert-box error">[[+fi.error.BreadCrumbTV]]</span>
    </label>
    </td><td>
    <select id="BreadCrumbTV" name="BreadCrumbTV" disabled="disabled">
      <option value="yes" selected>Ja</option>
      <option value="no">Nee</option>
    </select>
    </td>
  </tr><tr>
    <td>
    <label for="parent">
        Artikelen groep:
        <span class="alert-box error">[[+fi.error.parent]]</span>
    </label>
    </td><td>
    <select id="parent" name="parent:required" disabled="disabled">
[[!Wayfinder? &startId=`[[++custom.site_start]]` &startIdContext=`[[++custom.context]]` &ignoreHidden=`1` &where=`{"class_key:=": "ArticlesContainer"}` &rowTpl=`core.CreateArticleParentRowTpl` &parentRowTpl=`core.CreateArticleParentParentRowTpl` &sortBy=`menutitle` &sortOrder=`ASC` &includeDocs=`[[++custom.include_docs_as_article_parent]]`]]
    </select>
    </td>
  </tr><tr>
    <td>     
    <label for="pagetitle">
        Pagina Titel:
        <span class="alert-box error">[[+fi.error.pagetitle]]</span>
    </label>
    </td><td>
    [[+fi.pagetitle]]
    </td>
  </tr><tr>
    <td>     
    <label for="menutitle">
        Menu Titel:
        <span class="alert-box error">[[+fi.error.menutitle]]</span>
    </label>
    </td><td>
     [[+fi.menutitle]]
    </td>
  </tr><tr>
    <td>
    <label for="longtitle">
        Lange Titel:
        <span class="alert-box error">[[+fi.error.longtitle]]</span>
    </label>
    </td><td>
    [[+fi.longtitle]]
    </td>
  </tr><tr>
    <td>
    <label for="description">
        Beschrijving:
        <span class="alert-box error">[[+fi.error.description]]</span>
    </label>
    </td><td>
    [[+fi.description]]
    </td>
  </tr><tr>
    <td>
    <label for="introtext">
        Samenvatting:
        <span class="alert-box error">[[+fi.error.introtext]]</span>
    </label>
    </td><td>
    [[+fi.introtext]]
    </td>
  </tr><tr>
    <td>     
    <label for="content">
        Inhoud:
        <span class="alert-box error">[[+fi.error.content]]</span>
    </label>
    </td><td>
    [[+fi.content:allowTags]]
    </td>
  </tr><tr>
    <td>
    <label for="SideBarTV">
        Toon een zijbalk:
        <span class="alert-box error">[[+fi.error.SideBarTV]]</span>
    </label>
    </td><td>
     <select id="SideBarTV" name="SideBarTV" disabled="disabled">
      <option value="yes" [[!+fi.SideBarTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.SideBarTV:FormItIsSelected=`no`]]>Nee</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="SideContentTV">
        Inhoud van de zijbalk:
        <span class="alert-box error">[[+fi.error.SideContentTV]]</span>
    </label>
    </td><td>
    [[+fi.SideContentTV:allowTags]]
    </td>
  </tr><tr>
    <td>
    <label for="TwitterFeedTV">
        Toon Twitter berichten in zijbalk:
        <span class="alert-box error">[[+fi.error.TwitterFeedTV]]</span>
    </label>
    </td><td>
     <select id="TwitterFeedTV" name="TwitterFeedTV" disabled="disabled">
      <option value="yes" [[!+fi.TwitterFeedTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.TwitterFeedTV:FormItIsSelected=`no`]]>Nee</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="LatestPostsTV">
        Toon lijst van recente artikelen in zijbalk:
        <span class="alert-box error">[[+fi.error.LatestPostsTV]]</span>
    </label>
    </td><td>
     <select id="LatestPostsTV" name="LatestPostsTV" disabled="disabled">
      <option value="yes" [[!+fi.LatestPostsTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.LatestPostsTV:FormItIsSelected=`no`]]>Nee</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="LatestCommentsTV">
        Toon lijst van recente reacties in zijbalk:
        <span class="alert-box error">[[+fi.error.LatestCommentsTV]]</span>
    </label>
    </td><td>
     <select id="LatestCommentsTV" name="LatestCommentsTV" disabled="disabled">
      <option value="yes" [[!+fi.LatestCommentsTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.LatestCommentsTV:FormItIsSelected=`no`]]>Nee</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="NumberOfPageBoxesTV">
        Aantal onderliggende pagina kaders dat getoond moeten worden:
        <span class="alert-box error">[[+fi.error.NumberOfPageBoxesTV]]</span>
    </label>
    </td><td>
    <select id="NumberOfPageBoxesTV" name="NumberOfPageBoxesTV" disabled="disabled">
      <option value="0" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`0`]]>0</option>
      <option value="2" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`2`]]>2</option>
      <option value="3" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`3`]]>3</option>
      <option value="4" [[!+fi.NumberOfPageBoxesTV:FormItIsSelected=`4`]]>4</option>
    </select>
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox01TV">
        Onderliggend pagina kader 1:
        <span class="alert-box error">[[+fi.error.PageBox01TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox01TV:allowTags]]
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox02TV">
        Onderliggend pagina kader 2:
        <span class="alert-box error">[[+fi.error.PageBox02TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox02TV:allowTags]]
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox03TV">
        Onderliggend pagina kader 3:
        <span class="alert-box error">[[+fi.error.PageBox03TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox03TV:allowTags]]
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox04TV">
        Onderliggend pagina kader 4:
        <span class="alert-box error">[[+fi.error.PageBox04TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox04TV:allowTags]]
    </td>
  </tr><tr>
    <td>
    <label for="SubpagesTV">
        Toon menu onderaan dit document:
        <span class="alert-box error">[[+fi.error.SubpagesTV]]</span>
    </label>
    </td><td>
     <select id="SubpagesTV" name="SubpagesTV" disabled="disabled">
      <option value="yes" [[!+fi.SubpagesTV:FormItIsSelected=`yes`]]>Ja</option>
      <option value="no" [[!+fi.SubpagesTV:FormItIsSelected=`no`]]>Nee</option>
     </select>
    </td><tr>
    <td>
    <label for="publishedby">
        Gepubliceerd door:
        <span class="alert-box error">[[+fi.error.publishedby]]</span>
    </label>
    </td><td>
    <select id="publishedby" name="publishedby" disabled="disabled">
      [[!PeopleGroup? &usergroup=`Publishers` &toPlaceholder=`publishers` &userTpl=`core.ArticlePublishedByUserTpl`]]
        [[+publishers]]
    </select>
    <input type="hidden" id="published" name="published" value="[[+fi.published]]"/>
    </td>
</tr><tr>
    <td>
    <label for="deleted">
        Verwijder dit artikel:
        <span class="alert-box error">[[+fi.error.deleted]]</span>
    </label>
    </td><td>
     <select id="deleted" name="deleted" disabled="disabled">
      <option value="0" [[!+fi.deleted:FormItIsSelected=`0`]]>Nee</option>
      <option value="1" [[!+fi.deleted:FormItIsSelected=`1`]]>Ja</option>
     </select>
    </td>
  </tr>
</tbody>
</table>
</form>
                  </div><!-- #create_article -->
                </div>
		<!-- END  Create article -->
   </div><!-- #page -->
[[$core.FooterTpl]]