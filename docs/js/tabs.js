$(function(){
	const params = location.search.slice(1).split("&").map(set => set.split("="));
	
	for(const param of params){
		if(param[0] == "tab"){
			$("#" + param[1]).prop("checked", true);
		}
	}
});