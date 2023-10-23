<template>

    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="nav navbar-nav">
          <!-- crud routes -->
          <router-link to="/list" class="nav-link">User List</router-link> 
          <router-link to="/create" class="nav-link">Create User</router-link> 
        </div>
    </nav>
    <br>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
