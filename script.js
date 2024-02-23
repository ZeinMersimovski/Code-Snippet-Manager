function addSnippet() {
    var language = document.getElementById("language").value;
    var code = document.getElementById("code").value;

    if (language && code) {
        var snippetList = document.getElementById("snippets");
        var li = document.createElement("li");
        li.textContent = language + ": " + code;
        snippetList.appendChild(li);

        // Clear input fields
        document.getElementById("language").value = "";
        document.getElementById("code").value = "";
    } else {
        alert("Please enter both language and code.");
    }
}
