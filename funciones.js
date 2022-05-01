//Las Funciones son como un conjunto de sentencias que nosotros podemos utilizar para generar ciertas acciones con los valores que ya guardamos antes en las variables. Eso es una funcion
//Cuando estemos trabajando con funciones lo vamos a ver como un procedimiento o como tareas. Este conjunto de sentencias que vamos a hacer adentro en la funcion para hacer ciertos pasos o calculos utilizando sus valores para poder regresarnos otra cosa, poder validar otra cosa o generar otra cosa.

//Hay dos tipos de funciones

//Funciones declarativas
//No puede ser anonima porque a miFuncion, si le estoy generando un nombre y la voy a llamar con el nombre de la funcion
function miFuncion(){ //Esta una funcion que  va a inicilizar un valor en la memoria y va a guardar esto que seria return 3.
    return 3;
  }
  
  miFuncion();
  
  
  //Funciones de expresion
  //Las de expresion tambien se las conocen como funciones anonimas porque aqui no le estoy poniendo un nombre en la funcion. Estoy, generando una variable que tiene como valor una funcion, pero la funcion no tiene un nombre
  //Aca mandamos a llamar a la funcion con el nombre de mi variable, con los parentesis como si fuera una funcion.
  
  //var miFuncion = function(a,b){
    //return a + b;
  //}
  
  miFuncion();
  
  
  
  
  function saludarEstudiantes(estudiante){
    console.log(estudiante);
  }
  
  saludarEstudiantes("Juan");
  
  
  //function saludarEstudiantes(estudiante){
    //console.log(`Hola ${estudiante}`);
  //}
  
  saludarEstudiantes("Juan");
  
  
  //function sumar(a,b){
    //var resultado = a + b;//La variable que hicimos aca es nada mas para poder guardar este resultado en algun lugar en la memoria. Y que solo puedo utilizar esa variable acá. 
    //return resultado;
  //}
  
  sumar(1,2);
  
  
  function sumar(a,b){//Los parametros no tiene nada que ver con las variables que hicimos antes.
    return a + b;
  }
  
  sumar(1,2);
  
  
  
  //Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).
  
  //Funciones Declarativas:
  //En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
  
  function saludar(nombre) {
      console.log(`Hola ${nombre}`);
  }
  
  saludar('Diego');
  
  
  
  //Expresión de función:
  //En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
  
  var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
  }
  
  nombre('Diego');
  
  //En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.
  
  
  
  
  //Diferencias:
  //A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
  
  //Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
  
  
  
  