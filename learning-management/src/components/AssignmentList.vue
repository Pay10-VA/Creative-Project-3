<template>
  <div id="main-content">
    <div id="assignment-list">
      <div v-for="assignment in assignments" :key="assignment.id" id="assignment">
        <div id="left-side">
          <h1>{{assignment.name}}</h1>
          <br>
          <p>{{assignment.description}}</p>
          <br>
          <h3>{{assignment.points}} points</h3>
          <br>
        </div>
        <div id="right-side">
          <button v-if="assignment.submitted" @click="submission(assignment)">Unsubmit</button>
          <button v-else @click="submission(assignment)" >Submit</button>
          <h2>Due {{assignment.dueDate}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssignmentList',
  props: {
    assignments: Array
  },
  methods: {
    submission(work) {
      if(work.submitted == true) {
        work.submitted = false;
      }
      else {
        work.submitted = true;
      }
    }
  }
}
</script>

<style>

#assignment-list {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

#assignment {
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 25px;
  border: solid;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
}

#assignment #right-side {
  text-align: center;
}

button {
margin-bottom: 15px;
width: 30%;
height: 2em;
}
</style>
