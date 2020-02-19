import React, { useState } from 'react';
import EnterLink from '../components/EnterLink';
import style from '../styles/pages/index';
import Button from '@material-ui/core/Button';

const HomePage = () => {

	const [code, setCode] = useState(null);
	const [codeType, setCodeType] = useState(null);

	const onSubmit = async () => {
		console.log('submitted!');
	}

	return (
		<div className="main-container">
			<style jsx>
				{style}
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

export default HomePage