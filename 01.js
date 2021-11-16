// EJEMPLO DE SUMA, RESTA, MULTIPLICACION Y DIVISION
Vue.component("operaciones", {
  props: ["value0", "value1"],    // --> esto indica el valor como tal que va a recibir
                                // en los INPUT
  template: `
    <div>
        <input type="number" :value="value0" @input="numberone = $event.target.value" >
        <input type="number" :value="value1" @input="numbertwo = $event.target.value" >
        <button v-on:click="operacion()">Resolver</button>
            <p>Suma: {{mensaje}}</p>
            <p>Resta: {{mensaje2}}</p>
            <p>Multiplicación: {{mensaje3}}</p>
            <p>Division: {{mensaje4}}</p>
            <p>Suma-Resta: {{res}}</p>
    </div>  
`,
  data: function () {
    return {
      numberone: null,
      numbertwo: null,
      mensaje: null,
      mensaje2: null,
      mensaje3: null,
      mensaje4: null,
    //   mensaje5:null,
      res:null  //retorna el resultado de la operacion
    };
  },
  methods: {
    operacion() {
      this.mensaje = parseInt(this.numberone) + parseInt(this.numbertwo);
      this.mensaje2 = parseInt(this.numberone) - parseInt(this.numbertwo);
      this.mensaje3 = parseInt(this.numberone) * parseInt(this.numbertwo);
      this.mensaje4 = parseInt(this.numberone) / parseInt(this.numbertwo);
      this.mensaje5 = parseInt(this.numberone) + parseInt(this.numbertwo);
      this.res= parseInt(this.mensaje5)- parseInt(this.numbertwo);  
    },
  },
});
const app = new Vue({
  el: "#app",
  data: {
      //arrays
    titulo: "Vue",
    array: [1, 2, 3, "cuatro"],
    frutas: [
      { nombre: "Manzana", cantidad: 2 },
      { nombre: "Pera", cantidad: 0 },
      { nombre: "Limon", cantidad: 4 },
      { nombre: "Sandia", cantidad: 0 },
    ],
    nuevaFruta:'',
    cantidadFruta:0
  },
  methods:{
      agregarFruta (){
          this.frutas.push({
            nombre: this.nuevaFruta, 
            cantidad: this.cantidadFruta,
          })
        this.nuevaFruta='',
        this.cantidadFruta=0
      }
  }
});
