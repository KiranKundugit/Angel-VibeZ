let btn = document.querySelector(".read-more");
btn.addEventListener("click", () => {
    let para = document.querySelector("#more");
    let strMore = `We don’t just stream music; we cultivate an environment dedicated to mental well-being and emotional balance through sound.
By collaborating with independent ambient artists and sound therapists, we handpick frequencies that naturally lower stress and invite a sense of calm.

Join our community of listeners who have made Angel VibeZ their daily sanctuary for peace, clarity, and creative inspiration.`
    para.innerText = strMore;
    btn.innerText = "End";
})