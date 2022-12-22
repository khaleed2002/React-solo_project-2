import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Travel from './components/Travel'
import Navbar from './components/Navbar'
import travelData from './data'
function App() {
  const [count, setCount] = useState(0)
  const travelComponents=travelData.map((travelItem,index)=>{
    if(index===travelData.length-1){
      return <Travel item={travelItem}/>
    } else{

      return <Travel className="travel-box--border" item={travelItem}/>
    }
  })
  return (
    <div className='container'>
      <Navbar />
      <section className='travel-boxes'>
        {travelComponents}
      </section>
    </div>
  )
}

export default App
