import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

function EnterLink(props) {
	const [radioValue, setRadioValue] = useState('');
	const id = props.id + props.name
	return (
		<div>
			<input
				checked={props.checked}
				type="radio"
				name={props.name}
				value={props.value}
				id={id}
				onChange={(event) => props.change(event.target.value)}
			/>
			<label htmlFor={id}>{props.label}</label>
		</div>
	);
}

export default EnterLink;