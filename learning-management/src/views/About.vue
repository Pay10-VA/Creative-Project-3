<template>
  <div class="about">
    <div>
      <h1>Grades</h1>
    </div>

    <div id="filter">
      <div id="text">
        <h2>Filter By: </h2>
      </div>
      <div id="button-div">
        <button @click="changeView(1)">All</button>
        <button @click="changeView(2)">Graded</button>
        <button @click="changeView(3)">Submitted</button>
      </div>
    </div>


    <GradesList :assignments="grades" />

    <div id="total">
    <div id="text-grade">
      <h1>TOTAL GRADE: </h1>
    </div>
    <div id="grade-text">
      <h1>{{totalGrade}}% </h1>

    </div>
    <div id="grade-text-right">
      <h1>{{letterGrade(totalGrade)}}</h1>
    </div>

    </div>


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
    },
    totalGrade() {
      let total = 0;
      let earned = 0;
      let array = this.$root.$data.assignments.filter(work => work.grade != 0);
      for(let i = 0; i < array.length; i++) {
        total += array[i].points;
        earned += array[i].grade;
      }
      let answer = earned / total;
      return Math.round(answer  * 1000) / 10;
    },
  },
  methods: {
    changeView(newView) {
      this.$root.$data.view = newView;
      this.viewNum = newView;
    },
    letterGrade(grade) {
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

#total {
  border: solid #325A7F;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 50px;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
    .about {
      width: 75%;
    }

    button {
      height: 50px;
      width: 100%;
    }

    #filter {
      display: block-flex;
    }

    #button-div {
      display: flex;
      /*justify-content: space-between;*/
      margin-left: auto;
      margin-right: auto;
    }

    #total {
      display: flex;
    }

    #text-grade {
      width: 50%;
    }

    #grade-text {
      width: 50%;
      display: flex;
    }

    #grade-text h2 {
      width: 50%;
    }

    #grade-text-right {

    }

    button:hover {
      color: white;
      background-color: #325A7F;
    }

}



</style>
