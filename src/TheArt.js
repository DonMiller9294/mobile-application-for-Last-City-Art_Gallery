import Carousel from "react-bootstrap/Carousel";
import React from "react";

function TheArt() {
	return (
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img className="d-block w-100" src="bird.jpg" alt="First slide" />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="eye.jpg" alt="Second slide" />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="mosiac.jpg" alt="Third slide" />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default TheArt;
