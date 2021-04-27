<template>
  <div class="container">
    <div class="row justify-content-md-center">
            <div class="col-6">
                <div class="card mt-5">
                    <div class="card-body">
                        <h3 class="text-center mb-3">Iniciar Sesión</h3>
                        <form v-on:submit.prevent="logueo">
                            <div class="mb-3">
                                <label for="correo" class="form-label">Correo Electrónico</label>
                                <input type="email" v-model="email" class="form-control" id="correo">
                            </div>
                            <div class="mb-3">
                                <label for="contraseña" class="form-label">Contraseña</label>
                                <input type="password" v-model="password" class="form-control" id="contraseña">
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    logueo() {
      axios.post('http://loyal_api.leackstat.info/api/v1/login', {
        email: this.email,
        password: this.password,
      })
      .then(data =>{
        if (data.data.success == true) {
          //Guardo el token en localstorage
          localStorage.token = data.data.data.token;
          this.$router.push('bienvenido');
        }else{
          alert('el correo o password son inválidos');
        }
      });
    }
  }
}
</script>
