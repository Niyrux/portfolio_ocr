import React from "react";
import Card from "../card_projet/card";
import "./style.css";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../header/android-chrome-512x512.png"

gsap.registerPlugin(ScrollTrigger);

function Cardcontainer() {
  
  useGSAP(() => {
    let cards = gsap.utils.toArray(".card");

    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none", 
      scrollTrigger: {
        trigger: ".containerCard",
        start: "top+=50% center", 
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (cards.length - 1),
        touch: true,
      }
    });
  });


  return (
    <div className="containerCard" id="projets">
      <Card
        title="Créez une page web dynamique avec JavaScript"
        description="Utilisation de javascript vanilla avec une api pour connecté déconnecte un utilisateur avec création de projet / suppression"
        img="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png"  
        link="https://github.com/Niyrux/test-sophie"
      />
      <Card
        title="Optimisez le référencement d'un site"
        description="Utilisation des balises meta, du rich snippet et de waves, optimisation des performances"
        img="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png"  
        link="https://github.com/Niyrux/Nina"
      />
      <Card
        title="Débuggez le site d'une agence"
        description="Utilisation des tests unitaire, correction des bugs grâce à react développeur tools et la console"
        img="https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png"  
        link="https://github.com/Niyrux/debbug"
      />
    
      <Card
        title="Com'Sud"
        description="Refonte du site com'sud avec wordpress et avec le builder elementor"
        img="https://comsud.fr/wp-content/uploads/2023/03/logo-comsud-header.svg"  
        link="https://comsud.fr/"
      />
      <Card
        title="Collection gourmet"
        description="Confection d'un e-commerce avec woocommerce"
        img="https://collectiongourmetstore.fr/wp-content/uploads/2023/01/collection-gourmet-logo.png"  
        link="https://collectiongourmetstore.fr/"
      />
    </div>
  );
}

export default Cardcontainer;
