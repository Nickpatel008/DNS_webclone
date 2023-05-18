console.log("From App.js");
gsap.registerPlugin(ScrollTrigger);

//   appOverviewSection
gsap.to(".leftCard", {
    scrollTrigger: {
        trigger: ".leftCard",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -100,
    ease: "none",
    duration: 3
});

gsap.to(".appOverviewSection_img", {
    scrollTrigger: {
        trigger: ".appOverviewSection_img",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -130,
    ease: "none",
    duration: 3
});

//   privacySection

gsap.to(".privacySection_card", {
    scrollTrigger: {
        trigger: ".privacySection_card",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -90,
    ease: "none",
    duration: 3
});

gsap.to(".privacySection_img", {
    scrollTrigger: {
        trigger: ".privacySection_img",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -160,
    ease: "none",
    duration: 3
});

//   wrapSection

gsap.to(".wrapSection_card", {
    scrollTrigger: {
        trigger: ".wrapSection_card",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -90,
    ease: "none",
    duration: 3
});

gsap.to(".wrapSection_img", {
    scrollTrigger: {
        trigger: ".wrapSection_img",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -160,
    ease: "none",
    duration: 3
});

//   performenceSection

gsap.to(".performenceSection_card", {
    scrollTrigger: {
        trigger: ".performenceSection_card",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -90,
    ease: "none",
    duration: 3
});

// privacySection1
gsap.to(".privacySection_card1", {
    scrollTrigger: {
        trigger: ".privacySection_card1",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -90,
    ease: "none",
    duration: 3
});

gsap.to(".privacySection_img1", {
    scrollTrigger: {
        trigger: ".privacySection_img1",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: "-70%",
    ease: "none",
    duration: 3
});

// devicesSection
gsap.to(".devicesSection_card", {
    scrollTrigger: {
        trigger: ".devicesSection_card",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: -90,
    ease: "none",
    duration: 3
});

gsap.to(".devicesSection_img", {
    scrollTrigger: {
        trigger: ".devicesSection_img",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: "-80%",
    ease: "none",
    duration: 3
});
