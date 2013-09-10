--------------------
Snippet: Smurf
--------------------
Version: 2.1
First Released: May 26th, 2009
Author: Willem van Heemstra <willem@vanheemstrapictures.com>
License: GNU GPLv2 (or later at your option)

This component is a simple smurf system. It allows you to easily
put smurfs anywhere on your site. It allows you to also manage them
via the backend management interface.

Upgrading to 2.0.0:
=====================
If you overrode any chunks in SmurfReply, you'll need to update them with the contents in:

&tplAddComment - core/components/smurf/elements/chunks/smurfaddcomment.chunk.tpl
&tplPreview - core/components/smurf/elements/chunks/smurfpreviewcomment.chunk.tpl

Specifically the extra hidden fields, error message placeholders, and submit button. Also,
notice that preview mode is no longer the default.

Upgrading to 0.6.0:
=====================
Note, the markup has changed for each comment. Comments are now no longer spaced
by margins, but in proper ol/li tags. If you'd like to revert to the old markup,
simply set &useMargins=`1` in your Smurf call.


Please read the official documentation at:
http://rtfm.modx.com/display/ADDON/Smurf

Thanks for using Smurf!
Willem van Heemstra
willem@vanheemstrapictures.com