let mixin = {

  data() {
    return {
      showList: false,
      showForm: true,
    }
  },

  methods: {
    setShowList(showList) {
      this.showList = showList
    },

    setShowForm(showForm) {
      this.showForm = showForm
    },

    navigateToList() {
      this.setShowForm(false);
      this.setShowList(true);
    },

    navigateToForm() {
      this.setShowList(false);
      this.setShowForm(true);
    }
  }

}

export default mixin
