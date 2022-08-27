import List from './components/List'
import './App.css'
import FirstComponent from './components/FirstComponent'
import Hook from './components/Hook'
import Images from './components/images'
import RenderCond from './components/RenderCond'
import Fragment from './components/Fragment'
import Container from './components/Container'



function App() {
 return (
  <div>
  <h1>Hello World!</h1>
  <FirstComponent />
  <Images />
  <Hook />
  <List />
  <RenderCond x={3}/>
  <Fragment />
  <Container>
    <h1>Esse é filho do container com o children</h1>
  </Container>
  </div>
 )
}

export default App
