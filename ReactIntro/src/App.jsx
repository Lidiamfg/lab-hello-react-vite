import ironhackLogo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import './Exercise.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='navigate'>
          <img src={ironhackLogo} className='logo' alt="Ironhack Logo" />
          <br />
          <img src={menu} className='menu' alt="Menu" />
        </div>
        <div className='intro-text'>
          <h1>{"Say hello to ReactJS"}</h1>
          <p>{"You will learn how to use"}</p>
          <p>{"the most popular frontend library,"}</p>
          <p>{"and become a super Ninja developer."}</p>
          <button>{"Awesome!"}</button>
        </div>
      </div>
      <div className='characteristics'>
        <div>
          <img src={icon1} alt="Declarative ilustration" />
          <h2>{"Declarative"}</h2>
          <p>{"React makes it painless to create interactive UIs."}</p>
        </div>
        <div>
          <img src={icon2} alt="Components ilustration" />
          <h2>{"Components"}</h2>
          <p>{"Build encapsulated components that manage their state."}</p>
        </div>
        <div>
          <img src={icon3} alt="Single-Way ilustration" />
          <h2>{"Single-Way"}</h2>
          <p>{"A set of immutable values are passed to the component's."}</p>
        </div>
        <div>
          <img src={icon4} alt="JSX ilustration" />
          <h2>{"JSX"}</h2>
          <p>{"Statically-typed, designed to run on modern browsers."}</p>
        </div>

      </div>

    </div>

  )
}

export default App
