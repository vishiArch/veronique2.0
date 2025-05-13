gsap.set(".menu", {
    display: "none",
})
function openMenu() {
    gsap.to(".menu", {
        display: "block",
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
            document.body.style.overflow = "hidden";
        }
    });
}

function closeMenu() {
    gsap.to(".menu", {
        display: "none",
        scale: 0.9,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
            gsap.set(".menu", { display: "none" });
            document.body.style.overflow = "auto";
        },
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
