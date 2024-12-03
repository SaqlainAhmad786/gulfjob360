function handleSideBar() {
    document.getElementById("my-drawer-2").checked = false
}

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const bottomNavbar = document.querySelector(".bottomNavbar");
    const scrollY = window.scrollY;
    const bottomReached = window.innerHeight + scrollY >= document.body.offsetHeight;

    if (bottomReached) {
        // Hide navbar when at the bottom
        bottomNavbar.classList.add("translate-y-[100%]");
    } else {
        // Show navbar when scrolling up
        bottomNavbar.classList.remove("translate-y-[100%]");
    }

    lastScrollY = scrollY;
});