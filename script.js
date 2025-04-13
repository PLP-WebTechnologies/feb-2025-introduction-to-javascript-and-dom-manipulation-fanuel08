// Change text content and CSS style
document.getElementById('changeTextBtn').addEventListener('click', function () {
  const description = document.getElementById('description');
  description.textContent = 'The content has been changed using JavaScript!';
  description.style.color = 'darkblue';
  description.style.fontWeight = 'bold';
  description.style.fontSize = '1.2rem';
});

// Add or remove a new box element
document.getElementById('toggleBoxBtn').addEventListener('click', function () {
  const container = document.getElementById('box-container');
  const existingBox = document.getElementById('dynamic-box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'dynamic-box';
    box.textContent = 'I am a new box!';
    box.style.width = '200px';
    box.style.height = '100px';
    box.style.backgroundColor = 'lightgreen';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.marginTop = '10px';
    container.appendChild(box);
  }
});

