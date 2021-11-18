Vue.component('hijo',{
    template: 
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuir(2)">-</button>
        <button @click="obtenerCursos">Obtener cursos</button>
        <h1>numero: {{numero}}</h1>
        <ul v-for="item of cursos">
        <li>{{item.nombre}}</li>
        </ul>
    </div>
    `,
computed:{
    ...Vuex.mapState(['numero','cursos'])
},
methods: {
    ...Vuex.mapMutations(['aumentar','disminuir']),
    ...Vuex.mapActions(['obtenerCursos'])
},
});