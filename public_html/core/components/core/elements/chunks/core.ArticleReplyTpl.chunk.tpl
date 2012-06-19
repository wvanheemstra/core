[[$core.HeaderTpl]]
  <div id="page">
             <!-- START Optional toolbar -->
		<div id="menubar" class="row">
			<div class="three columns">
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
		
		
		<!-- START Content and default sidebar -->
		<div class="row">
			<div class="eight columns">
		
				<div id="content" class="page">

				<!-- START Articles specific -->

    <div class="post-comments" id="comments">
        [[+comments]]
        <br />
        <h5>Reageer op een reactie</h5>

        [[!QuipReply]]

    </div>

				<!-- END Articles specific -->

				</div><!-- #content -->		

		                <!-- START Optional content -->
				[[If? &subject=`[[*LightBoxTV]]` &operator=`notempty` &then=`<p>[[$core.LightBoxTriggerTpl]]</p>`]]
				[[If? &subject=`[[*GalleryTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.GalleryTpl]]`]]
				[[If? &subject=`[[*ContactFormTV]]` &operator=`EQ` &operand=`yes` &then=`[[$core.ContactFormTpl]]`]]
				<!-- END  Optional content -->

		
			</div>
			<div class="four columns">
				[[$core.LatestPostsTpl]]
				[[$core.TwitterFeedTpl]]
				[[$core.SideBarTpl]]
			</div>
                   </div>
		<!-- END Content and default sidebar -->

		<!-- START Optional content boxes -->
		[[switch?
		&get=`[[*NumberOfPageBoxesTV]]`
		&c1=`2`
		&do1=`
		<div class="row">
			<div class="six columns">
				[[$core.PageBox01Tpl]]
			</div>
			<div class="six columns">
				[[$core.PageBox02Tpl]]
			</div>
		</div>`
		&c2=`3`
		&do2=`<div class="row">
			<div class="four columns">
				[[$core.PageBox01Tpl]]
			</div>
			<div class="four columns">
				[[$core.PageBox02Tpl]]
			</div>
			<div class="four columns">
				[[$core.PageBox03Tpl]]
			</div>
		</div>`
		&c3=`4`
		&do3=`<div class="row">
			<div class="three columns">
				[[$core.PageBox01Tpl]]
			</div>
			<div class="three columns">
				[[$core.PageBox02Tpl]]
			</div>
			<div class="three columns">
				[[$core.PageBox03Tpl]]
			</div>
			<div class="three columns">
				[[$core.PageBox04Tpl]]
			</div>
		</div>`
		&default=``]]
		<!-- END  Optional content boxes -->

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