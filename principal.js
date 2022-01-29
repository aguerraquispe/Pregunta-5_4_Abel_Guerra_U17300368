var juego=new Phaser.Game(800,400,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var flappy,persona;
var keyRight,keyLeft,keyUp,keyDown;

var txtNombre;

var estadoPrincipal={
	preload: function(){
		juego.load.image('fondo','img/fondo4.png');
		juego.load.spritesheet('personas','img/monster.png',64,64);
	},

	create: function(){
		fondoJuego = juego.add.tileSprite(0,0,800,400,'fondo');
		persona = juego.add.sprite(juego.width/2,juego.height/2,'personas');
		persona.anchor.setTo(0.5);
		//flappy.frame=1;
		persona.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true);
		persona.animations.add('izquierda',[9,10,11,12,13,14,15,16,17],10,true);
		persona.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true);
		persona.animations.add('derecha',[27,28,29,30,31,32,33,34,35],10,true);
		
		//keyboard
		keyRight=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		keyLeft=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		keyUp=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		keyDown=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);


		//creando mi nombre
		//juego.add.text(110,320," - Hecho por Abel Guerra - ",{font:"14px Arial", fill:"#0F0"});


	},

	update: function(){
		fondoJuego.tilePosition.x-=1;

		persona.animations.play('vuelo');


		//keyboard actions
		if (keyRight.isDown) {
			persona.position.x+=2;
			persona.animations.play('derecha');
		}else 
		if (keyLeft.isDown) {
			persona.position.x-=2;
			persona.animations.play('izquierda');
		}else 
		if (keyUp.isDown) {
			persona.position.y-=2;
			persona.animations.play('arriba');
		}else 
		if (keyDown.isDown) {
			persona.position.y+=2;
			persona.animations.play('abajo');
		}
	}


};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');