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
          <h3 v-if="assignment.submitted" id="good"><strong>Submitted</strong></h3>
          <h3 v-else id="warning"><strong>Not Subitted</strong></h3>
          <br>
        </div>
        <div id="right-side">
          <h2>Due {{assignment.dueDate}}</h2>
          <button v-if="assignment.submitted" @click="submission(assignment)">Unsubmit</button>
          <button v-else @click="submission(assignment)" >Submit</button>
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
  border: solid #325A7F;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
}

#assignment #right-side {
  text-align: center;
}

button {
  margin-top: 20px;
  width: 40%;
  height: 2em;
}

#good {
  color: green;
}

#warning {
  color: red;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {

  #assignment-list {
    width: 75%;
  }

  #assignment {
    display: flex;
  }

  #assignment #left-side{
    width: 60%;
  }

  #assignment #right-side {
    width: 40%;
    margin-top: auto;
    margin-bottom: auto;
  }

  button {
    margin-top: 20px;
  }

}

</style>
