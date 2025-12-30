const form = document.getElementById('callForm');
const list = document.getElementById('callList');

let calls = JSON.parse(localStorage.getItem('calls')) || [];

function render() {
  list.innerHTML = '';
  calls.forEach((call, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${call.customer}</strong> (${call.type})<br>${call.notes}<br><small>${call.time}</small>
    <button onclick="removeCall(${index})">Close</button>`;
    list.appendChild(li);
  });
}

function removeCall(index) {
  calls.splice(index, 1);
  localStorage.setItem('calls', JSON.stringify(calls));
  render();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  calls.push({
    customer: customer.value,
    type: type.value,
    notes: notes.value,
    time: new Date().toLocaleString()
  });
  localStorage.setItem('calls', JSON.stringify(calls));
  form.reset();
  render();
});

render();
