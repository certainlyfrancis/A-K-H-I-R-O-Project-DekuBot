module.exports.config = {
	name: "rulesNoti",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	credits: "Clark",
	description: "Notify group of rules when new members are added",
	dependencies: {
		"fs-extra": "",
	},
};

module.exports.run = async function ({ api, event }) {
	const { threadID } = event;

	if (event.logMessageData.addedParticipants.some((i) => i.userFBId == api.getCurrentUserID())) {
		api.sendMessage("🌟 | 𝑰𝒓𝒓𝒂𝒔𝒉𝒂𝒊𝒎𝒂𝒔𝒆 𝑠𝑒𝑛𝑠𝑒𝑖, 𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑖𝑛 𝑡ℎ𝑖𝑠 𝑔𝑟𝑜𝑢𝑝! 𝑃𝑙𝑒𝑎𝑠𝑒 𝑟𝑒𝑎𝑑 𝑡ℎ𝑒 𝑟𝑢𝑙𝑒𝑠 𝑐𝑎𝑟𝑒𝑓𝑢𝑙𝑙𝑦 𝑎𝑛𝑑 𝑎𝑏𝑖𝑑𝑒 𝑏𝑦 𝑡ℎ𝑒𝑚.", threadID);
	} else {

		try {
			const rules = `🌟 | 𝗚𝗿𝗼𝘂𝗽 𝗥𝘂𝗹𝗲𝘀
━━━━━━━━━━━━━━━━━━━
𝗡𝗼 𝗦𝗽𝗮𝗺𝗺𝗶𝗻𝗴: 𝑃𝑙𝑒𝑎𝑠𝑒 𝑟𝑒𝑓𝑟𝑎𝑖𝑛 𝑓𝑟𝑜𝑚 𝑒𝑥𝑐𝑒𝑠𝑠𝑖𝑣𝑒 𝑝𝑜𝑠𝑡𝑖𝑛𝑔 𝑜𝑟 𝑠𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑝𝑒𝑎𝑡𝑒𝑑 𝑚𝑒𝑠𝑠𝑎𝑔𝑒𝑠. 𝑅𝑒𝑠𝑝𝑒𝑐𝑡 𝑜𝑡ℎ𝑒𝑟𝑠' 𝑠𝑝𝑎𝑐𝑒 𝑖𝑛 𝑡ℎ𝑒 𝑔𝑟𝑜𝑢𝑝.

𝗕𝗲 𝗥𝗲𝘀𝗽𝗲𝗰𝘁𝗳𝘂𝗹: 𝑇𝑟𝑒𝑎𝑡 𝑒𝑣𝑒𝑟𝑦𝑜𝑛𝑒 𝑤𝑖𝑡ℎ 𝑘𝑖𝑛𝑑𝑛𝑒𝑠𝑠 𝑎𝑛𝑑 𝑐𝑜𝑛𝑠𝑖𝑑𝑒𝑟𝑎𝑡𝑖𝑜𝑛. 𝐻𝑎𝑟𝑎𝑠𝑠𝑚𝑒𝑛𝑡, ℎ𝑎𝑡𝑒 𝑠𝑝𝑒𝑒𝑐ℎ, 𝑜𝑟 𝑑𝑖𝑠𝑟𝑒𝑠𝑝𝑒𝑐𝑡𝑓𝑢𝑙 𝑏𝑒ℎ𝑎𝑣𝑖𝑜𝑟 𝑡𝑜𝑤𝑎𝑟𝑑𝑠 𝑎𝑛𝑦 𝑚𝑒𝑚𝑏𝑒𝑟 𝑤𝑜𝑛'𝑡 𝑏𝑒 𝑡𝑜𝑙𝑒𝑟𝑎𝑡𝑒𝑑.

𝗡𝗼 𝗜𝗹𝗹𝗲𝗴𝗮𝗹 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: 𝐴𝑛𝑦 𝑓𝑜𝑟𝑚 𝑜𝑓 𝑐𝑜𝑛𝑡𝑒𝑛𝑡 𝑡ℎ𝑎𝑡 𝑣𝑖𝑜𝑙𝑎𝑡𝑒𝑠 𝑙𝑜𝑐𝑎𝑙, 𝑛𝑎𝑡𝑖𝑜𝑛𝑎𝑙, 𝑜𝑟 𝑖𝑛𝑡𝑒𝑟𝑛𝑎𝑡𝑖𝑜𝑛𝑎𝑙 𝑙𝑎𝑤𝑠 𝑖𝑠 𝑠𝑡𝑟𝑖𝑐𝑡𝑙𝑦 𝑝𝑟𝑜ℎ𝑖𝑏𝑖𝑡𝑒𝑑. 𝑇ℎ𝑖𝑠 𝑖𝑛𝑐𝑙𝑢𝑑𝑒𝑠 𝑏𝑢𝑡 𝑖𝑠 𝑛𝑜𝑡 𝑙𝑖𝑚𝑖𝑡𝑒𝑑 𝑡𝑜 𝑖𝑙𝑙𝑒𝑔𝑎𝑙 𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑠, 𝑒𝑥𝑝𝑙𝑖𝑐𝑖𝑡 𝑚𝑎𝑡𝑒𝑟𝑖𝑎𝑙, 𝑒𝑡𝑐.

𝗙𝗼𝗹𝗹𝗼𝘄 𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗚𝘂𝗶𝗱𝗲𝗹𝗶𝗻𝗲𝘀: 𝐴𝑛𝑦 𝑟𝑢𝑙𝑒𝑠 𝑜𝑟 𝑔𝑢𝑖𝑑𝑒𝑙𝑖𝑛𝑒𝑠 𝑝𝑖𝑛𝑛𝑒𝑑 𝑖𝑛 𝑡ℎ𝑒 𝑔𝑟𝑜𝑢𝑝 𝑠ℎ𝑜𝑢𝑙𝑑 𝑏𝑒 𝑠𝑡𝑟𝑖𝑐𝑡𝑙𝑦 𝑎𝑑ℎ𝑒𝑟𝑒𝑑 𝑡𝑜. 𝑇ℎ𝑒𝑠𝑒 𝑚𝑎𝑦 𝑖𝑛𝑐𝑙𝑢𝑑𝑒 𝑠𝑝𝑒𝑐𝑖𝑓𝑖𝑐 𝑔𝑢𝑖𝑑𝑒𝑙𝑖𝑛𝑒𝑠 𝑓𝑜𝑟 𝑐𝑒𝑟𝑡𝑎𝑖𝑛 𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑖𝑒𝑠 𝑜𝑟 𝑖𝑛𝑡𝑒𝑟𝑎𝑐𝑡𝑖𝑜𝑛𝑠 𝑤𝑖𝑡ℎ𝑖𝑛 𝑡ℎ𝑒 𝑔𝑟𝑜𝑢𝑝.

𝗔𝗰𝘁𝗶𝘃𝗶𝘁𝘆 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁: 𝑀𝑒𝑚𝑏𝑒𝑟𝑠 𝑎𝑟𝑒 𝑒𝑥𝑝𝑒𝑐𝑡𝑒𝑑 𝑡𝑜 𝑚𝑎𝑖𝑛𝑡𝑎𝑖𝑛 𝑎𝑡 𝑙𝑒𝑎𝑠𝑡 𝑎 𝑚𝑖𝑛𝑖𝑚𝑎𝑙 𝑙𝑒𝑣𝑒𝑙 𝑜𝑓 𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑦. 𝐼𝑛𝑎𝑐𝑡𝑖𝑣𝑒 𝑚𝑒𝑚𝑏𝑒𝑟𝑠 𝑓𝑜𝑟 𝑎𝑛 𝑒𝑥𝑡𝑒𝑛𝑑𝑒𝑑 𝑝𝑒𝑟𝑖𝑜𝑑 𝑤𝑖𝑡ℎ𝑜𝑢𝑡 𝑝𝑟𝑖𝑜𝑟 𝑛𝑜𝑡𝑖𝑐𝑒 𝑚𝑎𝑦 𝑏𝑒 𝑠𝑢𝑏𝑗𝑒𝑐𝑡 𝑡𝑜 𝑟𝑒𝑚𝑜𝑣𝑎𝑙.

𝗥𝗲𝘀𝗽𝗲𝗰𝘁 𝗔𝗱𝗺𝗶𝗻 𝗮𝗻𝗱 𝗠𝗲𝗺𝗯𝗲𝗿𝘀: 𝑆ℎ𝑜𝑤 𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜 𝑡ℎ𝑒 𝑔𝑟𝑜𝑢𝑝 𝑎𝑑𝑚𝑖𝑛𝑖𝑠𝑡𝑟𝑎𝑡𝑜𝑟𝑠 𝑎𝑛𝑑 𝑓𝑒𝑙𝑙𝑜𝑤 𝑚𝑒𝑚𝑏𝑒𝑟𝑠. 𝐷𝑖𝑠𝑟𝑒𝑠𝑝𝑒𝑐𝑡 𝑡𝑜𝑤𝑎𝑟𝑑𝑠 𝑎𝑛𝑦 𝑔𝑟𝑜𝑢𝑝 𝑚𝑒𝑚𝑏𝑒𝑟, 𝑖𝑛𝑐𝑙𝑢𝑑𝑖𝑛𝑔 𝑎𝑑𝑚𝑖𝑛𝑠, 𝑤𝑖𝑙𝑙 𝑛𝑜𝑡 𝑏𝑒 𝑡𝑜𝑙𝑒𝑟𝑎𝑡𝑒𝑑.

𝗡𝗼 𝗦𝗲𝗲𝗻𝗲𝗿: 𝐴𝑣𝑜𝑖𝑑 𝑢𝑠𝑖𝑛𝑔 𝑡ℎ𝑒 "𝑠𝑒𝑒𝑛" 𝑓𝑒𝑎𝑡𝑢𝑟𝑒 𝑡𝑜 𝑡𝑟𝑎𝑐𝑘 𝑜𝑟 𝑖𝑔𝑛𝑜𝑟𝑒 𝑚𝑒𝑠𝑠𝑎𝑔𝑒𝑠 𝑖𝑛𝑡𝑒𝑛𝑡𝑖𝑜𝑛𝑎𝑙𝑙𝑦.

𝗡𝗼 𝗢𝘃𝗲𝗿𝗮𝗰𝘁𝗶𝗻𝗴: 𝑅𝑒𝑓𝑟𝑎𝑖𝑛 𝑓𝑟𝑜𝑚 𝑒𝑥𝑎𝑔𝑔𝑒𝑟𝑎𝑡𝑒𝑑 𝑜𝑟 𝑑𝑟𝑎𝑚𝑎𝑡𝑖𝑐 𝑏𝑒ℎ𝑎𝑣𝑖𝑜𝑟 𝑡ℎ𝑎𝑡 𝑑𝑖𝑠𝑟𝑢𝑝𝑡𝑠 𝑡ℎ𝑒 ℎ𝑎𝑟𝑚𝑜𝑛𝑦 𝑜𝑓 𝑡ℎ𝑒 𝑔𝑟𝑜𝑢𝑝.

𝗡𝗼 𝗥𝗼𝗹𝗲-𝗽𝗹𝗮𝘆𝗶𝗻𝗴: 𝑇ℎ𝑒 𝑔𝑟𝑜𝑢𝑝 𝑖𝑠 𝑚𝑒𝑎𝑛𝑡 𝑓𝑜𝑟 𝑔𝑒𝑛𝑢𝑖𝑛𝑒 𝑐𝑜𝑛𝑣𝑒𝑟𝑠𝑎𝑡𝑖𝑜𝑛 𝑎𝑛𝑑 𝑖𝑛𝑡𝑒𝑟𝑎𝑐𝑡𝑖𝑜𝑛, 𝑛𝑜𝑡 𝑓𝑜𝑟 𝑟𝑜𝑙𝑒-𝑝𝑙𝑎𝑦𝑖𝑛𝑔 𝑎𝑐𝑡𝑖𝑣𝑖𝑡𝑖𝑒𝑠.

𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗘𝗮𝗰𝗵 𝗢𝘁𝗵𝗲𝗿: 𝐹𝑒𝑒𝑙 𝑓𝑟𝑒𝑒 𝑡𝑜 𝑠ℎ𝑎𝑟𝑒 𝑎𝑛𝑑 𝑝𝑟𝑜𝑚𝑜𝑡𝑒 𝑦𝑜𝑢𝑟 𝑟𝑒𝑠𝑝𝑒𝑐𝑡𝑖𝑣𝑒 𝑎𝑐𝑐𝑜𝑢𝑛𝑡𝑠 𝑓𝑜𝑟 𝑚𝑢𝑡𝑢𝑎𝑙 𝑠𝑢𝑝𝑝𝑜𝑟𝑡 𝑎𝑛𝑑 𝑒𝑛𝑐𝑜𝑢𝑟𝑎𝑔𝑒𝑚𝑒𝑛𝑡 𝑎𝑚𝑜𝑛𝑔 𝑚𝑒𝑚𝑏𝑒𝑟𝑠.
━━━━━━━━━━━━━━━━━━━
🎓 | 𝖵𝗂𝗈𝗅𝖺𝗍𝗂𝗇𝗀 𝗍𝗁𝖾𝗌𝖾 𝗋𝗎𝗅𝖾𝗌 𝗆𝖺𝗒 𝗋𝖾𝗌𝗎𝗅𝗍 𝖨𝗇 𝗐𝖺𝗋𝗇𝗂𝗇𝗀𝗌 𝗈𝗋 𝗋𝖾𝗆𝗈𝗏𝖺𝗅 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 𝗐𝗂𝗍𝗁𝗈𝗎𝗍 𝗉𝗋𝗂𝗈𝗋 𝗇𝗈𝗍𝗂𝖼𝖾. 𝖫𝖾𝗍'𝗌 𝖼𝗋𝖾𝖺𝗍𝖾 𝖺 𝗐𝖾𝗅𝖼𝗈𝗆𝗂𝗇𝗀 𝖺𝗇𝖽 𝗋𝖾𝗌𝗉𝖾𝖼𝗍𝖿𝗎𝗅 𝖾𝗇𝗏𝗂𝗋𝗈𝗇𝗆𝖾𝗇𝗍 𝖿𝗈𝗋 𝖾𝗏𝖾𝗋𝗒𝗈𝗇𝖾. 𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝖼𝗈𝗈𝗉𝖾𝗋𝖺𝗍𝖨𝗈𝗇!`;

			for (const participant of event.logMessageData.addedParticipants) {
				const userID = participant.userFbId;
				const userName =
participant.fullname;
				if (userID === api.getCurrentUserID()) continue;


				api.sendMessage(rules, threadID);
			}
		} catch (err) {
			console.error("ERROR:", err);
		}
	}
};
