(function() {
  var blogDataList = '<ul data-role="listview">';
  $.getJSON( "http://toptenbooks.net/api/v1/node?parameters[type]=blog", displayBlogList);
	  function displayBlogList(data) {
	  	$.each(data, function(key, val) {
	  		blogDataList += '<li>';
	  		blogDataList += '<a href="#blogPost"';  
	  		blogDataList += 'onclick = "showPost(' + val.nid + ')">';
	  		blogDataList += '<h3>' + val.title + '</h3>';
	  		blogDataList += '</a></li>';
	  	}); // go through each post up to the most recent 25
	  	blogDataList += '</ul>';
	  	$('#postList').html(blogDataList);	  	
	  } // end of display blog post listview
})();

