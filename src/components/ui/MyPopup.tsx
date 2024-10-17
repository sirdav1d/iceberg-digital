/** @format */

'use client';

import { Popup } from '@typebot.io/nextjs';
import React from 'react';

export default function MyPopup() {
	return (
		<>
			<Popup
				typebot='my-typebot-oiffwhn'
				autoShowDelay={15000}
			/>
		</>
	);
}
