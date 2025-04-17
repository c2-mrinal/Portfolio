import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./blog.css";

import { Card, CardImage, CardHeader, CardDescription, CardContainer } from "./blogStyledComponent";
import { useNavigate } from "react-router";
const blogData = [
	{
		title: "Understanding React Hooks",
		img: "https://www.juleekleinmarketing.com/uploads/1/1/7/3/117378710/content-ideas-for-blogs-email-marketing-and-social-media-1_orig.png",
		description:
			"An in-depth look at how React hooks work and how to use them effectively.An in-depth look at how React hooks work and how to use them effectively.An in-depth look at how React hooks work and how to use them effectively.",
		blogPath: "/blog/react-hooks-cheatsheet",
	},
	{
		title: "Styling in React",
		img: "https://www.juleekleinmarketing.com/uploads/1/1/7/3/117378710/content-ideas-for-blogs-email-marketing-and-social-media-1_orig.png",

		description: "Learn how to style your React components using various methods.",
		blogPath: "#",
	},
	{
		title: "State Management with Redux",
		img: "https://www.juleekleinmarketing.com/uploads/1/1/7/3/117378710/content-ideas-for-blogs-email-marketing-and-social-media-1_orig.png",

		description: "A guide to managing state in your React applications using Redux.",
		blogPath: "/",
	},
];
const carouselItems = [
	{
		src: "https://www.blogtyrant.com/wp-content/uploads/2019/08/blog-post-ideas.png",
		label: "First slide label",
		text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	},
	{
		src: "https://www.travelpayouts.com/blog/wp-content/uploads/2019/12/content-ideas.jpg",
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
const BlogCard = ({ image, header, description, blogPath }) => {
	const navigate = useNavigate();

	return (
		<Card
			onClick={() => {
				navigate(blogPath);
			}}
		>
			<CardImage src={image} alt={header} />
			<CardHeader>{header}</CardHeader>
			<CardDescription>{description}</CardDescription>
		</Card>
	);
};

const Blog = () => (
	<>
		<CustomCarousel />
		<CardContainer>
			{blogData.map((blog, index) => (
				<BlogCard
					key={index}
					image={blog.img}
					header={blog.header}
					description={blog.description}
					blogPath={blog.blogPath}
				/>
			))}
		</CardContainer>
	</>
);

export default Blog;
