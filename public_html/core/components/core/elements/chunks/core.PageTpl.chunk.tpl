[[$core.HeaderTpl]]
   <div id="page" style="margin-left:10px;margin-right:10px;">
                <!-- START menubar for resource -->
		<div id="menubar" class="row">
			[[$core.ResourceMenuBarTpl]]
		</div>
		<!-- END menubar for resource -->

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
				[[$core.SliderTpl]]
				</div><!-- #slider -->
			</div>
		</div>
		`&default=``]]
		<!-- END Optional slider -->

		<!-- START Optional media -->
		[[switch?
		&get=`[[*MediaTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			<div class="twelve columns">
				<div id="media">
				[[$core.MediaTpl]]
				</div><!-- #media -->
			</div>
		</div>
		`&default=``]]
		<!-- END Optional media -->

		<!-- START Optional polaroids -->
		[[switch?
		&get=`[[*PolaroidsTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			<div class="twelve columns">
				<div id="polaroids">
				[[$core.PolaroidsTpl]]
				</div><!-- #polaroids -->
			</div>
		</div>
		`&default=``]]
		<!-- END Optional polaroids -->

		<!-- START Optional profile -->
		[[switch?
		&get=`[[*ProfilePageTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			  <div id="profile">
			    [[$core.ProfilePageTpl]]
			  </div><!-- #profile -->
		</div>
		`&default=``]]
		<!-- END Optional profile -->

		<!-- START Optional update profile -->
		[[switch?
		&get=`[[*UpdateProfilePageTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			  <div id="update_profile">
			    [[$core.UpdateProfilePageTpl]]
			  </div><!-- #update_profile -->
		</div>
		`&default=``]]
		<!-- END Optional update profile -->

		<!-- START Optional update profile picture -->
		[[switch?
		&get=`[[*UpdateProfilePictureTV]]`
		&c1=`yes`
		&do1=`
		<div class="row">
			  <div id="update_profile_picture">
			    [[$core.UpdateProfilePictureTpl]]
			  </div><!-- #update_profile_picture -->
		</div>
		`&default=``]]
		<!-- END Optional update profile picture -->

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
			<div id="sidebar" class="four columns">
				[[If? &subject=`[[*ModalTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.ModalLinkTpl]]`]]
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