 class MicustomComponent extends HTMLElement{
 /**
  * * Se crea una clase que extiende de la libreria nativa de 
  * * javascript HTMLElements
  */
    constructor(){
        // * El constructor usa el contructor del padre con super()
        super();
        // * inicializamos las variables que usaremos luego
        this.name;
        this.surname;
    }
    /**
     * * con este método les indicamos que el componente recibirá paramentros 
     * * los cuales deben coincidir con estos nombres
    */
    static get observedAttributes(){
        return ['name', "surname"];
    }


    /**
     * * Con este método de callback es donde se asignan el valor a las 
     * * variables recibidas desde el módulo que usamos en el body
     * * nameAttr son los valores que se asigna el usuario al colocar las 
     * * variables (name - surname) <custom name="ricardo" surname="perez">
     * * newValue es el valor asignado ricardo perez
    */
    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
            case "surname":
                this.surname = newValue;
            break;
        }
    }

   /**
    * * this: Representa el elemento html y con este entonces podemos agregar 
    * * los valoes tipicos de un elemento del dom. A estos podemos asignar las 
    * * las variables recibidas desde el módulo
   */
    connectedCallback(){
        this.innerHTML = `<div>
            <h1>Hola ${this.name} ${this.surname}</h1>
            <p>Esto es un párrafo</p>
        </div>`;
        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}
/**
 * ? Ahora podemos importar el javascript en nuestro dom 
 * ? <script src="webcomponent.js" type="text/javascript"></script>
 * * Con esto ya podemos utilizar el módulo y pasarle los valores
 * ? <custom-module name="ricardo" surname="perez"></custom-module>
 * 
*/

window.customElements.define("custom-module", holaMundo);