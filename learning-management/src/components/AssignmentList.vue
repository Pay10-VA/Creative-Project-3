<template>
  <div id="main-content">
    <div id="assignment-list">
      <div v-for="assignment in assignments" :key="assignment.id" id="assignment">
        <div id="left-side">
          <h1>{{assignment.name}}</h1>
          <h3>{{assignment.description}}</h3>
          <h3>Worth {{assignment.points}} points</h3>
        </div>
        <div id="right-side">
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
  }
}
</script>

<style>

#assignment-list {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

</style>
