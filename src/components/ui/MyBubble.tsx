/** @format */

'use client';

import { Bubble } from '@typebot.io/nextjs';
import React from 'react';

export default function MyBubble() {
	return (
		<>
			<Bubble
				typebot='my-typebot-okmrw5c'
				theme={{
					button: { backgroundColor: '#276C69', size: 'large' },
					chatWindow: { backgroundColor: '#276C69' },
					previewMessage: {
						backgroundColor: '#276C69',
						textColor: '#276C69',
						closeButtonBackgroundColor: '#276C69',
						closeButtonIconColor: '#276C69',
					},
				}}
			/>
		</>
	);
}
