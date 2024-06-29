import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./blog.css";

import { Card, CardImage, CardHeader, CardDescription, CardContainer } from "./blogStyledComponent";
const blogData = [
	{
		title: "Understanding React Hooks",
		description:
			"An in-depth look at how React hooks work and how to use them effectively.An in-depth look at how React hooks work and how to use them effectively.An in-depth look at how React hooks work and how to use them effectively.",
		link: "#",
	},
	{
		title: "Styling in React",
		description: "Learn how to style your React components using various methods.",
		link: "#",
	},
	{
		title: "State Management with Redux",
		description: "A guide to managing state in your React applications using Redux.",
		link: "#",
	},
];
const carouselItems = [
	{
		src: "https://via.placeholder.com/800x400",
		label: "First slide label",
		text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	},
	{
		src: "https://via.placeholder.com/800x400",
		label: "Second slide label",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		src: "https://via.placeholder.com/800x400",
		label: "Third slide label",
		text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
	},
];

const CustomCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{carouselItems.map((item, index) => (
				<Carousel.Item key={index}>
					<div className="carouselContainer">
						<img src={item.src} alt={item.label} style={{ minHeight: "60vh", objectFit: "cover", width: "100%" }} />
					</div>
					<Carousel.Caption>
						<h3>{item.label}</h3>
						<p>{item.text}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
const BlogCard = ({ image, header, description }) => (
	<Card>
		<CardImage src={image} alt={header} />
		<CardHeader>{header}</CardHeader>
		<CardDescription>{description}</CardDescription>
	</Card>
);

const Blog = () => (
	<>
		<CustomCarousel />
		<CardContainer>
			{blogData.map((blog, index) => (
				<BlogCard key={index} image={blog.image} header={blog.header} description={blog.description} />
			))}
		</CardContainer>
	</>
);

export default Blog;
