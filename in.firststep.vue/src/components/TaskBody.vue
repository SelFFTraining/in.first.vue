<template>
  <section class="section">
  <div class="container">
      <p v-if="error" class="has-text-danger">{{error}}</p>
      <input class="input has-li" type="text" v-model="taskTitle"  placeholder="Task Title">
      <br><br>
      <textarea class="textarea" type="text" v-model="taskDesc" placeholder="Task Description"></textarea>
      <br>
      <button class="button" @click="navigateToList()">Show Tasks</button>
      <button class="button is-primary" @click="submit">Add</button>

      <br><br>
  </div>
  </section>

</template>

<script>
  import request from '../common/request'
  export default {
    name: "Header.vue",
    props: {
      setShowList: Function,
      setShowForm: Function
    },
    data() {
      return {
        taskTitle: '',
        taskDesc: '',
        error: ''
      }
    },
    methods: {
      submit() {
        this.error = '';
        if (!this.taskTitle) {
          this.error = 'Task Title is Mandatory'
          return
        }
        if (!this.taskDesc) {
          this.error = 'Task Description is Mandatory'
          return
        }
        if (this.taskTitle && this.taskDesc) {
          let reqBody = {};
          reqBody['title'] = this.taskTitle;
          reqBody['desc'] = this.taskDesc;
          request.addTaskList({data: reqBody}).then(res=>{
              this.setShowList(true);
              this.setShowForm(false)
          }).catch(error =>{
            this.error = error
          })
        }
      },
      navigateToList() {
        this.setShowForm(false);
        this.setShowList(true);
      },
    }
  }
</script>

<style scoped>
  .fbutton {
    width: -webkit-fill-available;
  }
</style>
