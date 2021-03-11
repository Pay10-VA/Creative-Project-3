<template>
  <div id="main-content">

  <div id="filter">
    <div>
      <h2>Filter By: </h2>
    </div>
    <div>
      <button @click="changeView(1)">All</button>
      <button @click="changeView(2)">Graded</button>
      <button @click="changeView(3)">Submitted</button>
    </div>
  </div>

    <div id="grades-list">
      <h1 v-if="this.$root.$data.view == 1">All Assignments</h1>
      <h1 v-if="this.$root.$data.view == 2">Graded Assignments</h1>
      <h1 v-if="this.$root.$data.view == 3">Submitted Assignments</h1>
      <div v-for="assignment in assignments" :key="assignment.id" id="grade">
        <div>
          <h1>{{assignment.name}}</h1>
          <h3 v-if="assignment.submitted" id="submitted">Submitted</h3>
          <h3 v-else id="notSubmitted">Not Submitted</h3>
        </div>
        <div>
        <h3>{{assignment.grade}} / {{assignment.points}}</h3>
        <h3></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradesList',
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
    },
    changeView(newView) {
      this.$root.$data.view = newView;
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

#grades-list {
  margin-top: 50px;

}

#submitted {
  color: green;
}

#notSubmitted {
  color: red;
}

#grade {
  border: solid;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#filter {
  margin-top: 30px;
}

button {
  width: 80%;
  height: 30px;
  margin-top: 15px;
}


</style>
