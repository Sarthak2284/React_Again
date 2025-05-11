import { useState } from 'react'

import './App.css'
import Bodybg from './component/Bodybg'
import Card from './component/Card'
function App() {

  return (
    <>
      <Bodybg>
      <div className="flex flex-wrap justify-center">
        <Card heading="Lizard" desc = "Lizard is the common name used for all squamate reptiles other than snakes (and to a lesser extent amphisbaenians), encompassing over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic island chains."/>
        <Card imgIn='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Indian_Cobra%2C_crop.jpg/500px-Indian_Cobra%2C_crop.jpg' heading="Snakes" desc = "Snakes are elongated limbless reptiles of the suborder Serpentes. Cladistically squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales much like other members of the group. "/>
      </div>
      </Bodybg>
    </>
  )
}

export default App
