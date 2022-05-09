const statusTag = document.getElementById("status");
const spotifyDataElement = document.getElementById("spotifyData");
var results = lanyard({
  userId: "866686984587313173",
  socket: true,
  onPresenceUpdate: (data) => {
    if (data.discord_status == "online") {
      statusTag.classList.remove('offline', 'idle', 'dnd');
      statusTag.classList.add('ping', 'online');
    }
    if (data.discord_status == "offline") {
      statusTag.classList.remove('online', 'idle', 'dnd');
      statusTag.classList.add('ping', 'offline');
    }
    if (data.discord_status == "dnd") {
      statusTag.classList.remove('online', 'idle', 'offline');
      statusTag.classList.add('ping', 'dnd');
    }
    if (data.discord_status == "idle") {
      statusTag.classList.remove('online', 'dnd', 'offline');
      statusTag.classList.add('ping', 'idle');
    }
    if (!data.listening_to_spotify) {
      document.getElementById('spotifyData').innerHTML = "No Music Playing";
    }
    else {
      var spotifyData = `${data.spotify.song}, ${data.spotify.artist}`
      if (spotifyData.length > 40) spotifyData = spotifyData.substring(0, 40) + '...';
      document.getElementById('spotifyData').innerHTML = spotifyData
      document.getElementById('spotifyData').href = 'https://open.spotify.com/track/'+data.spotify.track_id;
    }
  }
});