import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Extracurricular(props) {
	const [Data, setData] = useState({});
	useEffect(() => {
		setData(props);
	}, [props]);

	return (
		<div>
			{Data.data?.length &&
				Data.data?.map((value, ind) => {
					return (
						<section className={`etcSection ${ind % 2 !== 0 ? "sectionBackground" : ""}`} key={ind}>
							<div className="">
								<h2 className="itemHeader">{value.section}</h2>
								<div className="carouselContainer">
                                    <EmblaCarousel items={value.content} controls={value.content?.length > 1} />
								</div>
								<div className="itemHeader"></div>
							</div>
						</section>
					);
				})}
			<div className="pg-5"></div>
		</div>
	);
}

function EmblaCarousel({ items, controls }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    
    return (
        <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex">
                {items?.map((item, index) => (
                    <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                        <img className="block w-full h-80 object-cover itemPlacement" src={item.img} alt={item.header || ""} loading="lazy" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end items-center text-white bg-black/50 p-6 text-center">
                            <h3 className="text-xl font-bold mb-2">{item.header}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            {controls && (
                <>
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 w-10 h-10 flex items-center justify-center rounded-full z-10" onClick={() => emblaApi?.scrollPrev()}>❮</button>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 w-10 h-10 flex items-center justify-center rounded-full z-10" onClick={() => emblaApi?.scrollNext()}>❯</button>
                </>
            )}
        </div>
    );
}
