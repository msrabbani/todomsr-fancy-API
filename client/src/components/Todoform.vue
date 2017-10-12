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
        <button class="button is-success" @click="addNewTask(),hideModal()">Save Task</button>
        <button class="button" @click="hideModal">Cancel</button>
      </footer>
    </div>
  </div>

  <!-- Modal Edit Task -->
  <div :class="modalEditTaskClass" id="editTaskModal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Task</p>
      <button class="delete" aria-label="close" @click="hideModalEdit"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">Task</label>
        <div class="control">
          <input class="input" type="text" placeholder="Task" v-model="formEditTask.task">
        </div>
      </div>

      <div class="field">
        <label class="label">Tags</label>
        <div class="control">
          <input class="input" type="text" placeholder="Tags" v-model="formEditTask.tags">
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="editTask(formEditTask._id),hideModalEdit()">Update Task</button>
      <button class="button" @click="hideModalEdit">Cancel</button>
    </footer>
  </div>
</div>

<!-- Form Todo List -->
    <div class="">
      <div class="boards" v-for="(data,index) in dataTodos">
        <div class="columns">
          <div class="column is-3 board" id="b1" >
            <div class="box is-gray">
              <!-- <div class="options"><i class="fa fa-trash"></i></div> -->
              <div class="head">
                <div class="name">Task</div>
              </div>
              <div class="items">
                <div class="box" id="b1c1">
                  <p class="title">{{data.task}}</p>
                </div>
                <div class="add-card">
                 <p>ini data id todo: {{data._id}}</p>
                 <p>ini data id user: {{data.creator}}</p>
                 <p>{{data.tags}}</p>
                 <p>{{data.status}} ==checkbox==</p>
              </div>
            </div>
            <footer class="modal-card-foot">
              <button class="button is-success" data-target="editTaskModal" @click="showModalEdit(), lemparData(data)">Edit</button>
              <button class="button is-danger" @click="deleteTask(data._id, index)">Delete</button>
            </footer>
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
      modalEditTaskClass: 'modal',
      formAddtask: {
        task: '',
        tags: ''
      },
      formEditTask: {
        _id: null,
        task: '',
        tags: ''
      }
    }
  },
  methods: {
    showModal () {
      this.modalAddTaskClass = 'modal-is-active'
    },
    showModalEdit () {
      this.modalEditTaskClass = 'modal-is-active'
    },
    hideModal () {
      this.modalAddTaskClass = 'modal'
    },
    hideModalEdit () {
      this.modalEditTaskClass = 'modal'
    },
    addNewTask () {
      axios.post('http://35.198.197.115/todo/', {
        task: this.formAddtask.task,
        tags: this.formAddtask.tags
      }
       , {
         headers: {
           token: localStorage.getItem('token') // untuk mendapatkan authorisasi ketika getData users
         }
       }).then(dataTask => {
        //  console.log('====', dataTask)
         this.dataTodos.push(dataTask.data)
        //  this.$router.push('/index')
       }).catch(err => {
         console.log(err)
       })
    },
    deleteTask (id, index) {
      axios.delete('http://35.198.197.115/todo/' + id, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(dataTodo => {
        console.log('data berhasil di delete')
        this.dataTodos.splice(index, 1)
      }).catch(err => {
        console.log(err)
      })
    },
    editTask (id) {
      axios.put('http://35.198.197.115/todo/' + id, {
        task: this.formEditTask.task,
        tags: this.formEditTask.tags
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(dataEdit => {
        console.log('=========', dataEdit)
      }).catch(err => {
        console.log('===', err)
      })
    },
    lemparData (data) {
      this.formEditTask = data
    }
  }
  // created () {
  //   console.log(this.dataTodos)
  // }
}
</script>

<style scoped>
body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}

.boards {
  padding:20px 0;
}

.modal-card-foot {
  padding-bottom: 10px;
}

.modal-card-foot-form {
  padding-bottom: 10px;
}

.boards .board .box.is-gray {
  background-color: #F5F5F5;
}

.boards .board .box .items {
  padding: 10px 0;
}

.box .head .name {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #2C2C30;
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
