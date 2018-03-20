new Vue({
  el: "#vue-app",
  data: {
    life: 100,
    ended: false
  },
  methods: {
    punch: function () {
      this.life -= 10;
      if (this.life <= 0) {
        this.ended = true;
      }
    },

    restart: function () {
      this.life = 100;
      this.ended = false;

    }

  },

  computed: {

  }
})


