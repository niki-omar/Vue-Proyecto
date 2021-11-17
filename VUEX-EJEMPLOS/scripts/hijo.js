Vue.component('hijo',{
    template: 
    `
    <div>
        <button @click="$store.commit('aumentar')">+</button>
    </div>
    `
});