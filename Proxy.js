// HTML
<form onsubmit="return openWebsite()">
    <input type="text" id="urlInput" placeholder="Enter URL">
    <button type="submit">Go</button>
</form>
<p id="errorText" style="color: red; display: none;"></p>

// JavaScript
function openWebsite() {
    const url = document.getElementById('urlInput').value;
    if (url.trim() === '') {
        document.getElementById('errorText').innerText = 'Please enter a valid URL';
        document.getElementById('errorText').style.display = 'block';
        return false;
    }
    const finalUrl = `https://www.example.com/service/${url}`;
    window.location.href = finalUrl;
    return false; // Prevent form submission
}
