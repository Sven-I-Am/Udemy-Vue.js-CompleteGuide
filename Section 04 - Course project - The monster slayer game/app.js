const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0,
      hasHealed: false,
      moves: [],
    };
  },
  computed: {
    setMonsterHealthBar() {
      return { width: this.monsterHealth + '%' };
    },
    setPlayerHealthBar() {
      return { width: this.playerHealth + '%' };
    },
    specialReady() {
      return this.rounds % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.rounds++;
      const dmg = calcDmg(12, 5);
      this.monsterHealth -= dmg;
      this.moves.push(setMove('Player', 'Attack', dmg));
      this.attackPlayer();
    },
    attackPlayer() {
      const dmg = calcDmg(8, 18);
      this.playerHealth -= dmg;
      this.moves.push(setMove('Monster', 'Attack', dmg));
    },
    specialAttackMonster() {
      this.rounds++;
      const dmg = calcDmg(10, 25);
      this.monsterHealth -= dmg;
      this.moves.push(setMove('Player', 'Special Attack', dmg));
      this.attackPlayer();
    },
    healPlayer() {
      if (hasHealed) {
        move = { name: 'Player', move: 'Heal fails' };
      } else {
        const hp = calcDmg(5, 1);
        this.playerHealth += hp;
        move = { name: 'Player', move: 'Heals for ' + hp + ' points' };
      }
    },
  },
});

app.mount('#game');

function calcDmg(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function setMove(name, move, value) {
  return { name: name, move: move, value: value };
}
