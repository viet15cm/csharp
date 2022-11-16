﻿const copyButtonLabel = "Copy Code";

// you can use a class selector instead if you, or the syntax highlighting library adds one to the 'pre'. 
const collection = document.getElementsByClassName("code-light-height");

//.coppy - code
let blocks = document.querySelectorAll(".coppy-code");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");
        button.innerText = copyButtonLabel;
        button.addEventListener("click", copyCode);
        block.appendChild(button);
    }
});

async function copyCode(event) {
    const button = event.srcElement;
    const pre = (button.parentElement).parentElement;
    let code = pre.querySelector("code");
    let text = code.innerText;
    await navigator.clipboard.writeText(text);

    button.innerText = "Code Copied";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 1000)
}
