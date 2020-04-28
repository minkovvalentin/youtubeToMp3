import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Button from '@material-ui/core/Button';
import { fetchEndpointBasedOnContentType } from '../../global';
import EnterLink from '../ui/EnterLink';

const SendLinkToServerComponent = () => {

	const [code, setCode] = useState(null);
	const [codeType, setCodeType] = useState(null);

	const onSubmit = async () => {
		sendServerRequest(codeType, code);
	}

	const sendServerRequest = async (codeType, code) => {
		const endpoint = fetchEndpointBasedOnContentType(codeType, code);
		// complex POST request with JSON, headers:
		fetch((endpoint), {
			method: 'POST',
		}).then(r => {
			console.log(r);
		})
	}

	return (
		<div className="main-container">
			<style jsx>
				{`
					.enter-link-container{	
					text-align:center;
					display:grid;
					grid-row-gap: 10px;
				}`}
			</style>
			<div className="enter-link-container">
				<EnterLink
					setCode={setCode}
					setCodeType={setCodeType}
				/>
				<Button
					style={{ width: '50%', margin: '0 auto' }}
					onClick={() => onSubmit()}
					disabled={code ? false : true}
					color="primary"
					variant="outlined">
					Submit
				</Button>
			</div>
		</div>

	);
}

export default SendLinkToServerComponent