[[!Login? 
	&tplType=`modChunk` 
	&loginTpl=`core.LoginTpl` 
	&logoutTpl=`core.LogoutTpl` 
	&errTpl=`core.LoginErrorTpl`
	&loginResourceId=`[[++custom.profile]]`
	&logoutResourceId=`[[++custom.site_start]]` 
	&contexts=`web,web-en,web-de` 
	&redirectToPrior=`0`
]]
[[*LightBoxTV:isnot=``:then=`
	<div id="lightbox" class="reveal-modal">
		[[*LightBoxTV]]
		<a class="close-reveal-modal">&#215;</a>
	</div>
`]]
[[switch?
	&get=`[[*ModalTV]]`
	&c1=`yes`
	&do1=`
	<div id="modal" class="reveal-modal">
		<div>[[*ModalContentTV]]</div>
		<a class="close-reveal-modal">&#215;</a>
	</div>
`&default=``]]