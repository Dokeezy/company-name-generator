new Vue({
    el: '#namegen',
    data: {
      rootWord: '',
      prefix: ['Good', 'Hello', 'Yes', 'Bi', 'Yo', 'Do', 'To', 'Wi', 'My', ''],
      suffix: ['x', 'aw', 'oo', 'ee', 'up', 'ax', 'pro', 'app', 'biz', ''],
      names: [],
      generations: 300,
    },
    methods: {
      generateName: function() {
        return this.prefix[this.randomNumber(this.prefix.length)] + this.rootWord.toLowerCase() + this.suffix[this.randomNumber(this.suffix.length)];
      },

      randomNumber: function(arrayLength) {
          return Math.floor(Math.random() * ((arrayLength - 1) + 1));
      },

      generateNameArray: function() {
        if(this.rootWord.length > 0) {
          for(let i = 0; i < this.generations; i++) {
            let newName = this.generateName();
            if(this.names.indexOf(newName) === -1) {
              this.names.push(this.generateName());
            }
          }
        }

      }
    }
});
