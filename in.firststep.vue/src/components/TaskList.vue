<template>
  <section class="section ">
    <div v-if="this.list && this.list.length>= 10">
      <button  @click="navigateToForm()" class="button ">Add More Task</button>
      <br>
      <br>
    </div>

    <div class="table-container">
      <table class="table is-striped is-hoverable table is-fullwidth">
        <thead>
          <tr>
            <th class="has-text-left"></th>
            <th class="has-text-left">Title</th>
            <th class="has-text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="task in this.list">
            <td><a :id="task.title" class="delete" @click="deleteTask"></a></td>
            <td>{{task.title}}</td>
            <td style="word-break: break-all;">{{task.desc}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-if="this.list && this.list.length=== 0">No Data
    <br><br>
    </p>
    <button  @click="navigateToForm()" class="button ">Add More Task</button>
  </section>
</template>

<script>
  import request from '../common/request'
  export default {
    name: "TaskList.vue",
    props: {
      list: Array,
      setShowList: Function,
      setShowForm: Function
    },
    data() {
      return {
        // list: []
      }
    },
    methods: {
      navigateToForm() {
        this.setShowForm(true);
        this.setShowList(false)
      },

      getTaskList() {
        request.getTaskList().then(response=>{
          this.list = response.data.tasks.map(data=>{
            return {title: data.data.title, desc: data.data.desc}
          });
        })
      },

      deleteTask(event) {
        if(confirm('Delete '+event.target.id+' ?')) {
          request.deleteTask(event.target.id);
          this.getTaskList();
        }
      }
    },
    created() {
      this.getTaskList();
    },
    updated() {
      console.log('props', this.props)
    }
  }
</script>

<style scoped>

</style>
