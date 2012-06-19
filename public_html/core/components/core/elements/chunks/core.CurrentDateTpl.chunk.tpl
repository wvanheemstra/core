<SCRIPT language="JavaScript" type="text/javascript">
<!--
// Array of day names
var dayNames = new Array([[++custom.names_of_days]]);

var monthNames = new Array([[++custom.names_of_months]]);

var dt = new Date();
var y  = dt.getYear();

// Y2K compliant
if (y < 1000) y +=1900;

document.write(dayNames[dt.getDay()] + ", " + dt.getDate() + " " + monthNames[dt.getMonth()] + ", " + y);
// -->
</SCRIPT>