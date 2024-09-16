const wrapper = document.getElementById('wrapper');

const tableDiv = document.createElement('div');

window.addEventListener('keydown', (e) => {
    tableDiv.innerHTML =`
    <table>
    <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key === " " ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    `
    wrapper.appendChild(tableDiv);
})