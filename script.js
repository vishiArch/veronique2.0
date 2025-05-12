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
