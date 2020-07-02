// por convención es ROOT ... aquí dentro irá todo
const root = document.getElementById('root');
// REACT CREATE ELEMENT param:(tipo, props, children)
const e = React.createElement

// usamos componentes funcionales (funciones que crean componentes)
// LOS DOS TIPOS DE COMPONENTES QUE USAMOS EN REACT --->
// 1) COMPONENTES PRIMITIVOS
// h1-h6, p, etc---- los creamos mediante un componente funcional

// 2) COMPONENTE FUNCIONAL
// una función que devuelve la creación de un componente
const hoy = new Date()
const Titulo = () =>
{
  return e('h1', null, 'Hola React')
}
const Subtitulo = () =>
{
  return e('h2', null, 'Probando cosas nuevas!')
}
const Fecha = () =>
{
  return e('small', null, hoy.toString())
}
const Contenido = () =>
{
  return e('p', null, 'Soy un comentario')
}
const Comentario = () =>
{
  return e('article', null, [e(Contenido), e(Fecha)])
}
const Comentarios = () =>
{
  return e('section', null, [e(Comentario), e(Comentario)])
}

// PRINCIPAL...  "app" por convención ... USAMOS PARA RENDERIZAR TODO JUNTO
const App = () =>
{
  return e('main', null, [e(Titulo), e(Subtitulo), e(Comentarios)])
}

ReactDOM.render(e(App), root)



onst root = document.getElementById('root')
const e = React.createElement
// React.createElement(tipo, props, children)
const hoy = new Date()

const Titulo = () =>
{
  return e('h1', null, 'Hola React!')
}

const Subtitulo = () =>
{
  return e('h2', null, 'Probando cosas nuevas!')
}

const fecha = e('small', null, hoy.toString())
const contenido = e('p', null, 'Soy un comentario')

// Componente primitivos
// h1-h6, div, section, p...

// Componente funcional
// En PascalCase
// Devolver un elemento de React con React.createElement
const Comentario = () =>
{
  return e('article', null, [contenido, fecha])
}

const Comentarios = () =>
{
  return e('section', null, [e(Comentario), e(Comentario)])
}

const App = () =>
{
  return e('main', null, [e(Titulo), e(Subtitulo), e(Comentarios)])
}

ReactDOM.render(e(App), root)

/**
<main>
  <h1>Hola React</h1>
  <h2>Probando cosas nuevas!</h2>
  <section>
    <p>Soy un comentario</p>
    <p>Soy un comentario</p>
  </section>
</main>
 */
// const app = e('main', null, [
//   e('h1', null, 'Hola React!'),
//   e('h2', null, 'Probando cosas nuevas!'),
//   e('section', null, [
//     e('p', null, 'Soy un comentario'),
//     e('p', null, 'Soy un comentario'),
//   ]),
// ])
