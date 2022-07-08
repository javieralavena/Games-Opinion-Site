<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <font-awesome-icon class="icono" icon="fa-solid fa-headset"></font-awesome-icon>
        <a class="navbar-brand" href="#">Games Opinion</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-house-chimney"></font-awesome-icon>
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-comments"></font-awesome-icon>
              <router-link to="/opiniones">Opiniones</router-link>
            </li>
            <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-users-gear"></font-awesome-icon>
              <router-link to="/administracion">Administracion</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
.navbar-brand {
  margin-left: 5px;
  color: white !important;
}

.nav-item a {
  color: grey;
  text-decoration: none;
  margin-left: 5px;
  margin-right: 15px;
}

.nav-item {
  color: grey;
}

.icono {
  color: white;
}
</style>
