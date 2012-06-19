[[$core.HeaderTpl]]
<div id="page">
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

		<!-- START Content and optional sidebar -->
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
				<div id="content" class="page">[[*content]]</div><!--#content-->
				<div id="searchresults">
				[[!SimpleSearch? &ids=`[[++custom.site_start]]` &searchIndex=`core_search_field`]]
				</div><!-- #searchresults -->
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
			</div><!-- #sidebar -->
                   </div><!-- #row -->`
		&c2=`no`
		&do2=`
                   </div><!-- #no-sidebar -->
		</div><!-- #row -->
		`]]
		<!-- END Content and optional sidebar -->
		<!-- START Optional page boxes -->
		[[$core.PageBoxesTpl]]
		<!-- END  Optional page boxes -->
	</div><!--#page -->
<div style="clear:both;"></div>
[[$core.FooterTpl]]