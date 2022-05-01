const statusTag = document.getElementById("status");
lanyard({
  userId: "866686984587313173",
  socket: true,
  onPresenceUpdate: console.log // presenceData
})
const spotifyDataElement =
  document.getElementById("spotifyData");
    var results = lanyard({
      userId: "866686984587313173",
      socket: true,
      onPresenceUpdate: (data) => {
        if (data.discord_status == "online") {
          statusTag.classList.remove('ping-mobile');
          statusTag.classList.remove('dnd');
          statusTag.classList.remove('idle');
          statusTag.classList.remove('offline');
          statusTag.classList.add('ping');
          statusTag.classList.add('online');
          document.getElementById('text-status').innerHTML = "Online";
        }
        if (data.discord_status == "offline") {
          statusTag.classList.remove('ping-mobile');
          statusTag.classList.remove('online');
          statusTag.classList.remove('idle');
          statusTag.classList.remove('dnd');
          statusTag.classList.add('ping');
          statusTag.classList.add('offline');
          document.getElementById('text-status').innerHTML = "Offline";
        }
        if (data.discord_status == "dnd") {
          statusTag.classList.remove('ping-mobile');
          statusTag.classList.remove('online');
          statusTag.classList.remove('idle');
          statusTag.classList.remove('offline');
          statusTag.classList.add('ping');
          statusTag.classList.add('dnd');
          document.getElementById('text-status').innerHTML = "Do Not Disturb";
        }
        if (data.discord_status == "idle") {
          statusTag.classList.remove('ping-mobile');
          statusTag.classList.remove('online');
          statusTag.classList.remove('dnd');
          statusTag.classList.remove('offline');
          statusTag.classList.add('ping');
          statusTag.classList.add('idle');
          document.getElementById('text-status').innerHTML = "Idle";
        }
        if(!data.listening_to_spotify) {
          document.getElementById('spotifyData').innerHTML = "No Music Playing";
        }
        else {
          var spotifyData = `${data.spotify.song}` + ", " + `${data.spotify.artist}`
          if(spotifyData.length > 40) spotifyData = spotifyData.substring(0, 40) + '...';
          document.getElementById('spotifyData').innerHTML = spotifyData
        }
        }
});