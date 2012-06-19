<script type ="text/javascript" language ="javascript">
	function Print(elementId){
	  var printContent = document.getElementById(elementId);
	  var windowUrl = 'about:blank';
	  var uniqueName = new Date();
	  var windowName = 'Print' + uniqueName.getTime();
	  var printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
	  printWindow.document.write(printContent.innerHTML);
	  printWindow.document.close();
	  printWindow.focus();
	  printWindow.print();
	  printWindow.close();}
</script>