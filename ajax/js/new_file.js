function ajax(opts){
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
			var json = JSON.parse(xmlhttp.responseText);
			opts.success(json);
		}
		if(xmlhttp.readyState === 4 && xmlhttp.status === 404){
			opt.error();
		}
	};
	
	var dataStr = '';
	for(var key in opt.data){
		dataStr += key +'=' + opts.data[key] + '&';
	}
	dataStr = dataStr.substr(0, dataStr.length-1);
	
	if(opts.type.toLowerCase()=== 'post'){
		xmlhttp.open(opts.type, opts.url ,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(dataStr);
	}
	if(opts.type.toLowerCase()=== 'get'){
		xmlhttp.open(opts.type, opts.url + '?'+dataStr, true);
		xmlhttp.send();
	}
};


document.getElementById('btn').addEventListener('click',function(){
	
	ajax({
		url: 'use_ajax.json',
		type: document.getElementById('type').value || 'get',
		data: {
			username: document.getElementById('username').value
		},
		success: function(data){
			dealWith(data);
		},
		error: function(){
			onError();
		}
	});
});

function onError(){
	document.getElementById('ct').innerHTML = 'oh 出错了...';
};

function dealWith(userInfo){
	var str = '<dt>性别:</dt>';
		str+= '<dd>' + userInfo.sex + '</dd>';
		str+= '<dt>年龄:</dt>';
		str+= '<dd>' + userInfo.age + '</dd>';
		
	document.getElementById('ct').innerHTML = str;
}












