module.exports = {
	name: 'role',
	description: 'Used to assign yourself a role',
	usage: '<user> <role>',
	execute(message, args) {
		if(args[0] === 'Beater') {
			if(message.member.roles.cache.has('690737663187091488')) {
				message.channel.send('You already have that role');
			}
			else {
				message.channel.send('You now have the Beater role');
				message.member.roles.add(['690737663187091488']);
				// const myRole = message.guild.roles.fetch('690737663187091488').catch(console.error);
				// message.member.roles.set(myRole);
			}
		}
		else if (args[0] === 'Seeker') {
			if(message.member.roles.cache.has('691069668944904202')) {
				message.channel.send('You alrady have that role');
			}
			else {
				message.channel.send('You now have the Seeker role');
				message.member.roles.add(['691069668944904202']);
			}
		}
		else if (args[0] === 'Chaser') {
			if(message.member.roles.cache.has('690737734095994951')) {
				message.channel.send('You already have that role');
			}
			else {
				message.channel.send('You now have the Chaser role');
				message.member.roles.add(['690737734095994951']);
			}
		}
		else if (args[0] === 'Keeper') {
			if(message.member.roles.cache.has('690737788467019786')) {
				message.channel.send('You already have that role');
			}
			else {
				message.channel.send('You now have the Keeper role');
				message.member.roles.add(['690737788467019786']);
			}
		}
		else {
			message.channel.send('Roles are one of: Keeper, Seeker, Chaser, or Beater');
		}
	},
};
