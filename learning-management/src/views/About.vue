<template>
  <div class="about">
    <div>
      <h1>Grades</h1>
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
    }
  },
  computed: {
    grades() {
      return this.$root.$data.assignments;
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


</style>
