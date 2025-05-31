import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="text-2xl w-screen min-h-screen bg-stone-950 overflow-x-hiddn flex items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-10">
        <h2 className="text-stone-50 text-3xl font-semibold">
          Who's Watching?
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Card
            lname="V"
            image="https://c4.wallpaperflare.com/wallpaper/262/188/865/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg"
            btnText="Play"
          />
          <Card
            lname="San"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQE23TS3eAOaHVtLYT2_EpD4GWtE5RLEc7HA&s"
            btnText="Play"
          />
          <Card
            fname
            lname="Vice City"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhTasqcmfxtKHB8UIYQaWN_bmA-bgpXQqXQ&s"
            btnText="Play"
          />

        </div>
      </div>
    </div>
  )
}

export default App
