/**
 * =========================
 * FixAnchorsWithBaseURL
 * =========================
 *
 */
/* skip the home page for this fix */
if($modx->resource->get('id') !=$modx->config['site_start']) {
  /* skip anchors with class 'escape-plugins' */
  // if( $modx->resource-> != 'escape-plugins') {
  $modx->resource->_output =str_replace('href="#','href="' .$modx->makeUrl($modx->resource->get('id')) .'#',$modx->resource->_output);
  //}
}