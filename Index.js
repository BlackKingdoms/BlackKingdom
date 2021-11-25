const chalk = require( chalk );
const { WAConnection, MessageType } = require( @adiwajshing/baileys );
const fs = require( fs );

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level =  warn ;
	conn.version = [2, 2140, 12]

	conn.on( connecting , async () => {
		console.log(`${chalk.green.bold( KING )}${chalk.blue.bold( BLACKKINDOM )}
${chalk.white.italic( BLACKKINDOM Strings )}
${chalk.blue.italic( ℹ️  Connecting to Whatsapp... Please wait. )}`);
	});

	conn.on( open , async () => {
		console.log(
			chalk.green.bold( BLACKKINDOM QR Code:  ),
			 BLACKKINGDOM ;;;  +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					 base64 
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			 BLACKKINGDOM;;;  +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					 base64 
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith( 94 )) {
			await conn.sendMessage(
				conn.user.jid,
				 *⚠️ Meka denna epa katawath   + conn.user.name +  * ⚠️ ,
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				 *⚠️ Please Do Not Share This Code With Anyone   +
					conn.user.name +
					 * ⚠️ ,
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"Meka copy karanna bari nm whatsapp eke athi bn code eka awith!\n"
			),
			chalk.green.bold(
				 IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER! 
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

BlackKingdom();
