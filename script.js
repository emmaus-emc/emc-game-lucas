/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 625; // x-positie van speler
var spelerY = 400; // y-positie van speler
var vijandX = 625;
var vijandY = 50;
var kogelX = 300;
var kogelY = 0;
var hp = 100;
var points = 0;
var vijandXlijst = [150, 300, 450, 600, 750, 900, 1050, 1200];
var vijandYlijst = [0];

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
//speler
      if (keyIsDown(37)) {
spelerX = spelerX - 3;
    }

  if (keyIsDown(39)) {
spelerX = spelerX + 3;
    }

    if (keyIsDown(38)) {
    spelerY = spelerY - 5;
    }
  
  if (keyIsDown(40)) {
    spelerY = spelerY + 5;
  }

 if (spelerX < 30) {
      spelerX = 30;
      }
    
    if (spelerY < 30) {
      spelerY = 30;

    } 
    if (spelerX > 1250) {
      spelerX = 1250;
      }
    
    if (spelerY > 690) {
      spelerY = 690;


    }
    //vijand
 vijandY = vijandY + 15;
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  if (spelerX > 1280) {
    spelerX = 1280;
  }
  if (spelerY > 720) {
    spelerY = 720;
  }
  if (spelerX < 0) {
    spelerX = 0;
  }
  if (spelerY < 0) {
    spelerY = 0;
  }
  if (vijandY > 720) {
    vijandY = 0;
  }

for (var i = 0; i < 8; i = i + 1) {
    if (vijandXlijst[i] - spelerX < 50 &&
      vijandXlijst[i] - spelerX > -50 &&
      vijandY - spelerY < 50 &&
      vijandY - spelerY > -50) {
      console.log("geraakt");
      hp = hp - 1;
    }
  }




  // botsing kogel tegen vijand
  for (var i = 0; i < 8; i = i + 1) {
    if (kogelX - vijandXlijst[i] < 50 && kogelX - vijandXlijst[i] > -50 && kogelY - vijandY < 50 && kogelY - vijandY > -50) {
      console.log("geraakt");

    }
  }
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
createCanvas(1280, 720);

  fill(42, 212, 198);
  rect(0, 0, 1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('Black');
  // vijand
fill("red")
for
  (var i = 0; i < 8; i = i + 1) {
    ellipse(vijandXlijst[i], vijandY - 25, 50, 50);
  }

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
textSize(64);
fill("white");
  text(hp, 20, 60);
  points = points + 1 / 50;
  text('points: \n' + floor(points), 1000, 50)

  if (vijandX - spelerX < 50 &&
    vijandX - spelerX > -50 &&
    vijandY - spelerY < 50 &&
    vijandY - spelerY > -50) {
    
    hp = hp - 1;
    }
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (hp <= 0) {
    return true
  }
  else {
    return false;
  }

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */


/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver(hp < 1)) {

      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  textSize(150)
    fill('white')
    text('Game over',250,360)
    textsize(90)
    fill('white')
    text('score'+ floor(points), 170, 340)

  }
}
 