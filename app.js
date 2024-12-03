function handleSideBar() {
    document.getElementById("my-drawer-2").checked = false
}

window.addEventListener("scroll", () => {
    const bottomNavbar = document.querySelector(".bottomNavbar");
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const bottomReached = Math.ceil(windowHeight + scrollY) >= documentHeight;

    if (bottomReached) {
        // Hide navbar when fully scrolled to the bottom
        bottomNavbar.classList.add("translate-y-[100%]");
    } else {
        // Show navbar otherwise
        bottomNavbar.classList.remove("translate-y-[100%]");
    }
});