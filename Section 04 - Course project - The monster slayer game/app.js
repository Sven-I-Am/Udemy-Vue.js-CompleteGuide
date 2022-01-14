const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0,
      hasHealed: false,
      moves: [],
      winner: null,
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
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.playerHealth = 0;
        this.monsterHealth = 0;
        this.winner = 'draw';
      } else if (value <= 0) {
        this.playerHealth = 0;
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value < +0 && this.playerHealth < +0) {
        this.playerHealth = 0;
        this.monsterHealth = 0;
        this.winner = 'draw';
      } else if (value < +0) {
        this.monsterHealth = 0;
        this.winner = 'player';
      }
    },
  },
  methods: {
    attackMonster() {
      this.rounds++;
      this.hasHealed = false;
      const dmg = getRnd(12, 5);
      this.monsterHealth -= dmg;
      this.moves.push(setMove('Player', 'Attack', dmg));
      this.attackPlayer();
    },
    attackPlayer() {
      const dmg = getRnd(8, 18);
      this.playerHealth -= dmg;
      this.moves.push(setMove('Monster', 'Attack', dmg));
    },
    specialAttackMonster() {
      this.rounds++;
      this.hasHealed = false;
      const dmg = getRnd(10, 25);
      this.monsterHealth -= dmg;
      this.moves.push(setMove('Player', 'Special Attack', dmg));
      this.attackPlayer();
    },
    healPlayer() {
      this.rounds++;
      if (this.hasHealed) {
        this.moves.push(setMove('Player', 'Heal', 'fail'));
      } else {
        this.hasHealed = true;
        const hp = getRnd(5, 1);
        if (this.playerHealth + hp > 100) {
          this.playerHealth = 100;
        } else {
          this.playerHealth += hp;
        }

        this.moves.push(setMove('Player', 'Heal', hp));
      }
      this.attackPlayer();
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.rounds = 0;
      this.hasHealed = false;
      this.moves = [];
      this.winner = null;
    },
    surrender() {
      this.winner = 'monster';
    },
  },
});

app.mount('#game');

function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function setMove(name, move, value) {
  return { name: name, move: move, value: value };
}
