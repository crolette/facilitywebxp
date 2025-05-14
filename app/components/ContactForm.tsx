'use client';
import { dictionaries, Lang } from '../../lib/dictionaries';
import Button from './Button';
import { FormEventHandler, useState } from 'react';

export default function ContactForm({
	lang
}: {
	lang: Lang;
	headline?: string;
}) {
	const t = dictionaries[lang];
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: ''
	});
	const [status, setStatus] = useState('');

	const submit: FormEventHandler = async (e) => {
		e.preventDefault();
		setStatus('Sending...');

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData)
		});

		if (res.ok) {
			setStatus('Email sent!');
			setFormData({ name: '', email: '', phone: '', message: '' });
		} else {
			setStatus('Failed to send email.');
		}
	};

	return (
		<div className='grid grid-cols-[2fr_4fr] gap-4'>
			<div className=' flex flex-col items-center justify-center p-6'>
				<p className='bg-secondary p-20'>
					<b>FWebxp SRL</b>
					<br />
					Rue sur le Hour 16 Bis <br /> 4910 Theux <br /> Belgique <br />
					BE 1020.619.548
				</p>
			</div>
			<div className='p-6  '>
				<form
					onSubmit={submit}
					className='flex flex-col gap-6 w-full '>
					<p>{status}</p>
					<div className='w-full'>
						<label
							htmlFor='name'
							className='hidden'>
							{t.contactName}
						</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder={t.contactName}
							className='border-b border-accent w-full p-2 focus:bg-secondary'
							required
							value={formData.name}
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
						/>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div className=''>
							<label
								htmlFor='tel'
								className='hidden'>
								{t.contactPhone}
							</label>
							<input
								type='text'
								name='tel'
								id='tel'
								value={formData.phone}
								placeholder={t.contactPhone}
								className='border-b border-accent w-full p-2 focus:bg-secondary'
								required
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='hidden'>
								{t.contactEmail}
							</label>
							<input
								type='email'
								name='email'
								id='email'
								value={formData.email}
								placeholder={t.contactEmail}
								className='border-b border-accent w-full p-2 focus:bg-secondary'
								required
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='message'
							className='hidden'>
							{t.contactMessage}
						</label>
						<textarea
							name='message'
							id='message'
							value={formData.message}
							placeholder={t.contactMessage}
							className='border-b border-accent w-full p-2 focus:bg-secondary'
							required
							minLength={100}
							rows={5}
							onChange={(e) =>
								setFormData({ ...formData, message: e.target.value })
							}
						/>
					</div>
					<Button value={'Send'}></Button>
				</form>
			</div>
		</div>
	);
}
