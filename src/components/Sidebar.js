import React from 'react';
import './App.css';

export function SideBarItem(props) {
	const highlight = props.highlight ? 'highlight-item' : null;
	return (
		<Form className="Sidebar">
			<Form.Group controlId="formGroup1">
				<Form.Label />
				<Form.Control type="form1" placeholder=" " />
			</Form.Group>
			<Form.Group controlId="formGroup2">
				<Form.Label>Password</Form.Label>
				<Form.Control type="form2" placeholder=" " />
			</Form.Group>
		</Form>
	);
}
