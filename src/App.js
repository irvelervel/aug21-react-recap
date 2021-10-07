import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNavbar from './components/TopNavbar'
import BottomFooter from './components/BottomFooter'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Data from './components/Data'

function App() {
  const options = ['posts', 'albums', 'photos', 'todos']

  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/data" exact render={(routerProps) => <Data {...routerProps} options={options} />} />
        <BottomFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
