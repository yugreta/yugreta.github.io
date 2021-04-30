accentRule = document.styleSheets[1].cssRules[0];
darkColors = new Map([["pink", "#9a6c75"], ["#ffcc4d", "#bea262"], ["#57b3fc", "#3873a1"]]);
currentColor = "pink";

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  dark();
}
function light() {
    document.body.classList.remove("dark");
    setColor(currentColor);
}
function dark() {
    document.body.classList.add("dark");
    setColor(currentColor);
}
function setColor(color) {
    currentColor = color;
    if (document.body.classList.contains("dark")) {
        accentRule.style.setProperty("--accent-color", darkColors.get(color));
    } else {
        accentRule.style.setProperty("--accent-color", color);
    }
}

updatesDiv = document.getElementById("updates");
firebase.firestore().collection("updates").doc("updates").onSnapshot((doc) => {
    updatesContent = "";
    for (line of doc.data().updates) {
        updatesContent += `<h4>${line}</h4>`;
    }
    updatesDiv.innerHTML = updatesContent;
});

console.log("(\\_/)\n(•ㅅ•)\n/  >🍰\nwelcome! this is for you");