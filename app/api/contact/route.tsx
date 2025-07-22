// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { name, email, phone, message } = body;
	console.log(
		`[
					${process.env.FIRST_CONTACT_RECEIVER_EMAIL},
					${process.env.SECOND_CONTACT_RECEIVER_EMAIL}
				]`
	);

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: true, // true for 465, false for other ports
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	try {
		const info = await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: `${process.env.FIRST_CONTACT_RECEIVER_EMAIL}`,
			envelope: {
				from: `${email}`,
				to: [
					`${process.env.FIRST_CONTACT_RECEIVER_EMAIL}`,
					`${process.env.SECOND_CONTACT_RECEIVER_EMAIL}`
				]
			},
			subject: `Contact Form Submission from ${name}`,
			html: `
			<h2>New Contact Request</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${phone}</p>
			<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
		  `
		});

		console.log('Envelope used:', info.envelope);

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ success: false, error: 'Failed to send email' },
			{ status: 500 }
		);
	}
}
