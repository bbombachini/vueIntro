const vm = new Vue({
  el : "#app",
  data : {
    // title : "Vue and Video",
    mainmessage : "Welcome to your first vue app!",
    movieData : [
      {name: "Star Wars the Force Awakens", thumb: "forceawakens.jpg", vidSource: "forceawakens.mp4", description: "Yet another star wars movie"},
      {name: "Avengers", thumb: "avengers.jpg", vidSource: "avengers.mp4", description: "Yet another Avengers movie"},
      {name: "Stranger Things", thumb: "strangerthings.jpg", vidSource: "strangerthings.mp4", description: "Really stranger things can happen"}
    ]
  },
  methods : {
    loadMovie(e){
      e.preventDefault();
      
    }
  }

});
