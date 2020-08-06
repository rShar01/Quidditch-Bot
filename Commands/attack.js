module.exports = {
	name: 'attack',
	description: 'do not run this one',
	execute(message, args) {
		for(let i = 0; i < 25; i++) {
			message.author.send('Fuck you\n');
		}
	},
};
