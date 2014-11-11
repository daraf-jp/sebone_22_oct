define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1 class=\"text-center\">Sebone&nbsp;<span class=\"glyphicon glyphicon-comment\"></span></h1><hr/><form role=\"form\" data-js=\"new\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"board-new-input\" class=\"col-sm-2 control-label\">新しい掲示板</label><div class=\"col-sm-8\"><input id=\"board-new-input\" type=\"text\" placeholder=\"新しい掲示板名を入力\" data-js=\"new_name\" class=\"form-control\"/><div data-js=\"invalid\" class=\"text-danger\"></div></div></div><div class=\"form-group\"><div class=\"col-sm-offset-2 col-sm-8\"><input type=\"submit\" value=\"保存\" class=\"btn btn-default pull-right\"/></div></div></form><div class=\"row\"><div class=\"col-sm-offset-2 col-sm-8\"><div data-js=\"index\" class=\"list-group\"></div></div></div>");;return buf.join("");
};

});
