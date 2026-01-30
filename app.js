function sendMessage() {
    let input = document.getElementById('userInput').value;
    let chat = document.getElementById('chat');
    let reply = "Karibu. Nikusaidie nini leo?";
    if(input.includes("nani alikuunda")) reply = "Nimeundwa na Tarik, mkuu na mmiliki wa Cipher Tech.";
    else if(input.includes("upo wapi")) reply = "Nilianzishwa Masasi, Tanzania.";
    chat.innerHTML += `<p><b>We:</b> ${input}</p>`;
    chat.innerHTML += `<p><b>Blade AI:</b> ${reply}</p>`;
    document.getElementById('userInput').value = "";
}