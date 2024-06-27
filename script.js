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
