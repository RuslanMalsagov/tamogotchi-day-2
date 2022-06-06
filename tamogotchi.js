const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 3,
  mood: 2,
  getStatus: function () {
    if (this.meal === 0 || this.energy === 0 || this.mood === 0) {
      console.log(`${this.name} умер :(`);
      return false;
    }

    return `Имя: ${this.name}, Еда:  ${
      this.meal < 3
        ? "Я " + "голоден " + "(" + this.meal + ")"
        : "Я " + "не " + "голоден " + "(" + this.meal + ")"
    }, Энергия: ${
      this.energy < 3
        ? "Я " + "хочу " + "спать " + "(" + this.energy + ")"
        : "Я " + "не " + "хочу " + "спать " + "(" + this.meal + ")"
    }, Настроение: ${
      this.mood < 3
        ? "Мне " + "скучно " + "(" + this.mood + ")"
        : "Мне " + "весело " + "(" + this.mood + ")"
    }.`;
  },
  getName: function (nameTamogotchi) {
    tamogotchi.name = nameTamogotchi;
  },
  eat: function () {
    if (this.meal !== 5) this.meal += 1;
    this.mood -= 1;
  },

  sleep: function () {
    if (this.energy !== 5) {
      this.energy += 1;
    }
    this.meal -= 1;
  },
  play: function () {
    if (this.mood !== 5) {
      this.mood += 1;
    }

    this.energy -= 1;
  },
};

// tamogotchi.play();
// tamogotchi.eat();
// tamogotchi.play();

console.log(tamogotchi.getStatus());
