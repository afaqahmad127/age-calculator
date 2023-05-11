import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { FormLabel } from './formLabel';
import { FormInput } from './formInput';

export const FormGroup = ({
	label,
	placeHolder,
	defaultValue,
	type,
	id,
	error,
	required,
}) => {
	return (
		<Form.Group
			as={Col}
			md="2"
			controlId={id}
		>
			<FormLabel
				label={label}
				isError={error}
			/>
			<FormInput
				defaultValue={defaultValue}
				type={type}
				required={required}
				placeHolder={placeHolder}
			/>
			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
		</Form.Group>
	);
};
