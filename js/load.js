var loadState = {
  preload: function() {
    console.log('Preloading assets...')
    var loadingLabel = game.add.text(80,150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
    game.load.image('player','assets/player.png');
    game.load.image('win','assets/win.png');
  },

  create: function() {
    console.log("Starting Menu Game State");
    game.state.start('menu');
  }
};
