define( [ "troopjs-core/component/widget", "jquery" ], function DisplayModule(Widget, $) {

	function filter(item, index) {
		return item === null;
	}

	return Widget.extend({
		"hub:memory/todos/change": function onChange(topic, items) {
			var $element = this.$element;
			var $data = $element.data();

			$element[$.grep(items, filter, true).length > 0 ? $data.show || "show" : $data.hide || "hide"]();
		}
	});
});