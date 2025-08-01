        function changeText() {
            let text = document.getElementById("myText");
            text.innerText = "Boom! You've unlocked a colorful surprise! Keep clicking to explore more fun!";
            text.style.color = "#" + Math.floor(Math.random()*16777215).toString(16); // Random color
        }
    