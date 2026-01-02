"use client";
import { useEffect } from "react";

export default function BrandBannerVideo({ Component = null }) {
  //  useEffect(() => {
  //   const snowContainer = document.getElementById("snow");

  //   const flakes = 150; // snowflakes ki density
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  //   for (let i = 0; i < flakes; i++) {
  //     const flake = document.createElement("div");
  //     flake.className = "absolute bg-white rounded-full opacity-70";
      
  //     const size = Math.random() * 4 + 2; // size 2px - 6px
  //     flake.style.width = `${size}px`;
  //     flake.style.height = `${size}px`;
  //     flake.style.top = `${Math.random() * height}px`;
  //     flake.style.left = `${Math.random() * width}px`;
  //     flake.style.animation = `fall ${3 + Math.random() * 5}s linear infinite`;
      
  //     snowContainer.appendChild(flake);
  //   }
  // }, []);
  
    return (
      <>
{/* <div id="snow" className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"></div> */}
      <section className="brand-main-banner-video flex items-start md:items-center justify-strat md:justify-center gap-4 md:py-14 h-full ">
        {/* <div className="snow"></div> */}
        <video
          className="brand-video"
          id="brandVideo"
          autoPlay={true}
          loop={true}
          muted
          controls={false}
        >
          <source src="/images/brand-vid.mp4" />
          {/* <source src="https://videos.ctfassets.net/0g2c0d4v74kt/7JddRckDmiDTFoj2zkuibz/19a06bc6173d8b205ead99ba8b0a0307/brand-vid.mp4" /> */}
  
        </video>
        {Component ? <Component /> : ''}
      </section>
     
      </>
    );
  }