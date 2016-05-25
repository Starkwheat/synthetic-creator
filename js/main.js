var game = new Phaser.Game(800, 600, Phaser.AUTO, 'Synthetic Creator'), Main = function () {};

Main.prototype = {

    preload: function() {
        game.load.image('synthetic_img', 'img/synthetic.png');
        game.load.script('intro', 'state/intro.js');
    },

    create: function() {
        game.state.add('Intro', Intro);
        game.state.start('Intro');
    }
};

game.state.add('Main', Main);
game.state.start('Main');
