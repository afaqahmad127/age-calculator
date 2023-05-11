import React from 'react';
import { Form } from 'react-bootstrap';

export const FormInput = ({ type, placeHolder, defaultValue, required }) => {
	return (
		<Form.Control
			required={required}
			type={type}
			placeholder={placeHolder}
			defaultValue={defaultValue}
		/>
	);
};
