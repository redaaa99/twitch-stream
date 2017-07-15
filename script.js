var users=["comster404","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

var html;
var image="";
var gam="";
var statu="";
var nam="";
var page="";
var url ='https://wind-bow.glitch.me/twitch-api/channels/';
i=0;
timer = setInterval(function(){
	// for steams
	$.getJSON(url+users[i],function(data){
		if(data.status=='404')
		{
			var str= data.message;
			str = str.split("'");
			nam = str[1];
			image = "data:image/png;base64,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";
			page = "#";
		}
		else
		{
			nam = data.display_name;
			image = data.logo;
			page = data.url;
		}
			
	});
	$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+users[i],function(data){
		if(data.stream==null)
		{
			statu="Offline";
			gam="";
		}
		else{
			statu = "Online";
			gam= " : "+data.stream.channel.game;
		}
	
	if(statu==="Online")
	{
		html='<div class="row on" style="background-color:#80b280;padding-left: 57px;" ><div class="col-xs-2 col-sm-1"><img src="' + 
        image + '" width="70px" height="70px"></div><div class="col-xs-10 col-sm-3" id="name" ><a href="'+page+'" target="_blank">'+nam+'</a></div><div class="col-xs-10 col-sm-8" id="status" style="text-shadow:0 0 3px green">'+statu+gam+'</div></div>';
		$("#content").append(html);

	}
	else{
		html='<div class="row off" style="background-color:#cc5959;padding-left: 57px;"><div class="col-xs-2 col-sm-1"><img src="' + 
          image + '" width="70px" height="70px"></div><div class="col-xs-10 col-sm-3" id="name" ><a href="'+page+'" target="_blank">'+nam+'</a></div><div class="col-xs-10 col-sm-8" id="status" >'+statu+gam+'</div></div>';
		$("#content").append(html);
	}
	

	 image="";
	 gam="";
	 statu="";
	 nam="";
	});

	i++;
  if(i==9)
    {
      clearInterval(timer);
    }
},500);


$('.can-toggle__switch').click(function(){
	$('.off').stop();
	$('.off').slideToggle("slow");
});

