const scorpion = {
  name: 'Scorpion',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['pistol', 'machine gun'],
  attack: function () {
    console.log('name' + ' Figth...');
  }
};

const kitana = {
  name: 'Kitana',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword', 'hammer'],
  attack: function () {
    console.log('name' + ' Figth...');
  }
};

function createPlayer($playerName, $playerObject) {
  const $player = document.createElement('div');
  const $progressbar = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $character = document.createElement('div');
  const $arenas = document.querySelector('.arenas');

  $player.classList.add($playerName);
  $progressbar.classList.add('progressbar');
  $life.classList.add('life');
  $name.classList.add('name');
  $character.classList.add('character');

  const $p = document.createElement('p');
  $p.innerText = $playerObject.name;

  const $img = document.createElement('img');
  $img.src = $playerObject.img;

  $life.style.width = `${$playerObject.hp}%`;

  $arenas.appendChild($player);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $name.appendChild($p);
  $character.appendChild($img);
};

createPlayer('player1', scorpion);
createPlayer('player2', kitana);