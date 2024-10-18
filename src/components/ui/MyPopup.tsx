/** @format */

'use client';

import { Bubble } from '@typebot.io/nextjs';

export default function MyPopup() {
	return (
		<>
			<Bubble
				typebot='my-typebot-oiffwhn'
				theme={{
					button: { backgroundColor: '#fee600', iconColor: '#000000' },
					chatWindow: { backgroundColor: '#163d3c', maxWidth: '50vh' },
					placement: 'left',
				}}
			/>
		</>
	);
}
