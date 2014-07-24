function showPost(nid) {
		var url = "http://toptenbooks.net/api/v1/node/" + nid;
		$.getJSON(url, function(data) {
			console.log(data);
			var output = '<h3>' + data.title + '</h3>';
			/*output += '<img src=';
			photo_string = data.field_photo.uri;
			photo_file = photo_string.replace(/public:\/\//i, "");
			photo_path = encodeURI("'http://totenbooks.net/sites/default/files/styles/200_pixel_wide_style/public' + photo_file");
			output += photo_path + "alt=" + data.title;  */
			output += "<p>" + data.body.und[0].value + "</p>";
			$("#post").html(output);
		}); // get blog content
}


