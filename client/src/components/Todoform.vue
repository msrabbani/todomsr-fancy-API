<template lang="html">
  <div class="section">
    <a class="button is-primary" data-target="addTaskModal" @click="showModal()">Add New Task</a>
    <!-- Modal Add Task -->
    <div :class="modalAddTaskClass" id="addTaskModal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Task</p>
        <button class="delete" aria-label="close" @click="hideModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Add Task</label>
          <div class="control">
            <input class="input" type="text" placeholder="Task" v-model="formAddtask.task">
          </div>
        </div>

        <div class="field">
          <label class="label">Tags</label>
          <div class="control">
            <input class="input" type="text" placeholder="Tags" v-model="formAddtask.tags">
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="addNewTask">Save Task</button>
        <button class="button" @click="hideModal">Cancel</button>
      </footer>
    </div>
  </div>

    <div class="">
      <div class="boards">
        <div class="columns">
          <div class="column is-3 board" id="b1" v-for="data in dataTodos">
            <div class="box is-gray">
              <div class="head">
                <div class="name">{{data.task}}</div>
                <!-- <div class="count">1</div> -->
                <!-- <div class="options"><i class="fa fa-ellipsis-h"></i></div> -->
              </div>
              <div class="items">
                <div class="box" id="b1c1">
                  <p class="title">{{data.task}}</p>
                </div>
                <div class="add-card">
                 <p>{{data.creator}}</p>
                 <p>{{data.tags}}</p>
                 <p>{{data.status}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['dataTodos'],
  data () {
    return {
      modalAddTaskClass: 'modal',
      formAddtask: {
        task: '',
        tags: ''
      }
    }
  },
  methods: {
    showModal () {
      this.modalAddTaskClass = 'modal-is-active'
    },
    hideModal () {
      this.modalAddTaskClass = 'modal'
    },
    addNewTask () {
      axios.post('http://localhost:3003/todo/', {
        headers: {
          token: localStorage.getItem('token') // untuk mendapatkan authorisasi ketika getData users
        }}
       , {
         task: this.formAddtask.task,
         tags: this.formAddtask.tags
       }).catch(result => {
         console.log(result)
         this.$router.push('/home')
       })
    }
  }
}
</script>

<style scoped>
body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}

.boards {
  padding:40px 0;
}

.boards .board .box.is-gray {
  background-color: #F5F5F5;
}

.boards .board .box .items {
  padding: 20px 0;
}

.box .head .name {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #2C2C30;
}

.box .head .count {
  display: inline-block;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #AAAAAA;
}

.box .head .options {
  display: inline-block;
  float: right;
  padding-top:7px;
  color: #CCCCCC;
}

.items .box .title {
  font-size: 19px;
}

.items .box .meta img {
  border-radius: 30px;
  margin-right: 10px;
}

.items .box .meta .fa {
  margin: 3px 7px;
  color: #CCCCCC;
}

.items .add-card div {
  color: #AAAAAA;
  font-weight: bold;
  font-size: 16px;
}
</style>
