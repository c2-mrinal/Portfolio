import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./blog.css";

import { Card, CardImage, CardHeader, CardDescription, CardContainer } from "./blogStyledComponent";
import { useRouter } from "next/navigation";
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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	return (
        <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex">
                {carouselItems.map((item, index) => (
                    <div className="flex-[0_0_100%] min-w-0 relative carouselContainer" key={index}>
                        <img src={item.src} alt={item.label} style={{ minHeight: "60vh", objectFit: "cover", width: "100%" }} />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end items-center text-white bg-black/50 p-6 text-center">
                            <h3 className="text-2xl font-bold mb-2">{item.label}</h3>
                            <p className="text-md">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 w-10 h-10 flex items-center justify-center rounded-full z-10" onClick={() => emblaApi?.scrollPrev()}>❮</button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 w-10 h-10 flex items-center justify-center rounded-full z-10" onClick={() => emblaApi?.scrollNext()}>❯</button>
        </div>
	);
};
const BlogCard = ({ image, header, description, blogPath }: any) => {
	const router = useRouter();

	return (
		<Card
			onClick={() => {
				router.push(blogPath);
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
