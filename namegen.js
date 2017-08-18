new Vue({
    el: '#namegen',
    data: {
      rootWord: '',
      prefix: ['Good', 'Hello', 'Yes', 'Bi', 'Yo', 'Do', 'To', 'Wi', 'My', ''],
      suffix: ['x', 'aw', 'oo', 'ee', 'up', 'ax', 'pro', 'app', 'biz', ''],
      names: [],
      generations: 300,
      dialog: false,
      lead: {
        email: '',
        firstname: '',
        lastname: '',
        telephone: '',
        zipcode: ''
      }

    },
    methods: {
      generateName: function() {
        return this.prefix[this.randomNumber()] + this.rootWord.toLowerCase() + this.suffix[this.randomNumber()];
      },

      randomNumber: function() {
          return Math.floor(Math.random() * ((this.prefix.length - 1) - 0 + 1)) + 0;
      },

      nameArrayToString: function() {
        return this.names.join(" ");
      },

      sendNames: function() {
        emailjs.send("gmail","template_7UClUYZl",{
          email: this.lead.email,
          nameArray: this.nameArrayToString()
        });
        this.rootWord = '';
        this.lead.email = '';
        this.dialog = false;
      },

      generateNameArray: function() {
        if(this.rootWord.length > 0) {
          for(let i = 0; i < this.generations; i++) {
            let newName = this.generateName();
            if(this.names.indexOf(newName) === -1) {
              this.names.push(this.generateName());
            }
          }
          this.dialog = true;
        }

      }
    }
});
