
 // Navigation menu animation
    gsap.from("nav ul li", {
      opacity: 0,
      x: -280,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.to("nav ul li", {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out"
    });
  

// Contact section animation
     gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%"
      }
    });



  
    // Footer animation
    gsap.from("footer", {
      opacity: 1,
      y: 20,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 95%"
      }
    });




      
      









  
  