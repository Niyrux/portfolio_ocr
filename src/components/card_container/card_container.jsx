import React from "react";
import Card from "../card_projet/card";
import "./style.css";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cardcontainer() {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".card");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", 
      scrollTrigger: {
        trigger: ".containerCard",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (sections.length - 1),
        touch: true 
      }
    });
  });


  return (
    <div className="containerCard">
      <Card
        title="Card 1"
        description="Description for Card 1"
        img="https://example.com/image1.jpg"  
        link="https://example.com"
      />
      <Card
        title="Card 2"
        description="Description for Card 2"
        img="https://example.com/image2.jpg"  
        link="https://example.com"
      />
      <Card
        title="Card 3"
        description="Description for Card 3"
        img="https://example.com/image3.jpg"  
        link="https://example.com"
      />
      <Card
        title="Card 3"
        description="Description for Card 3"
        img="https://example.com/image3.jpg"  
        link="https://example.com"
      />
      <Card
        title="Card 3"
        description="Description for Card 3"
        img="https://example.com/image3.jpg"  
        link="https://example.com"
      />
      <Card
        title="Card 3"
        description="Description for Card 3"
        img="https://example.com/image3.jpg"  
        link="https://example.com"
      />
    </div>
  );
}

export default Cardcontainer;
