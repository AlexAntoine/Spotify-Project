var request = require("request");
var user_id = "antoine12234";
var user_id2 = 'aw465annt6vr116evq4n7ud9t'
var token = "Bearer BQCWp0AC-GiMIBjerHcdSU3apW6um2zzqrPIhZczKOgHJIMAsnHx34OzfzX2Efk8mbRsq4_5h5XlVE4SYprYrXteH_XiIE1-99K0O4XkybpNfkEGpSO7gGWLrt5P0jHiovgm_vluNu6jCiPJYgYE"
var playlists_url="https://api.spotify.com/v1/users/"+user_id+"/playlists";

// request({url:playlists_url, headers:{"Authorization":token}}, function(err, res){
// 	if (res){
// 		var playlists=JSON.parse(res.body);	
// 		var playlist_url = playlists.items[0].href;
// 		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
// 			if (res){
// 				var playlist = JSON.parse(res.body);
// 				console.log("playlist: " + playlist.name);
// 				playlist.tracks.items.forEach(function(track){
// 					console.log(track.track.name);
// 				});
// 			}
// 		})		
// 	}
// });

request({url:playlists_url, headers:{"Authorization": token}}, (error, response)=>{

    if(error)
    {
        console.log(error);
    }
    else{
        console.log(response);
    }

});
