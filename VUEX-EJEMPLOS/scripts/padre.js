Vue.component('padre',{
    template:
    `
    <div> 
    <h1>VUEX</h1>
        <hijo></hijo> 
    </div> 
    `,});
const store = new Vuex.Store({
    state:{
        numero: 10,
        cursos: []
    },
    mutations:{
        aumentar(state){
            state.numero ++
        },
        disminuir(state,n){
            state.numero -=n
        },
        llenarCursos(state,cursosAccion){
            state.cursos= cursosAccion
        }
    },
    actions:{
        obtenerCursos: async function({commit}){
            const data = await fetch('cursos.json');
            const cursos = await data.json();
            commit('llenarCursos',cursos)
        }
    }
});
new Vue({
    el:'#app',
    store:store,
})