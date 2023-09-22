import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TheNav() {
	return (
		<>
			<Navbar bg="light" data-bs-theme="light">
				<Container>
					<Navbar.Brand href="#home">LCA</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">COLLECTIONS</Nav.Link>
						<Nav.Link href="#features">NEW ART</Nav.Link>
						<Nav.Link href="#pricing">CONTACT US</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default TheNav;
