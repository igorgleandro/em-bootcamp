import './App.css'
import NavBar from './components/NavBar'
import ProdImgRender from './components/ProdImgRender'
import ProdDescRender from './components/ProdDescRender'

function App() {
  
  return (
    <>
    <NavBar />
    <div className='productBox'>
    <ProdImgRender />
    <ProdDescRender />
    </div>
    </>
  )
}

export default App
