import React, { useState } from 'react';
import style from '../styles/pages/index';
import SendLinkToServer from '../components/sendLinkToServer/sendLinkToServer';

const HomePage = () => {
	return (
		<div className="main-container">
			<style jsx>
				{style}
			</style>
			<SendLinkToServer />
		</div>
	);
}

export default HomePage