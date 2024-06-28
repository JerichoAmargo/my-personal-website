document.addEventListener("DOMContentLoaded", function() {
    const typedText = "Jericho L. Amargo";
    const typedName = document.getElementById("typed-name");
    const cursor = document.getElementById("cursor");
    let index = 0;

    function type() {
        if (index < typedText.length) {
            typedName.textContent += typedText.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            cursor.style.visibility = 'visible'; // Show cursor after typing
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbarNav");
    let lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            navbar.style.top = `-${navbarHeight}px`;
        } else {
            // Scroll Up
            if(st + window.innerHeight < document.documentElement.offsetHeight) {
                navbar.style.top = "0px";
            }
        }

        lastScrollTop = st;
    }, false);
});

