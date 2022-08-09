const change = document.querySelector("#change");

change.addEventListener("click", function () {
    const rgb = ["r","g","b"];
    for (let i = 0; i<3; i++){
    const el = Math.floor(Math.random() * 255)+1;
    rgb[i] = el;
    };
    const h1 = document.querySelector("h1");
    const newColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
})
