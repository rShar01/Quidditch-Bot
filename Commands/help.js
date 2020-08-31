const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'List all of commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
			data.push(`\nYou can send \`${prefix}role [role name]\` to get a role!`);
			data.push(`\nYou can send \`${prefix}faq\` to see some frequently asked questions!`);
			data.push(`\nYou can send \`${prefix}practice\` to see practice times!`);
			data.push(`\nYou can send \`${prefix}ping\` to get a response from the bot! (This was mostly used for testing)`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
		// message.channel.send('What can I help you with? \n !role --name of position here-- to get that position');
	},
};
