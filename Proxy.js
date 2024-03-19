// HTML
<form id="urlForm">
    <input type="text" id="urlInput" placeholder="Enter URL">
    <button type="submit">Add Service</button>
</form>

// JavaScript
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    const modifiedUrl = url + '/service/example.com';
    console.log(modifiedUrl);
});
