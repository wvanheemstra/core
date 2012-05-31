[[!Gallery? &toPlaceholder=`gallery`]]
[[!GalleryItem]]
[[!GalleryAlbums? &toPlaceholder=`galleries`]]

<div class="row">
  <div class="eight columns">
   <div class="panel" style="margin-left:10px;"> 
    <h5>[[%custom.label_picture? &namespace=`custom`]]</h5>
    <div class="image">
      <a href="[[+galitem.image]]"><img class="[[+galitem.imgCls]]" src="[[+galitem.image]]" alt="[[+galitem.name]]" /></a>
      <br />[[%custom.label_albums? &namespace=`custom`]]: [[+galitem.albums]]
      <br />[[%custom.label_tags? &namespace=`custom`]]: [[+galitem.tags]]
    </div>
   </div>
  </div><!-- eight columns -->

  <div class="four columns"> 
    <h5>[[%custom.label_galleries? &namespace=`custom`]]</h5>
    <ul>
     [[+galleries]]
    </ul>
  </div><!-- four columns --> 
</div><!-- row -->

<div class="row">
  <div class="twelve columns">
<!-- custom has album(s) with parent = 1, hence showAll = 0 -->
[[!GalleryAlbums? &toPlaceholder=`GalleryAlbums` &limit=`0` &albumCoverSort=`rank` &prominentOnly=`0` &rowTpl=`core.GalleryAlbumRowTpl` &thumbWidth=`195` &thumbHeight=`140` &parent=`1` &showAll=`0`]]
[[!Gallery? &checkForRequestTagVar=`1` &toPlaceholder=`Gallery` &useCss=`0` &containerTpl=`core.GalleryAlbumTpl` &thumbWidth=`195` &thumbHeight=`140` &thumbTpl=`core.GalleryItemThumbTpl` &imageWidth=`800` &imageHeight=`800`]]
[[!If? &subject=`[[+Gallery]]` &operator=`isempty` &then=`[[+GalleryAlbums]]` &else=`[[+Gallery]]`]]
  </div><!-- twelve columns --> 
</div><!-- row -->