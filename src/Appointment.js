import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React from "react";
function Appointment() {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
				<Form.Label column sm={2}>
					Email
				</Form.Label>
				<Col sm={10}>
					<Form.Control type="email" placeholder="Email" />
				</Col>
			</Form.Group>

			<Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
				<Form.Label column sm={2}>
					Password
				</Form.Label>
				<Col sm={10}>
					<Form.Control type="password" placeholder="Password" />
				</Col>
			</Form.Group>
			<fieldset>
				<Form.Group as={Row} className="mb-3">
					<Form.Label as="legend" column sm={2}></Form.Label>
				</Form.Group>
			</fieldset>
			<Form.Group as={Row} className="mb-3">
				<Col sm={{ span: 10, offset: 2 }}>
					<Button variant="secondary">SIGN IN</Button>{" "}
				</Col>
			</Form.Group>
		</Form>
	);
}

export default Appointment;
