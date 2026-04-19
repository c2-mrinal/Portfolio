import React from "react";
import AnimatedTextLine from "../Atoms/AnimatedTextLine";

export default function IntroTypography() {
    return (
        <div className="intoDesciption ">
            <AnimatedTextLine 
                text="hey there,curious minds" 
                headerClass="introHeader1" 
                spanClassNamePattern="text-ind" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${ind * 2}vw)`} 
            />
            <AnimatedTextLine 
                text="and creative souls !" 
                headerClass="introHeader2" 
                spanClassNamePattern="empty" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${[6, 7].includes(ind) ? ind * 2.5 + 0.2 : ind * 2.5}vw)`} 
            />
            <AnimatedTextLine 
                text="I'm Mrinal Kasyap," 
                headerClass="introHeader3" 
                spanClassNamePattern="empty" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)`} 
            />
            <AnimatedTextLine 
                text="your friendly neighborhood" 
                headerClass="introHeader4" 
                spanClassNamePattern="empty" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)`} 
            />
            <AnimatedTextLine 
                text="Mern Developer on a mission " 
                headerClass="introHeader5" 
                spanClassNamePattern="empty" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)`} 
            />
            <AnimatedTextLine 
                text="to create the change " 
                headerClass="introHeader6" 
                spanClassNamePattern="text-ind" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)`} 
            />
            <AnimatedTextLine 
                text="U&I crave ..." 
                headerClass="introHeader7" 
                spanClassNamePattern="text-ind" 
                getLeftStyle={(ind) => `calc( ${ind * 0.2}rem + ${ind * 2.5}vw)`} 
            />
        </div>
    );
}
