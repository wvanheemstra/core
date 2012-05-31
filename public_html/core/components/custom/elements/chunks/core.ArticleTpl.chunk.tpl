[[$core.HeaderTpl]]
  <div id="page">
		<!-- START menubar for article -->
		<div id="menubar" class="row">
                       	[[$core.ArticleMenuBarTpl]]
		</div>
		<!-- END menubar for article -->

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

		<!-- START optional media -->
		[[If? &subject=`[[*MediaTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.MediaTpl]]`]]
		<!-- END optional media -->

		<div id="content" class="page">

				<!-- START Articles specific -->

    <h5 class="title"><a href="[[~[[*id]]]]">[[*pagetitle]]</a></h5>
    <p class="post-info">
        <span class="left">Gepubliceerd op [[*publishedon:strtotime:date=`%d %B %Y`]] door <a href="[[~[[*parent]]]]author/[[*publishedby:userinfo=`username`]]">[[*publishedby:userinfo=`username`]]</a></span>
[[*articlestags:notempty=`
        <span class="tags left">&nbsp;| Tags: [[+article_tags]]</span>
`]]
        [[+comments_enabled:is=`1`:then=`&nbsp;| <a href="[[~[[*id]]]]#comments" class="comments">Reacties ([[+comments_count]])</a>`]]
    </p>
    <div class="entry">
        <p>[[*introtext]]</p>
        <hr />
        [[*content]]
    </div>

    <hr />

    <div class="post-comments" id="comments">
        [[+comments]]
        <br />
        <h5>Voeg een reactie toe</h5>
        [[+comments_form]]
    </div>


				<!-- END Articles specific -->

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
			<div id="sidebar" class="four columns">
				[[If? &subject=`[[*TwitterFeedTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.TwitterFeedTpl]]`]]
				[[If? &subject=`[[*LatestPostsTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.LatestPostsTpl]]`]]
				[[If? &subject=`[[*LatestCommentsTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.LatestCommentsTpl]]`]]
				[[$core.SideContentTpl]]
				[[$core.SocialMediaLinksInSideBarTpl]]
			</div><!-- #sidebar -->
                   </div><!-- #row -->`
		&c2=`no`
		&do2=`
                   </div><!-- #no-sidebar -->
		</div><!-- #row -->
		`]]
		<!-- END Content and optional sidebar, twitter feed, posts and comments -->

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