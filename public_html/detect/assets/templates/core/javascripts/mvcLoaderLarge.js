function init()
{
	var bodyElement= document.getElementsByTagName('body')[0];
	var mvcElement= document.createElement('mvc');
	mvcElement.id='core.mvcElement';
	mvcElement = bodyElement.appendChild(mvcElement);
	appendText(mvcElement,'MVC: initialized for Large Client Width (<1441px).');
	appendStyles();
}
function appendStyles()
{
	var headElement= document.getElementsByTagName('head')[0];
	// FOUNDATION
	var foundationStyle = document.createElement('link');
	foundationStyle.id='core.foundationStyle';
	foundationStyle = headElement.appendChild(foundationStyle);
	foundationStyle.rel='stylesheet';
	foundationStyle.href='assets/templates/core/stylesheets/large/foundation.min.css';
}
function appendText(node,txt)
{
	node.appendChild(document.createTextNode(txt));
}
function appendElement(node,tag,id,htm)
{
	var ne = document.createElement(tag);
	if(id) ne.id = id;
	if(htm) ne.innerHTML = htm;
	node.appendChild(ne);
}
   //more function and global variable definitions
init();