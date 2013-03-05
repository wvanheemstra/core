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

                <!-- START Edit resource -->
                <div class="row">
                  <div id="edit_resource" class="twelve columns">
		[[!Profile]]
		[[!FormItRetriever? 
		&redirectToOnNotFound=`[[++custom.error]]`
		]]
<form class="custom nice" action="">
<table style="width:96%;">
<thead>
  <tr>
[[!If?
  &subject=`[[+fi.deleted]]`
  &operator=`equal`
  &operand=`1`
  &then=`<th><h5>[[%custom.label_resource_removed? &namespace=`custom`]]:</h5></th><th><h5 style="color:red;">[[+fi.pagetitle]]</h5></th>`
  &else=`<th><h5>[[%custom.label_resource_edited? &namespace=`custom`]]:</h5></th><th><h5>[[!getResources? &resources=`[[+fi.resource_id]]` &tpl=`core.ResourceEditedRowTpl`]]</h5></th>`
]]
  </tr>
</thead>
<tbody>
  <tr>
    <td>
    <label for="BreadCrumbTV">
        [[%custom.label_show_breadcrumb_menu? &namespace=`custom`]]: 
        <span class="alert-box error">[[+fi.error.BreadCrumbTV]]</span>
    </label>
    </td><td>
    <select id="BreadCrumbTV" name="BreadCrumbTV" disabled="disabled">
      <option value="yes" selected>[[%custom.label_yes? &namespace=`custom`]]</option>
      <option value="no">[[%custom.label_no? &namespace=`custom`]]</option>
    </select>
    </td>
  </tr><tr>
    <td>
    <label for="parent">
        Bovenliggend document ID:
        [[%custom.label_parent_document? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.parent]]</span>
    </label>
    </td><td>
    [[+fi.parent]]   
    </td>
  </tr><tr>
    <td>     
    <label for="pagetitle">
        [[%custom.label_page_title? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.pagetitle]]</span>
    </label>
    </td><td>
    [[+fi.pagetitle]]
    </td>
  </tr><tr>
    <td>     
    <label for="menutitle">
        [[%custom.label_menu_title? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.menutitle]]</span>
    </label>
    </td><td>
     [[+fi.menutitle]]
    </td>
  </tr><tr>
    <td>
    <label for="longtitle">
        [[%custom.label_long_title? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.longtitle]]</span>
    </label>
    </td><td>
    [[+fi.longtitle]]
    </td>
  </tr><tr>
    <td>
    <label for="description">
        [[%custom.label_description? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.description]]</span>
    </label>
    </td><td>
    [[+fi.description]]
    </td>
  </tr><tr>
    <td>
    <label for="introtext">
        [[%custom.label_introtext? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.introtext]]</span>
    </label>
    </td><td>
    [[+fi.introtext]]
    </td>
  </tr><tr>
    <td>     
    <label for="content">
        [[%custom.label_content? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.content]]</span>
    </label>
    </td><td>
    [[+fi.content:allowTags]]
    </td>
  </tr><tr>
    <td>
    <label for="SideBarTV">
        [[%custom.label_show_sidebar? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SideBarTV]]</span>
    </label>
    </td><td>
     <select id="SideBarTV" name="SideBarTV" disabled="disabled">
      <option value="yes" [[!+fi.SideBarTV:FormItIsSelected=`yes`]]>[[%custom.label_yes? &namespace=`custom`]]</option>
      <option value="no" [[!+fi.SideBarTV:FormItIsSelected=`no`]]>[[%custom.label_no? &namespace=`custom`]]</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="SideContentTV">
        [[%custom.label_content_of_sidebar? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SideContentTV]]</span>
    </label>
    </td><td>
    [[+fi.SideContentTV:allowTags]]
    </td>
  </tr><tr>
    <td>
    <label for="TwitterFeedTV">
        [[%custom.label_show_recent_tweets_in_sidebar? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.TwitterFeedTV]]</span>
    </label>
    </td><td>
     <select id="TwitterFeedTV" name="TwitterFeedTV" disabled="disabled">
      <option value="yes" [[!+fi.TwitterFeedTV:FormItIsSelected=`yes`]]>[[%custom.label_yes? &namespace=`custom`]]</option>
      <option value="no" [[!+fi.TwitterFeedTV:FormItIsSelected=`no`]]>[[%custom.label_no? &namespace=`custom`]]</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="LatestPostsTV">
        [[%custom.label_show_list_of_recent_articles_in_sidebar? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.LatestPostsTV]]</span>
    </label>
    </td><td>
     <select id="LatestPostsTV" name="LatestPostsTV" disabled="disabled">
      <option value="yes" [[!+fi.LatestPostsTV:FormItIsSelected=`yes`]]>[[%custom.label_yes? &namespace=`custom`]]</option>
      <option value="no" [[!+fi.LatestPostsTV:FormItIsSelected=`no`]]>[[%custom.label_no? &namespace=`custom`]]</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="LatestCommentsTV">
        [[%custom.label_show_list_of_recent_comments_in_sidebar? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.LatestCommentsTV]]</span>
    </label>
    </td><td>
     <select id="LatestCommentsTV" name="LatestCommentsTV" disabled="disabled">
      <option value="yes" [[!+fi.LatestCommentsTV:FormItIsSelected=`yes`]]>[[%custom.label_yes? &namespace=`custom`]]</option>
      <option value="no" [[!+fi.LatestCommentsTV:FormItIsSelected=`no`]]>[[%custom.label_no? &namespace=`custom`]]</option>
     </select>
    </td>
  </tr><tr>
    <td>
    <label for="NumberOfPageBoxesTV">
        [[%custom.label_number_of_pageboxes_to_show? &namespace=`custom`]]:
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
        [[%custom.label_pagebox_1? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.PageBox01TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox01TV:allowTags]]
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox02TV">
        [[%custom.label_pagebox_2? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.PageBox02TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox02TV:allowTags]]
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox03TV">
        [[%custom.label_pagebox_3? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.PageBox03TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox03TV:allowTags]]
    </td>
  </tr><tr>
    <td>     
    <label for="PageBox04TV">
        [[%custom.label_pagebox_4? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.PageBox04TV]]</span>
    </label>
    </td><td>
    [[+fi.PageBox04TV:allowTags]]
    </td>
  </tr><tr>
    <td>
    <label for="SubpagesTV">
        [[%custom.label_show_subpages? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.SubpagesTV]]</span>
    </label>
    </td><td>
     <select id="SubpagesTV" name="SubpagesTV" disabled="disabled">
      <option value="yes" [[!+fi.SubpagesTV:FormItIsSelected=`yes`]]>[[%custom.label_yes? &namespace=`custom`]]</option>
      <option value="no" [[!+fi.SubpagesTV:FormItIsSelected=`no`]]>[[%custom.label_no? &namespace=`custom`]]</option>
     </select>
    </td><tr>
    <td>
    <label for="deleted">
        [[%custom.label_remove_this_document? &namespace=`custom`]]:
        <span class="alert-box error">[[+fi.error.deleted]]</span>
    </label>
    </td><td>
     <select id="deleted" name="deleted" disabled="disabled">
      <option value="0" [[!+fi.deleted:FormItIsSelected=`0`]]>[[%custom.label_no? &namespace=`custom`]]</option>
      <option value="1" [[!+fi.deleted:FormItIsSelected=`1`]]>[[%custom.label_yes? &namespace=`custom`]]</option>
     </select>
    </td>
  </tr>
</tbody>
</table>
</form>
                  </div><!-- #edit_resource -->
                </div>
		<!-- END  Edit resource -->
   </div><!-- #page -->
[[$core.FooterTpl]]