import './App.css'
import comingSoon from './assets/coming-soon.png'

function App() {

  return (
    <div className="flex justify-center bg-[#ffd000] h-screen">
      <img src={comingSoon} className="h-[80%] md:h-full" />
    </div>
  )
}

export default App
