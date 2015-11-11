var winState = {
    create: function(){
       console.log("Adding Win and Game Over labels")
       var winLabel = game.add.text(80,80,'YOU WIN!',{font: '50px Arial', fill: '#00ff00'});
       var startLabel = game.add.text(80, game.world.height - 80, 'press the "W" key to restart', {font: '25px Arial', fill: '#ffffff'});
       var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
       wkey.onDown.addOnce(this.restart, this);
    },

    restart: function() {
        console.log('Restarting Menu Game State');
        game.state.start('menu');
    }
};
