<template>
  <div id="main-content">

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
        <h3 v-if="assignment.grade != 0">{{letterGrade(assignment.grade, assignment.points)}}</h3>
        <h3 v-else>Not Yet Graded</h3>
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
    letterGrade(earned, total) {
      let grade = earned / total * 100;

      if(grade < 50) {
        return "F";
      }
      else if(grade >= 60 && grade <= 69) {
        return "D";
      }
      else if(grade >=70 && grade <= 79) {
        return "C";
      }
      else if(grade >=80 && grade <= 89) {
        return "B";
      }
      else {
        return "A";
      }
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
  border: solid #325A7F;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
}



</style>
