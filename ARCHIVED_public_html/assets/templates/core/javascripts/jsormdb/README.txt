This is the README file for the jsormdb library. 

Author: Avi Deitcher
Email: avi [at] jsorm [dot] com
License: Please see the included license file license.txt or visit http://jsorm.com/license

0) Files included in this distribution
README.txt - this file
jsormdb.js - the actual library
jsormdb-src.js - non-minified version of the library
doc/ - JavaScript documentation generated by JSDoc http://code.google.com/p/jsdoc-toolkit/

1) Installation
Installation is straightforward. Simple include jsormdb.js in your <script>..</script> 
includes on your HTML page.

2) Limitations
jsormdb uses POST to submit changes/writes to the data store. Obviously, if you are working
off the local file system rather than a true Web server, the writes will fail.

3) Overview
jsormdb provides an advanced database in JavaScript, backed by any form of database or store on the
server. jsormdb is able to update itself from the server, as well as send updates back to the server.
These updates can be the entire data set, just the journal of changes, or a condensed version. 
jsormdb has the concept of transactions. Each change is kept in a journal, and can be rejected or
committed. Rejection rolls back all changes since the last commit, or since the initial load. Commitment
commits all changes since the last commit, or since the initial load. Additionally, commit sends changes
back to the server via ajax, if so configured. 

Please see the wiki at http://jsorm.com/wiki for additional details.



