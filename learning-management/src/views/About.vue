<template>
  <div class="about">
    <div>
      <h1>Grades</h1>
    </div>

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


<GradesList :assignments="grades" />


  </div>
</template>

<script>
import GradesList from "../components/GradesList.vue"
export default {
  name: 'Home',
  components: {
    GradesList
  },
  data() {
    return {
      viewNum: 1,
    }
  },
  computed: {
    grades() {
      if(this.viewNum === 1) {
        return this.$root.$data.assignments;
      }
      else if(this.viewNum === 2) {
        return this.$root.$data.assignments.filter(work => work.grade != 0);
      }
      else {
      return this.$root.$data.assignments.filter(work => work.submitted == true);
      }
    }
  },
  methods: {
    changeView(newView) {
      this.$root.$data.view = newView;
      this.viewNum = newView;
    },
  },
}
</script>



<style>
.about {
  min-height: calc(100vh - 120px - 57px); /*Keeps footer at the bottom*/
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

#results {
  width: 85%;
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
