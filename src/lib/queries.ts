"use server"

export async function sendMessage({
	name,
	email,
	message,
}: {
	name: string
	email: string
	message: string
}) {
	const content = `
    Mensagem recebida de <strong>${name} - ${email}</strong>\nMensagem:\n${message}`

	const url = process.env.DISCORD_API_URL
	if (!url) return false

	const sendMessage = await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
		}),
	})
	if (sendMessage.status > 200 && sendMessage.status < 299) {
		return true
	}
	return false
}
