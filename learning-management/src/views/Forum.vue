<template>
  <div id="forum-main">

    <h1>Class Chat</h1>

    <p>Get help from classmates, TA's, and the course instructor. Post your questions or converse with your fellow classmates.</p>

    <div id="post-header">
      <h3>150 Participants</h3>
    </div>
    <div id="posts">
      <div v-for="post in this.$root.$data.posts" :key="post.message" id="single-post">
        <div id="post-name">
          <h3>{{post.name}}</h3>
        </div>
        <div id="post-message">
          <p>{{post.message}}</p>
        </div>
      </div>
    </div>

    <div id="user-posting">
      <input v-model="addedMessage">
      <button type="submit" @click="addPost()"><i class="far fa-paper-plane"></i></button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Forum',
  components: {
  },
  data() {
    return {
      addedMessage: "",
    }
  },
  methods: {
    addPost() {
      let userName = "Me";
      this.$root.$data.posts.push({
        name: userName,
        message: this.addedMessage
      });
      this.addedMessage = ""; //Clears addedMessage
    }
  }
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
    border: solid;
    border-width: thin;
    margin-bottom: 20px;
  }

  #single-post {
    border: solid;
    border-width: thin;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
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
    background-color: #c7c2c2;
    margin-top: 20px;
    text-align: left;
  }

  #user-posting {
    display: flex;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  input {
    width: 90%;
    height: 30px;
  }

  button {
    width: 10%;
    height: 35px;
  }

  button:hover {
    background-color: #f2f2f2;
  }


</style>
