var menuState = {
  create: function() {
    console.log("Adding menu labels");
    var nameLabel = game.add.text(80,80,'Phaser Game State Tutorial', {font: '30px Arial', fill: '#ffffff'});
    var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to start', {font: '20px Arial', fill: '#ffffff'});
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);
  },

  start: function () {
    console.log("Starting Play Game State");
    game.state.start('play');
  }

};
