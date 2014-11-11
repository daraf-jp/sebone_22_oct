define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (board) {
buf.push("<span data-js=\"destroy\" class=\"badge\"><span class=\"glyphicon glyphicon-remove\"></span></span><span data-js=\"edit\" class=\"badge\"><span class=\"glyphicon glyphicon-edit\"></span></span>" + (jade.escape(null == (jade_interp = board.get('name')) ? "" : jade_interp)));}.call(this,"board" in locals_for_with?locals_for_with.board:typeof board!=="undefined"?board:undefined));;return buf.join("");
};

});
