let fields = [
  'cross',
  'circle',
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

let currentPlayer = 'circle';

function init() {
  render();
}

function render() {
  const container = document.getElementById('container');

  let tableHTML = '<table>';

  for (let i = 0; i < 3; i++) {
    tableHTML += '<tr>';

    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;

      tableHTML += `<td onclick="handleClick(${index})">`;

      if (fields[index] === 'cross') {
        tableHTML += generateCrossSVG();
      } else if (fields[index] === 'circle') {
        tableHTML += generateRingSVG();
      }

      tableHTML += '</td>';
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</table>';

  container.innerHTML = tableHTML;
}

function handleClick(index) {
  if (fields[index] === null) {
    fields[index] = currentPlayer;

    const tdElement = document.querySelector(`[onclick="handleClick(${index})"]`); //Query-Selector('Name, der gesuchten CSS Klasse') oder wenn nicht gefunden, dann return null

    tdElement.innerHTML = currentPlayer === 'cross' ? generateCrossSVG() : generateRingSVG(); //ternäre Bedingung = if currentplayer = 'cross' -> generateCrossSVG(), else generateRingSVG()
    tdElement.onclick = null;

    currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle'; //s.o.
  }
}

function generateRingSVG() {
    const color = '#00B0EF';
    const ringSize = 35;
    const containerSize = 80; // 10px zusätzlicher Platz auf jeder Seite
    const animationDuration = 200;

    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${containerSize}" height="${containerSize}" viewBox="0 0 ${containerSize} ${containerSize}">
        <circle cx="${containerSize / 2}" cy="${containerSize / 2}" r="${ringSize / 2}" fill="none" stroke="${color}" stroke-width="${ringSize / 8}">
          <animate attributeName="r" from="${ringSize / 2}" to="${ringSize}" dur="${animationDuration}ms" fill="freeze" />
        </circle>
      </svg>
    `;

    return svgCode;
}

function generateCrossSVG() {
    const color = '#FFC000';
    const crossSize = 35;
    const containerSize = 80;
    const animationDuration = 200;
  
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${containerSize}" height="${containerSize}" viewBox="0 0 ${containerSize} ${containerSize}">
        <line x1="${containerSize / 2}" y1="${containerSize / 2}" x2="${containerSize / 2}" y2="0" stroke="${color}" stroke-width="${crossSize / 8}" transform="rotate(45, ${containerSize / 2}, ${containerSize / 2})">
          <animate attributeName="y2" from="${containerSize / 2}" to="0" dur="${animationDuration}ms" fill="freeze" />
        </line>
        <line x1="${containerSize / 2}" y1="${containerSize / 2}" x2="0" y2="${containerSize / 2}" stroke="${color}" stroke-width="${crossSize / 8}" transform="rotate(45, ${containerSize / 2}, ${containerSize / 2})">
          <animate attributeName="x2" from="${containerSize / 2}" to="0" dur="${animationDuration}ms" fill="freeze" />
        </line>
        <line x1="${containerSize / 2}" y1="${containerSize / 2}" x2="${containerSize}" y2="${containerSize / 2}" stroke="${color}" stroke-width="${crossSize / 8}" transform="rotate(45, ${containerSize / 2}, ${containerSize / 2})">
          <animate attributeName="x2" from="${containerSize / 2}" to="${containerSize}" dur="${animationDuration}ms" fill="freeze" />
        </line>
        <line x1="${containerSize / 2}" y1="${containerSize / 2}" x2="${containerSize / 2}" y2="${containerSize}" stroke="${color}" stroke-width="${crossSize / 8}" transform="rotate(45, ${containerSize / 2}, ${containerSize / 2})">
          <animate attributeName="y2" from="${containerSize / 2}" to="${containerSize}" dur="${animationDuration}ms" fill="freeze" />
        </line>
      </svg>
    `;
  
    return svgCode;
  }