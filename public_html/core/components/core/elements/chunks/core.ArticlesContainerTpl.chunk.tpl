[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="five columns">
                        [[$core.CreateArticleButtonTpl]]
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

		<!-- START Optional translation -->
		[[switch?
		&get=`[[*TranslationTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			  <div id="translation">
			    [[$core.TranslationTpl]]
			  </div><!-- #translation -->
		</div>
		`&default=``]]
		<!-- END Optional translation -->

		<!-- START Optional slider -->
		[[switch?
		&get=`[[*SliderTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			<div class="twelve columns">
				<div id="slider">
					<!-- Slides for Orbit slider -->
					[[!getImageList? &tvname=`MultiItemsGridTV` &docid=`[[*id]]` &tpl=`core.SliderSlideTpl`]]
				</div><!-- #slider -->
			</div>
		</div>
		`&default=``]]
		<!-- END Optional slider -->

		<!-- START Content and optional lightbox, gallery, contact form, site settings, sidebar, twitter feed, posts and comments -->

		[[switch?
		&get=`[[*SideBarTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			<div id="left-of-sidebar" class="eight columns">`
		&c2=`no`
		&do2=`
		<div class="row">
			<div id="no-sidebar" class="twelve columns">
		`]]

		<div id="content" class="page">
			[[*content]]
		</div><!-- #content -->

		<!-- START optional lightbox, gallery, contact form, site settings -->
		[[If? &subject=`[[*LightBoxTV]]` &operator=`notempty` &then=`<p>[[$core.LightBoxTriggerTpl]]</p>`]]
		[[If? &subject=`[[*GalleryTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.GalleryTpl]]`]]
		[[If? &subject=`[[*ContactFormTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.ContactFormTpl]]`]]
		[[If? &subject=`[[*SiteSettingsTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.SiteSettingsTpl]]`]]
		<!-- END  optional lightbox, gallery, contact form, site settings -->

		[[switch?
		&get=`[[*SideBarTV]]`
		&c1=`yes`
		&do1=`
			</div><!-- #left-of-sidebar -->
			<div id="sidebar" class="four columns" style="max-width:300px;margin-top:14px;padding:0px;">
				[[If? &subject=`[[*TwitterFeedTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.TwitterFeedTpl]]`]]
				[[If? &subject=`[[*LatestPostsTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.LatestPostsTpl]]`]]
				[[If? &subject=`[[*LatestCommentsTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.LatestCommentsTpl]]`]]
				[[$core.SideContentTpl]]
			</div><!-- #sidebar -->
                   </div><!-- #row -->`
		&c2=`no`
		&do2=`
                   </div><!-- #no-sidebar -->
		</div><!-- #row -->
		`]]
		<!-- END Content and optional sidebar and twitter feed -->

		<!-- START Tags and Archives -->
		<div class="row">
		  <div id="tags">[[$core.ArticleTagsTpl]]</div><!-- #tags -->
		  <div id="archives">[[$core.ArticleArchivesTpl]]</div><!-- #archives -->
		</div><!-- #row -->
		<!-- END Tags and Archives -->

		<!-- START Optional page boxes -->
		[[$core.PageBoxesTpl]]
		<!-- END  Optional page boxes -->

		<!-- START Optional subpages -->
		[[switch?
		&get=`[[*SubpagesTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
                        <hr noshade="noshade"/>
			<div id="subpages" class="twelve columns">
                               [[$core.SubpagesTpl]]
			</div><!-- #subpages -->
		</div>
		`&default=``]]
		<!-- END Optional subpages -->

   </div><!-- #page -->
[[$core.FooterTpl]]