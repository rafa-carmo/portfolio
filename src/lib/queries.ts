"use server"

import nodemailer from "nodemailer"

interface MessageProps {
	name: string
	email: string
	message: string
}

export async function sendMessage(msg: MessageProps) {
	try {
		await sendMail(msg)
	} catch (e) {
		console.error("error on send to email:", e)
		return false
	}

	try {
		await sendDiscord(msg)
	} catch (e) {
		console.error("error on send to discord:", e)
		return false
	}

	return true
}

async function sendDiscord({ name, email, message }: MessageProps) {
	const content = `
    Mensagem recebida de <strong>${name} - ${email}</strong>\nMensagem:\n${message}`

	const url = process.env.DISCORD_API_URL
	if (!url) throw new Error("Discord API url not be empty")

	await fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
		}),
	})
}

async function sendMail({ name, email, message }: MessageProps) {
	const user = process.env.MAIL_USER
	const pass = process.env.MAIL_PASSWORD
	const mailTo = process.env.MAIL_TO

	if (!user || !pass || !mailTo) throw new Error("Mail credentials missing")

	const transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		port: 587,
		secure: false,
		auth: {
			user,
			pass,
		},
	})

	await transporter.sendMail({
		from: `"Rafael do Carmo - website" <${user}>`,
		to: mailTo,
		subject: `
		Mensagem recebida de ${name} - ${email}`,
		html: `
		<br />
		<p>Nome: ${name}</p>
		<p>E-mail: ${email}</p>
		<br />
		<b>${message}</b>
		`,
	})
}
