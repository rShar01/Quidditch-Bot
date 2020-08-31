module.exports = {
	name: 'faq',
	description: 'Answers some frequently asked questions',
	execute(message) {
		message.channel.send('What is our website? Find out about UBC Quidditch at https://www.ubcquidditch.com/ or https://recreation.ubc.ca/sport-clubs/quidditch-sc/');
		message.channel.send('What is Quidditch? Learn more at https://www.youtube.com/channel/UCHHY9Rdt1LqElnI351cTvxA');
		message.channel.send('Where can I find the waiver? On the recreation website at https://recreation.ubc.ca/sport-clubs/quidditch-sc/ubc-tsc-quidditch-waiver/ ');
		message.channel.send('How do I pay my fees? Here: https://reg.rec.ubc.ca/econnectlg/Start/Start.asp');
	},
};
