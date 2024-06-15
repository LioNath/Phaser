import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import Collectingstarscene from './collectingstars'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [Collectingstarscene],
}

export default new Phaser.Game(config)
