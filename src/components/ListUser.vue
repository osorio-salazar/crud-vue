<template>
    <h1>List of Users</h1>
    <div class="container">

        <div class="d-flex justify-content-start mt-2">
            <router-link to="/create" class="btn btn-success">Create User</router-link> 
        </div>
        <br>
            
        <div class="card">
            <div class="card-header">
                Empleados
            </div>
            <div class="card-body">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>CORREO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <td>{{ empleado.id }}</td>
                            <td>{{ empleado.nombre }}</td>
                            <td>{{ empleado.correo }}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'edit-user', params:{id:empleado.id}}" class="btn btn-success mx-1">Editar</router-link>
                                    <button type="button" v-on:click="eliminarEmpleado(empleado.id)" class="btn btn-danger mx-1">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</template>


<script>
export default {
    data() {
        return {
            empleados:[]
        }
    },

    created:function() {
        this.consultarEmpleados();
    },
    methods:{
        // http://localhost/empleados/
        consultarEmpleados(){
            fetch('http://localhost/empleados/')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.empleados = []
                if (typeof datosRespuesta[0].success === 'undefined') {
                    this.empleados = datosRespuesta;
                }
            })
            .catch(console.log)
        },
        eliminarEmpleado(id){
            console.log(id);

            fetch('http://localhost/empleados/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                window.location.href="list"
            })
            .catch(console.log)
        }
    }
}
</script>