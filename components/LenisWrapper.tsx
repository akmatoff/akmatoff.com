"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({ lerp: 0.06 });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <></>;
}
