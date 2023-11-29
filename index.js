const checkbox = document.getElementById('myCheckbox');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (this.checked) {
        document.getElementById('result').innerText = 'Checkbox is checked.';
    } else {
        document.getElementById('result').innerText = 'Checkbox is unchecked.';
    }
});