<?php
$pages = array();

$page1_sections = [
  "id"=>1, 
  "openingComment"=> "start of section", 
  "closingComment"=> "end of section", 
  "data"=>"<ul class='left'><li class='divider'></li><li><a href='#'>Main Item Left</a></li></ul><ul class='right'><li class='divider'></li><li><a href='#'>Main Item Right</a></li></ul>"
];

$page1_navs = [
  "id"=>1, 
  "class"=> "top-bar",
  "openingComment"=> "start of nav",
  "closingComment"=> "end of nav",
  "data"=> "<ul><!-- Title Area --><li class='name'><h1><a href='#'>Top Bar Title</a></h1></li><li class='toggle-topbar'><a href='#'></a></li></ul>",
  "sections"=> [$page1_sections]
];

$page1_rows = [
  "id"=>1, 
  "class"=> "row",
  "style"=> "border:1px;", 
  "openingComment"=> "start of row", 
  "closingComment"=> "end of row", 
  "data"=> "<div class='three columns'><div class='panel'><h5>Panel Title</h5><p>This is a three columns grid panel with an arbitrary height.</p></div></div>"
];

$page1_footers = [
  "id"=>1, 
  "class"=> "row",
  "style"=> "", 
  "openingComment"=> "start of footer", 
  "closingComment"=> "end of footer", 
  "data"=>"<div class='twelve columns'><hr /><div class='row'><div class='six columns'><p>&copy; Copyright no one at all. Go to town.</p></div><div class='six columns'><ul class='link-list right'><li><a href='#'>Section 1</a></li><li><a href='#'>Section 2</a></li><li><a href='#'>Section 3</a></li><li><a href='#'>Section 4</a></li></ul></div></div></div>"
];

$page1 = [
  "id"=>1,
  "style" => "width:100%;margin:0px;",
  "openingComment" => "start of page",
  "closingComment" => "end of page",
  "text" => "I am Page One",
  "navs" => [$page1_navs],
  "rows" => [$page1_rows],
  "footers" => [$page1_footers]
];

$page2 = ["id"=>2];
$page3 = ["id"=>3];

array_push($pages, $page1, $page2, $page3);

header('Content-Type: application/json');
$return = json_encode($pages);
echo $return;
?>