define(["jade"],function(jade){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (comment) {
buf.push("<div class=\"media-body\"><h4 class=\"media-heading\">" + (jade.escape(null == (jade_interp = comment.get('name')) ? "" : jade_interp)) + "<span class=\"pull-right\">" + (jade.escape(null == (jade_interp = comment.get('created_at')) ? "" : jade_interp)) + "</span></h4>" + (jade.escape(null == (jade_interp = comment.get('content')) ? "" : jade_interp)) + "</div>");}.call(this,"comment" in locals_for_with?locals_for_with.comment:typeof comment!=="undefined"?comment:undefined));;return buf.join("");
};

});
