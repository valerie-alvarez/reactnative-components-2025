# Proyecto de Contadores en React Native

Este es un proyecto básico de React Native que demuestra cómo crear componentes reutilizables para contadores y una lista de estos contadores. La aplicación utiliza `SafeAreaView` para asegurar una correcta visualización en dispositivos con diferentes áreas seguras.

## Instrucciones para Ejecutar el Proyecto

Sigue los pasos a continuación para clonar el repositorio, instalar las dependencias necesarias y ejecutar la aplicación.

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local usando el siguiente comando en tu terminal o consola:

```bash
git clone {link}        #<-- ese link puede obtenerse arriba del boton verde, copiamos todo el link
```
### 2. Navegamos al proyecto
```bash
cd practica1            #Navegamos dentro del proyecto
```
### 3. Instalamos las dependencias
```bash
npm install             #Instalamos las dependencias
```
### 4. Iniciamos el proyecto
```bash
npx expo start --tunnel #Recordemos que esto es necesario debido a la red del salon 
```

### Nota
Si gustan pueden usar este proyecto como base para empezar el taller

# Taller de React Native: Ejercicios de Componentes

## Como se entrega el taller

Tienen dos formas de entregar este taller.
1. Adjuntar todos los archivos .js usados, Siendo este el archivo `App.js` y todos los componentes
dentro de la carpeta `components/`
2. Monstar un repositorio con el proyecto creado <--- prefiero eso

Este taller está diseñado para ayudarte a aprender y practicar conceptos clave de React Native relacionados con componentes, uso del estado, manejo de eventos y comunicación entre componentes.

## 1. Paso de Parámetros a Componentes

### Ejercicio 1: Saludo Personalizado
- **Instrucción**: Crea un componente `Greeting.js` que reciba una prop `name` y muestre un saludo personalizado en pantalla (por ejemplo, "Hola, [name]!").
- **Objetivo**: Practicar el paso de parámetros a un componente a través de props.

### Ejercicio 2: Detalles de Usuario
- **Instrucción**: Crea un componente `UserDetails.js` que reciba props para `nombre`, `edad`, y `ocupación`, y muestre esta información en pantalla de manera formateada.
- **Objetivo**: Familiarizarse con el uso de múltiples props para pasar información variada a un componente.

### Ejercicio 3: Lista de Tareas
- **Instrucción**: Crea un componente `Task.js` que reciba como prop un objeto `task` con propiedades `title` y `completed`. El componente debe mostrar el título de la tarea y si está completada o no.
- **Objetivo**: Aprender a trabajar con objetos como props y a renderizar información condicionalmente.

## 2. Uso de `useState`

### Ejercicio 1: Control de Visibilidad
- **Instrucción**: Crea un componente `ToggleText.js` que muestre un texto solo si se presiona un botón que cambia el estado de visibilidad de ese texto usando `useState`. 
- **Objetivo**: Practicar el uso de `useState` para manejar el estado local y condicionar la renderización de elementos.

### Ejercicio 2: Formulario Dinámico
- **Instrucción**: Crea un componente `DynamicForm.js` que tenga un campo de texto y un botón. Al presionar el botón, el texto ingresado debe almacenarse en un estado y mostrarse debajo del formulario.
- **Objetivo**: Entender cómo usar `useState` para actualizar y manejar entradas de formularios.

### Ejercicio 3: Contador de Clics
- **Instrucción**: Crea un componente `ClickCounter.js` que tenga un botón y muestre el número de veces que el botón ha sido presionado, utilizando `useState`.
- **Objetivo**: Aprender cómo usar `useState` para rastrear acciones del usuario y actualizar la interfaz de usuario en consecuencia.

## 3. Eventos con Botones

### Ejercicio 1: Formulario de Registro
- **Instrucción**: Crea un componente `RegistrationForm.js` que contenga campos de texto para el nombre, correo electrónico y contraseña, y un botón de registro. Al presionar el botón, los datos ingresados deben ser pasados a `App.js` y mostrados en la pantalla principal.
- **Objetivo**: Practicar el manejo de eventos con botones y el paso de datos desde componentes hijos a componentes padres.

### Ejercicio 2: Control de Tema
- **Instrucción**: Crea un componente `ThemeSwitcher.js` que tenga un botón para alternar entre dos temas (claro y oscuro). El tema seleccionado debe enviarse al componente `App.js` para aplicarlo globalmente.
- **Objetivo**: Manejar eventos y pasar datos (el tema seleccionado) hacia arriba en la jerarquía de componentes.

### Ejercicio 3: Botón de Alerta
- **Instrucción**: Crea un componente `AlertButton.js` con un botón que, al ser presionado, muestre una alerta con un mensaje personalizado definido en el componente `App.js`.
- **Objetivo**: Aprender a manejar eventos de botones y ejecutar funciones definidas en componentes padres.

## 4. Paso de Parámetros de Padre a Hijo

### Ejercicio 1: Contador desde el Padre
- **Instrucción**: Crea un componente `ParentCounter.js` que contenga un estado de contador. Pasa este estado y una función para incrementar el contador a un componente hijo `ChildCounter.js`, que mostrará el contador y tendrá un botón para incrementarlo.
- **Objetivo**: Aprender a pasar estados y funciones desde el componente padre al hijo.

### Ejercicio 2: Galería de Imágenes
- **Instrucción**: Crea un componente `ImageGallery.js` que tenga un array de URLs de imágenes en su estado. Pasa este array como prop a un componente hijo `ImageList.js` que renderiza todas las imágenes.
- **Objetivo**: Manejar arrays y objetos como props y entender cómo trabajar con listas en componentes hijos.

### Ejercicio 3: Juego de Adivinanzas
- **Instrucción**: Crea un componente `Game.js` que tenga un estado `correctAnswer`. Pasa este estado como prop a un componente hijo `GuessForm.js`, que tiene un campo de texto para adivinar y un botón para enviar. `GuessForm.js` debe recibir la respuesta correcta como prop y mostrar si la adivinanza es correcta o incorrecta.
- **Objetivo**: Practicar el paso de datos complejos y la lógica condicional basada en props.
