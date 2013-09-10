<!-- START Footer content boxes -->
<div id="footer" style="margin-top:10px;">
		[[switch?
		&get=`[[getResources? &resources =`[[++custom.site_settings]]` &tpl=`core.NumberOfFooterBoxesTpl` &includeTVs=`1` &processTVs=`1` &tvPrefix=`` &parents=`-1`]]`
		&c1=`2` &do1=`
		<div class="row"><div class="twelve columns">[[$core.FooterColumnCaptionTpl]]</div></div>
		<div class="row">
			<div class="six columns">
				[[$core.FooterColumn01Tpl]]
			</div>
			<div class="six columns">
				[[$core.FooterColumn02Tpl]]
			</div>
		</div>`
		&c2=`3` &do2=`
		<div class="row"><div class="twelve columns">[[$core.FooterColumnCaptionTpl]]</div></div>
		<div class="row">
			<div class="four columns">
				[[$core.FooterColumn01Tpl]]
			</div>
			<div class="four columns">
				[[$core.FooterColumn02Tpl]]
			</div>
			<div class="four columns">
				[[$core.FooterColumn03Tpl]]
			</div>
		</div>`
		&c3=`4` &do3=`
		<div class="row"><div class="twelve columns">[[$core.FooterColumnCaptionTpl]]</div></div>
		<div class="row">
			<div class="three columns">
				[[$core.FooterColumn01Tpl]]
			</div>
			<div class="three columns">
				[[$core.FooterColumn02Tpl]]
			</div>
			<div class="three columns">
				[[$core.FooterColumn03Tpl]]
			</div>
			<div class="three columns">
				[[$core.FooterColumn04Tpl]]
			</div>
		</div>`
		&default=`
		<div class="row"><div class="twelve columns">[[$core.FooterColumnCaptionTpl]]</div></div>
		<div class="row">
			<div class="six columns">
				[[$core.FooterColumn01Tpl]]
			</div>
			<div class="six columns">
				[[$core.FooterColumn02Tpl]]
			</div>
		</div>
		`]]
		<!-- END Footer content boxes -->
                </div><!-- #footer -->
	</div>
	<!-- START Modals -->
	[[$core.ModalsTpl]]
	<!-- END Modals -->
	<!-- Include core JS File that contains all required javascripts -->
	[[$core.JavaScriptLinksTpl]]
	[[$core.AddLoadEventScriptTpl]]
	[[$core.PrintScriptTpl]]
	[[$core.GoogleTrackingScriptTpl]]
   </body>
</html>