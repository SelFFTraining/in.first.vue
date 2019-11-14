<template>
  <div id="app" class="Site">
        <Header ></Header>
        <div class="Site-content" >
            <TaskList v-if= "showList" :list=list :setShowList=setShowList :setShowForm=setShowForm></TaskList>
            <task-body v-if="showForm" :setShowList=setShowList :setShowForm=setShowForm></task-body>
        </div>
        <Footer></Footer>
  </div>
</template>

<script>
  import 'bulma/css/bulma.css'
  import Header from './components/Header.vue'
  import TaskBody from './components/TaskBody.vue'
  import Footer from './components/Footer.vue'
  import TaskList from './components/TaskList.vue'
  import appMixin from './components/mixins/appMixin'

  export default {
    name: 'App',
    data() {
      return {
        list: [],
        list1: []
      }
    },
    mixins: [appMixin],
    components: {
      Header,
      TaskBody,
      Footer,
      TaskList
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  .Site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .Site-content {
    flex: 1;
  }

</style>
