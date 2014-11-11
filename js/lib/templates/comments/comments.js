define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (board) {
buf.push("<h1 class=\"text-center\"><span class=\"glyphicon glyphicon-comment\"></span>" + (jade.escape(null == (jade_interp = ' ' + board.get('name')) ? "" : jade_interp)) + "</h1><hr/><form role=\"form\" data-js=\"new\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"new-name-input\" class=\"col-sm-2 control-label\">お名前</label><div class=\"col-sm-4\"><input id=\"new-name-input\" type=\"text\" placeholder=\"あなたの名前\" data-js=\"new_name\" value=\"名無し\" class=\"form-control\"/></div></div><div class=\"form-group\"><label for=\"new-content-input\" class=\"col-sm-2 control-label\">新しいコメント</label><div class=\"col-sm-8\"><textarea id=\"new-content-input\" placeholder=\"新しいコメント\" rows=\"5\" data-js=\"new_content\" class=\"form-control\"></textarea><div data-js=\"invalid\" class=\"text-danger\"></div></div></div><div class=\"form-group\"><div class=\"col-sm-offset-2 col-sm-8\"><button type=\"submit\" class=\"btn btn-default pull-right\">保存</button></div></div></form><div class=\"row\"><div class=\"col-sm-offset-2 col-sm-8\"><ul data-js=\"index\" class=\"media-list\"></ul></div></div><a type=\"button\" href=\"#\" class=\"col-sm-offset-2 btn btn-default pull-left\"><span class=\"glyphicon glyphicon-chevron-left\"></span> 戻る</a>");}.call(this,"board" in locals_for_with?locals_for_with.board:typeof board!=="undefined"?board:undefined));;return buf.join("");
};

});
