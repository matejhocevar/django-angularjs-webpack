function uiImage() {
	return {
	  restrict: 'A',
	  link: function(scope, element, attr) {
		var src = attr.uiImage || attr.src;

		function loadImage(image) {
		  return require('../../assets/' + image);
		}

		element.attr('src', loadImage(src));
	  }
	};
}

uiImage.$inject = []

export default uiImage;