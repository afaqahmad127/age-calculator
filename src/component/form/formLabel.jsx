import React from 'react';
import { Form } from 'react-bootstrap';

export const FormLabel = ({ label, isError = false }) => {
	return (
		<Form.Label
			className={`bold-text ${isError ? 'text-danger' : 'text-dark'}`}
			style={{
				letterSpacing: '2px',
			}}
		>
			{label}
		</Form.Label>
	);
};
