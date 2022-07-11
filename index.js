const question = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const score = document.getElementById("score");
const container = document.querySelector(".container");
const falseAnserAudio = new Audio("./Wrong-answer-sound-effect.mp3");
const trueAnserAudio = new Audio("./magic-idea-01-sound-effect-17761231.mp3");

function loadTest() {
  let storage = localStorage.getItem("test");
  if (storage != null) {
    return JSON.parse(storage);
  }
  return [];
}

var game = {
  test: loadTest(),

  currentTest: {},

  score: 0,

  life: 4,

  gameOver: function () {
    this.life -= 1;

    if (this.life == 0) {
      container.style.display = "none";
      score.innerHTML = "Sizning balingiz: " + this.score;

      document.getElementById("gameOver").innerHTML = "GAME OVER";
    }
  },

  startTest: function () {
    if (this.test.length > 0) {
      let random = Math.floor(Math.random() * this.test.length);
      this.currentTest = this.test[random];

      question.innerHTML = this.currentTest.question;
      a.innerHTML = this.currentTest.a;
      b.innerHTML = this.currentTest.b;
      c.innerHTML = this.currentTest.c;
      d.innerHTML = this.currentTest.d;

      let index = this.test.findIndex((val) => val === this.currentTest);
      this.test.splice(index, 1);

      a.style.backgroundColor = "white";
      b.style.backgroundColor = "white";
      c.style.backgroundColor = "white";
      d.style.backgroundColor = "white";
    } else {
      alert("Test tugadi");
      container.style.display = "none";
      score.innerHTML = "Sizning balingiz: " + this.score;
    }

    console.log(this.life);
  },
};

game.startTest();

a.addEventListener("click", function () {
  let answer = a.innerText;
  if (game.currentTest.answer === answer) {
    game.score += 10;
    a.style.backgroundColor = "green";

    trueAnserAudio.play();

    setTimeout(() => {
      game.startTest();
    }, 1000);
  } else {
    a.style.backgroundColor = "red";
    falseAnserAudio.play();

    setTimeout(() => {
      game.gameOver();
    }, 1000);
  }
});

b.addEventListener("click", function () {
  let answer = b.innerText;
  if (game.currentTest.answer === answer) {
    game.score += 10;
    b.style.backgroundColor = "green";

    trueAnserAudio.play();

    setTimeout(() => {
      game.startTest();
    }, 1000);
  } else {
    b.style.backgroundColor = "red";
    falseAnserAudio.play();

    setTimeout(() => {
      game.gameOver();
    }, 1000);
  }
});

c.addEventListener("click", function () {
  let answer = c.innerText;
  if (game.currentTest.answer === answer) {
    game.score += 10;
    c.style.backgroundColor = "green";

    trueAnserAudio.play();

    setTimeout(() => {
      game.startTest();
    }, 1000);
  } else {
    c.style.backgroundColor = "red";
    falseAnserAudio.play();

    setTimeout(() => {
      game.gameOver();
    }, 1000);
  }
});

d.addEventListener("click", function () {
  let answer = d.innerText;
  if (game.currentTest.answer === answer) {
    game.score += 10;
    d.style.backgroundColor = "green";

    trueAnserAudio.play();

    setTimeout(() => {
      game.startTest();
    }, 1000);
  } else {
    d.style.backgroundColor = "red";
    falseAnserAudio.play();

    setTimeout(() => {
      game.gameOver();
    }, 1000);
  }
});
