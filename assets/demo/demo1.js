var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    canvas: document.getElementById('gameCanvas'),
    backgroundColor: 'rgb(50,50,50)',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('dude', '/assets/demo/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.image('ground', '/assets/demo/ground.png');
}

var platforms;
var player;
var cursors;

function create ()
{
    platforms = this.physics.add.staticGroup();
    platforms.create(400,568,'ground').setScale(2).refreshBody();
    
    player = this.physics.add.sprite(400,200,'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();
}


function update ()
{
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}
