<template>
  <div>
    <h1>Assignments</h1>

    <AssignmentList :assignments="assignments" />
  </div>
</template>


<script>
import AssignmentList from "../components/AssignmentList.vue"
export default {
  name: 'Home',
  components: {
    AssignmentList
  },
  data() {
    return {
    }
  },
  computed: {
    assignments() {
      return this.$root.$data.assignments;
    }
  },
}
</script>
