import Message from "./components/Messagge"
import Counter from "./components/Counter"


function App() {

  return (
    <>
<header> 
  <h1 className="h1">Header</h1>
  <p> Explorando el Desarrollo Frontend con React.js </p>
</header>

<main>
  <Message clasList="mensaje" text="Tema" />
  <p>Main</p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="img1" />
</main>

<footer>
  <Message clasList="mensaje" text="Programación declarativa y eficiente para construir interfaces de usuario." />
  <p>Footer</p>
  <img src="https://yt3.googleusercontent.com/RP4KvTlSWm3hep7N_-35BfDMSJjl_ehpFe0ObvedehWoX3_uFL2OBo7W1NEvRN0jO0D_vR2F3w=s900-c-k-c0x00ffffff-no-rj" alt="img2" />
  </footer>

    </>
  )
}
export default App
