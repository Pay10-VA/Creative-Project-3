<template>
  <div id="forum-main">

    <h1>Class Chat</h1>

    <p>Get help from classmates, TA's, and the course instructor. Post your questions or converse with your fellow classmates</p>

    <div id="post-header">
      <h3>150 Participants</h3>
    </div>
    <div id="posts">
      <div v-for="post in this.$root.$data.posts" :key="post.name" id="single-post">
        <div id="post-name">
          <h3>{{post.name}}</h3>
        </div>
        <div id="post-message">
          <p>{{post.message}}</p>
        </div>
      </div>
    </div>

    <div id="user-posting">
      <input>
      <button><i class="far fa-paper-plane"></i></button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Forum',
  components: {
  },
}
</script>

<style>
  #forum-main {
    min-height: calc(100vh - 120px - 57px);
  }

  #posts {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  #single-post {
    border: solid;
    border-width: thin;
    margin-bottom: 5px;
  }

  #post-name {
    text-align: left;
    padding-left: 5px;
    padding-bottom: 5px;
    color: #325A7F;
  }

  #post-message {
    text-align: left;
    padding-left: 5px;
    padding-bottom: 5px;
  }

  #post-header {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5px;
    border: solid;
    border-width: thin;
    background-color: #f2f2f2;
    margin-top: 20px;
    text-align: left;
  }

  #user-posting {
    display: flex;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    width: 85%;
    height: 30px;
  }

  button {
    width: 15%;
    height: 35px;
  }

  button:hover {
    background-color: #f2f2f2;
  }


</style>
