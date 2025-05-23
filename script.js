// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});
gsap.set(".menu", {
    display: "none",
})
function openMenu() {
    gsap.to(".menu", {
        display: "block",
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
    });
}

function closeMenu() {
    gsap.to(".menu", {
        display: "none",
        scale: 0.9,
        duration: 0.2,
        ease: "power2.in",
    });
}

gsap.set(".sameIMG", {
    opacity: 0,
});

function imgAni() {
    document.querySelectorAll(".sameIMG").forEach(function (img) {
        img.addEventListener("mouseover", function () {
            gsap.to(img, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        });
        img.addEventListener("mouseout", function () {
            gsap.to(img, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            });
        });
    });
}
imgAni();

// Mouse follower on hover
const follower = document.querySelector(".cursor");

const targetDiv = document.querySelector(".project"); // Add this class to your target div


targetDiv.addEventListener("mouseenter", () => {
    follower.style.transform = "translate(-50%, -50%) scale(1)";
    follower.style.display = "block";
    follower.style.duration = "0.3s";
});
targetDiv.addEventListener("mouseleave", () => {
    follower.style.transform = "translate(-50%, -50%) scale(0)";
    follower.style.display = "none";
    follower.style.duration = "0.3s";
});
targetDiv.addEventListener("mousemove", (e) => {
    gsap.to(follower, {
        left: e.pageX,
        top: e.pageY,
        duration: 0.2,
        ease: "power2.out"
    });
});
function animate() {
    Shery.imageMasker(".sameIMG" /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: true,
        text: "Get Your Design",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet(".fa-bars" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.makeMagnet(".fa-times" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.hoverWithMediaCircle(".pageTwo .child h1" /* Element to target.*/, {
        images: ["https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600"]
    });
    Shery.makeMagnet(".pageOne button" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
animate();

