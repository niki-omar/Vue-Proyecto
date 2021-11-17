Vue.component('padre',{
    template:
    `
    <div> 
    <h1>VUEX</h1>
        <h2>Numero {{ $store.state.numero }}</h2>
        <hijo></hijo> 
    </div> 
    `});
const store = new Vuex.Store({
    state:{
        numero: 10
    },
    mutations:{
        aumentar(){
            this.state.numero++
        }
    }
});
new Vue({
    el:'#app',
    store:store,
})