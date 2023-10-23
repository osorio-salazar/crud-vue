<template>
    <div class="container">
        <h1>Modify User</h1>

        <div class="card">
            <div class="card-header">
                Editar Información
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="form-group">
                        <label for="nombre" class="d-flex align-items-start">Nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="empleado.nombre" id="nombre"
                            aria-describedby="helpId" placeholder="ingrese el nombre del empleado" required>
                        <small id="helpId" class="form-text text-muted d-flex align-items-start">Escribe el nombre del
                            empleado</small>
                    </div>

                    <div class="form-group">
                        <label for="correo" class="d-flex align-items-start mt-3">Correo</label>
                        <input type="email" class="form-control" name="correo" v-model="empleado.correo" id="correo"
                            aria-describedby="helpId" placeholder="ingrese el correo del empleado" required>
                        <small id="helpId" class="form-text text-muted d-flex align-items-start">Escribe el correo del
                            empleado</small>
                    </div>

                    <div class="d-flex justify-content-start mt-2">
                        <button type="submit" class="btn btn-success btn-sm">Modificar</button>
                        <router-link :to="{ name: 'list-user' }"
                            class="btn btn-danger btn-sm ml-2 mx-1">Cancelar</router-link>
                    </div>
                </form>

            </div>
        </div>
    </div>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</template>

<script>
export default {
    data() {
        return {
            empleado: {}
        }
    },
    created: function () {
        this.obtenerInformacionId();
    },
    methods: {
        obtenerInformacionId() {
            fetch('http://localhost/empleados/?consultar=' + this.$route.params.id)
                .then(respuesta => respuesta.json())
                .then((datosRespuesta) => {
                    console.log(datosRespuesta);
                    this.empleado = datosRespuesta[0];
                })
                .catch(console.log)
        },
        actualizarRegistro() {
            var datosEnviar = { id:this.$route.params.id, nombre: this.empleado.nombre, correo: this.empleado.correo }

            fetch('http://localhost/empleados/?actualizar=' + this.$route.params.id, {
                method: "POST",
                body: JSON.stringify(datosEnviar)
            })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta => {
                console.log(datosRespuesta);
                window.location.href = '../list'
            }))
        }
    }
}
</script>