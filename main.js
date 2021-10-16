const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  playerNum: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['pistol', 'machine gun'],
  attack: function (name) {
    console.log(name + ' Figth...');
  }
};

const player2 = {
  playerNum: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword', 'hammer'],
  attack: function (name) {
    console.log(name + ' Figth...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
};

function createPlayer(playerObject) {
  const $player = createElement('div', 'player' + playerObject.playerNum);
  const $progressbar = createElement('div', 'progressbar');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $character = createElement('div', 'character');
  const $p = createElement('p');
  const $img = createElement('img');

  $p.innerText = playerObject.name;
  $img.src = playerObject.img;
  $life.style.width = `${playerObject.hp}%`;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $name.appendChild($p);
  $character.appendChild($img);

  return $player;
};

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.playerNum + ' .life');
  player.hp -= Math.ceil(Math.random() * 20);
  if (player.hp >= 0) {
    $playerLife.style.width = player.hp + '%';
  } else {
    player.hp = 0;
    $playerLife.style.width = '0%';
    $randomButton.disabled = true;
  }

  winner();
}

function winner() {
  if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(draw());
  } else if (player1.hp == 0) {
    $arenas.appendChild(playerWin(player2.name));
  } else if (player2.hp == 0) {
    $arenas.appendChild(playerWin(player1.name));
  }
}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' win';

  return $winTitle;

}

function draw() {
  // const $drawTitle = createElement('div', 'drawTitle');
  // $drawTitle.innerText = 'draw';

  // return $drawTitle;
}

$randomButton.addEventListener('click', function () {
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));