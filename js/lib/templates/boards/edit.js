define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (board) {
buf.push("<span data-js=\"destroy\" class=\"badge\"><span class=\"glyphicon glyphicon-remove\"></span></span><span data-js=\"done\" class=\"badge\"><span class=\"glyphicon glyphicon-ok\"></span></span><span data-js=\"cancel\" class=\"badge\"><span class=\"glyphicon glyphicon-repeat\"></span></span><form class=\"form-inline\"><div class=\"form-group\"><label for=\"edit-name\" class=\"sr-only\">掲示板名</label><input id=\"edit-name\" type=\"text\" placeholder=\"掲示板名を入力\"" + (jade.attr("value", board.get('name'), true, false)) + " data-js=\"edit_name\" class=\"form-control\"/><div data-js=\"invalid\" class=\"text-danger\"></div></div></form>");}.call(this,"board" in locals_for_with?locals_for_with.board:typeof board!=="undefined"?board:undefined));;return buf.join("");
};

});
