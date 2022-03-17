const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      currentRound: 0,
      monsterHealth: 100,
      playerHealth: 100,
      winner: null
    }
  },
  computed: {
    monsterBarStyles() {
      return {
        width: this.monsterHealth + '%'
      }
    },
    playerBarStyles() {
      return {
        width: this.playerHealth + '%'
      } 
    },
    mayUseSpecialAttack() {
      return this.currentRound > 3;
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0 ) {
        this.winner = 'draw';
      } else if (value < 0) {
        this.winner ='monster'
        this.playerHealth = 0;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value < 0) {
        this.winner = 'player';
        this.monsterHealth = 0
      }
    }
  },
  methods: {
    startGame() {
      this.currentRound = 1;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
    },
    attackMonster() {
      this.currentRound++;
      const dmg = getRandomValue(5,12);
      this.monsterHealth -= dmg;
      this.attackPlayer();
    },
    attackPlayer() {
      const dmg = getRandomValue(8, 15);
      this.playerHealth -= dmg;
      console.log('player health: ', this.playerHealth);
    },
    specialAttackMonster() {
      this.currentRound = 1;
      const dmg = getRandomValue(10,25);
      this.monsterHealth -= dmg;
      this.attackPlayer()
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8,20);
      if(this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    }
  }
});

app.mount("#game");