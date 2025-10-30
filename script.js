function encrypt() {
  const text = document.getElementById("text").value;
  const key = parseInt(document.getElementById("key").value);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let c = text[i];

    if (c.match(/[a-z]/)) {
      result += String.fromCharCode(((c.charCodeAt(0) - 97 + key) % 26) + 97);
    } else if (c.match(/[A-Z]/)) {
      result += String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65);
    } else {
      result += c; // leave spaces and punctuation unchanged
    }
  }

  document.getElementById("result").textContent = result;
}
