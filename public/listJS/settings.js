	$("#switch")[0].checked = <%= darkMode %>;
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
  if (m<10){
    m = "0"+m;
  }
	$("#currTime").html(h+':'+m);
	var chck = $("#switch")[0].checked;
	function clickk() {
		chck = $("#switch")[0].checked;
		$("#returnBut").attr("value", chck);
	}