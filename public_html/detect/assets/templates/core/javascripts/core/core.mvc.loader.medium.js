function init()
{
	var bodyElement= document.getElementsByTagName('body')[0];
	var mvcElement= document.createElement('mvc');
	mvcElement.id='core.mvcElement';
	mvcElement = bodyElement.appendChild(mvcElement);
	appendText(mvcElement,'MVC: initialized for Medium Client Width (<1280px).');
	appendStyles();
	buildPage();
}
function appendStyles()
{
	var headElement= document.getElementsByTagName('head')[0];
	// FOUNDATION
	var foundationStyle = document.createElement('link');
	foundationStyle.id='core.foundationStyle';
	foundationStyle = headElement.appendChild(foundationStyle);
	foundationStyle.rel='stylesheet';
	foundationStyle.href='assets/templates/core/stylesheets/medium/foundation.min.css';
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
function buildPage()
{
	// THE DATA
	var PAGES = [
	  {
	    id: 1,
		style: 'width:100%;margin:0px;',
		openingComment: 'start of page',
		closingComment: 'end of page',
	    text: 'I am Page One',
	    navs: [{id:1, 
		 		class: 'top-bar',
				openingComment: 'start of nav', 
				closingComment: 'end of nav',		
				sections:[
					{id:1, openingComment: 'start of section', closingComment: 'end of section'},
					{id:2, openingComment: 'start of section', closingComment: 'end of section'}
				]}
			  ],
	    rows: [
			{id:1, class:'row', openingComment: 'start of row', closingComment: 'end of row'},
			{id:2, class:'row', openingComment: 'start of row', closingComment: 'end of row'},
			{id:3, class:'row', openingComment: 'start of row', closingComment: 'end of row'},
			{id:4, class:'row', openingComment: 'start of row', closingComment: 'end of row'}],
	    footers: [
			{id:1, class:'row', openingComment: 'start of footer', closingComment: 'end of footer'}
		]
	  },
	  {
	    id: 2,
		style: 'width:100%;margin:0px;',
		openingComment: 'start of page',
		closingComment: 'end of page',
	    text: 'I am Page Two',
	    navs: [{id:1, 
		 		class: 'top-bar',		
				sections:[{id:1},{id:2}]}
				],
	    rows: [{id:1, class:'row'},{id:2, class:'row'},{id:3, class:'row'},{id:4, class:'row'}],
	    footers: [{id:1, class:'row'}]
	  },
	  {
	    id: 3,
		style: 'width:100%;margin:0px;',
		openingComment: 'start of page',
		closingComment: 'end of page',
	    text: 'I am Page Three',
	    navs: [{id:1, 
		 		class: 'top-bar',		
				sections:[{id:1},{id:2}]}
				],
	    rows: [{id:1, class:'row'},{id:2, class:'row'},{id:3, class:'row'},{id:4, class:'row'}],
	    footers: [{id:1, class:'row'}]
	  }
	];
	// END OF DATA
	
	// THE MODEL
	Page = can.Model({
	  findOne : 'GET /pages/{id}',
	  findAll : 'GET /pages',
	  create  : "POST /pages",
	  update  : "PUT /pages/{id}",
	  destroy : "DELETE /pages/{id}"
	},{});
	// END OF MODEL
	
	// THE FIXTURES
	var id= 1;
	can.fixture("GET /pages/{id}", function(){
	  return {};
	});
	can.fixture('GET /pages', function(){
	  return [PAGES];
	});
	var id= 4;
	can.fixture("POST /pages", function(){
	  return {id: (id++)}
	});
	can.fixture("PUT /pages/{id}", function(){
	  return {};
	});
	can.fixture("DELETE /pages/{id}", function(){
	  return {};
	});
	// END OF FIXTURES
	
	// THE CONTROLLER
	Pages = can.Control({
		init: function() {
			this.element.html(can.view('views/pagesList.ejs', {
				pages: this.options.pages
			}));
		}
	})
	// END OF CONTROLLER
	
	// Auto-starts when document is fully loaded
	$(document).ready(function(){	
		$.holdReady(true);
		$.getScript('assets/templates/core/javascripts/parseuri/parseuri.js', function() {
		    $.holdReady(false);
			var page_id = parseUri(document.URL).queryKey.page_id; // takes the value of param 'page_id' in URL
			//alert('page_id: '+page_id);
			loadPage(page_id);
		});
	}); // eof ready
	
	// Call this function to load a page by id... OOOOOPPPSSSS THIS IS BY INDEX, NOT ID.. FIX IT!!!
	function loadPage(id){
		var page_id;
		if(id) {page_id = id;}
		else {page_id=0;}
		// All Pages
		$.when(Page.findAll()).then(function(pageResponse){
			var bodyElement= document.getElementsByTagName('body')[0];
			var pages = pageResponse[0];
			var pageElement= document.createElement('page');	
			pageElement.id=pages[page_id].id; // pick the first page
			pageElement.setAttribute('style', pages[page_id].style); // style is a reserved wrd, use setAttribute
			appendText(pageElement,pages[page_id].text);
			var openingComment;
			var closingComment;
			for (var i = 0; i < pages[page_id].navs.length; i++) {
				var navElement= document.createElement('nav');
				navElement.setAttribute('class', pages[page_id].navs[i].class); // class is a reserved wrd, use setAttribute
				navElement = pageElement.appendChild(navElement);
				for (var n = 0; n < pages[page_id].navs[i].sections.length; n++) {
					var sectionElement= document.createElement('section');
					sectionElement = navElement.appendChild(sectionElement);
					var openingComment = document.createComment(pages[page_id].navs[i].sections[n].openingComment);
					sectionElement.parentNode.insertBefore(openingComment, sectionElement);
					var closingComment = document.createComment(pages[page_id].navs[i].sections[n].closingComment);
					sectionElement.parentNode.insertBefore(closingComment, sectionElement.nextSibling);			
				}	
				var openingComment = document.createComment(pages[page_id].navs[i].openingComment);
				navElement.parentNode.insertBefore(openingComment, navElement);
				var closingComment = document.createComment(pages[page_id].navs[i].closingComment);
				navElement.parentNode.insertBefore(closingComment, navElement.nextSibling);
			}
			for (var i = 0; i < pages[page_id].rows.length; i++) {
				var rowElement= document.createElement('div');
				rowElement.setAttribute('class', pages[page_id].rows[i].class);
				rowElement = pageElement.appendChild(rowElement);
				var openingComment = document.createComment(pages[page_id].rows[i].openingComment);
				rowElement.parentNode.insertBefore(openingComment, rowElement);
				var closingComment = document.createComment(pages[page_id].rows[i].closingComment);
				rowElement.parentNode.insertBefore(closingComment, rowElement.nextSibling);
			}
			for (var i = 0; i < pages[page_id].footers.length; i++) {
				var footerElement= document.createElement('footer');
				footerElement.setAttribute('class', pages[page_id].footers[i].class);
				footerElement = pageElement.appendChild(footerElement);
				var openingComment = document.createComment(pages[page_id].footers[i].openingComment);
				footerElement.parentNode.insertBefore(openingComment, footerElement);
				var closingComment = document.createComment(pages[page_id].footers[i].closingComment);
				footerElement.parentNode.insertBefore(closingComment, footerElement.nextSibling);				
			}
			pageElement = bodyElement.appendChild(pageElement);			
			var openingComment = document.createComment(pages[page_id].openingComment);
			pageElement.parentNode.insertBefore(openingComment, pageElement);
			var closingComment = document.createComment(pages[page_id].closingComment);
			pageElement.parentNode.insertBefore(closingComment, pageElement.nextSibling);
			// this below is still to be investigated
			new Pages('#pages', {
				pages: pages
			});
		}); // eof loadPage
	}
}
   //more function and global variable definitions

init();