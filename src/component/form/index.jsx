import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormGroup } from './formGroup';
import { ArrowIcon } from '../icons';

export const MyForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.checkValidity()) {
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
		>
			<Row className="mb-3">
				<FormGroup
					type={'text'}
					placeHolder={'Day'}
					defaultValue={'1'}
					required={true}
					label={'DAY'}
					error={validated}
					id={'day'}
				/>
				<FormGroup
					type={'text'}
					placeHolder={'Month'}
					defaultValue={''}
					required={true}
					label={'MONTH'}
					error={validated}
					id={'month'}
				/>
				<FormGroup
					type={'text'}
					placeHolder={'Year'}
					defaultValue={'1999'}
					required={true}
					label={'YEAR'}
					error={validated}
					id={'year'}
				/>
			</Row>
			<Row className="d-flex align-items-center pt-3">
				<Col
					md={8}
					style={{ padding: '0 0 0 10px' }}
				>
					<hr />
				</Col>
				<Col
					style={{ padding: '0 0 0 0' }}
					md={2}
				>
					<div
						className="primary-hover-dark d-flex justify-content-center align-items-center rounded-circle"
						style={{
							height: '70px',
							width: '70px',
						}}
					>
						<ArrowIcon size={40} />
					</div>
				</Col>
			</Row>
		</Form>
	);
};
export * from './formGroup';
export * from './formInput';
export * from './formLabel';
