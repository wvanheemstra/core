/**
 * =========================
 * DefaultTemplateByParentTV
 * =========================
 *
 * Plugin for modX Revolution
 * Set default template for children of a resource
 *
 * Author:
 * Marc Loehe (boundaryfunctions)
 * marcloehe.de
 *
 *
 * Usage:
 *
 * 1. Paste this as new plugin and connect it to system event
 *    'OnDocFormRender'.
 *
 * 2. Assign a new TV 'ChildDefaultTemplateTV' to each template,
 *    for which you want to define the default children template.
 *
 * 3. Set the newly created TV to type List Box and its 'Input Option
 *    Values' to:
 * 
 *    @SELECT `templatename` AS `name`,`id` FROM `[[+PREFIX]]site_templates`
 * 
 *    This will fetch all available templates from the db.
 *
 * 4. Have fun!
 *
 */
if ($modx->event->name == OnDocFormRender && $mode == modSystemEvent::MODE_NEW) {
  if ($parentId = $_REQUEST['parent']) {
    if ($parent = $modx->getObject('modResource', $parentId)) {
      if ($childTemplate = $parent->getTVValue('ChildDefaultTemplateTV')) {
        if (isset($modx->controller)) {
          $modx->controller->setProperty('template', $childTemplate);
        } else { // modX < 2.2.0
          $_REQUEST['template'] = $childTemplate;
        }
      }
    }
  }
}