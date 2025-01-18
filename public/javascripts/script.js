document.querySelector(".loginBtn").addEventListener("click", () => {
    gsap.timeline()
    .to(".boxSlide", {
        duration: 1, 
        x: "70%", 
        scaleX: 3, 
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".boxSlide", {
                duration: 1,
                scaleX: 1, 
                x: "-100%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".contentSlide", {
        duration: 1, 
        x: "-30%", 
        scaleX: 1,
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".contentSlide", {
                duration: 1,
                scaleX: 1,
                x: "-100%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".imageSlide", {
        duration: 1, 
        x: "0%", 
        scaleX: 1,
        ease: "power2.inOut",
        onComplete: function() {
            gsap.to(".imageSlide", {
                duration: 1,
                scaleX: 1,
                x: "0%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".signinSlide", {
        duration: 1, 
        x: "0%", 
        scaleX: 1,
        ease: "power2.inOut",
        onComplete: function() {
            gsap.to(".signinSlide", {
                duration: 1,
                scaleX: 1,
                x: "-200%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".loginSlide", {
        duration: 1, 
        x: "0%", 
        scaleX: 1,
        ease: "power2.inOut",
        onComplete: function() {
            gsap.to(".loginSlide", {
                duration: 1,
                scaleX: 1,
                x: "-275%", 
                ease: "power4.inOut"
            });
        }
    })

});

document.querySelector(".registerBtn").addEventListener("click", () => {
    gsap.timeline()
    .to(".boxSlide", {
        duration: 1, 
        x: "-170%", 
        scaleX: 3, 
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".boxSlide", {
                duration: 1,
                scaleX: 1, 
                x: "0%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".contentSlide", {
        duration: 1, 
        x: "-70%", 
        scaleX: 1,
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".contentSlide", {
                duration: 1,
                scaleX: 1,
                x: "0%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".imageSlide", {
        duration: 1, 
        x: "0%", 
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".imageSlide", {
                duration: 1,
                x: "0%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".signinSlide", {
        duration: 1, 
        x: "-200%", 
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".signinSlide", {
                duration: 1,
                x: "0%", 
                ease: "power4.inOut"
            });
        }
    })

    gsap.timeline()
    .to(".loginSlide", {
        duration: 1, 
        x: "-275%", 
        ease: "power4.inOut",
        onComplete: function() {
            gsap.to(".loginSlide", {
                duration: 1,
                x: "0%", 
                ease: "power4.inOut"
            });
        }
    })
});