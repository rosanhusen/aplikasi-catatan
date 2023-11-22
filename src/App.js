import logo from './logo.svg';
import './App.css';
function Todos1 (props) {
  return (
    <>
    <div>
      <div>
        <h5 class="card bg-dark text-center">Catatan 1</h5>
        <p>Tugas Mendesain website</p>
      </div>
      <div>
        {props.tanggal}
      </div>
    </div>
    </>
  )
}

function Todos2 (props) {
  return (
    <>
    <div>
      <div>
        <h5 class="card bg-dark text-center">Catatan 2</h5>
        <p>Tugas javascript</p>
      </div>
      <div>
        {props.tanggal}
      </div>
    </div>
    </>
  )
}

function Todos3 (props) {
  return (
    <>
    <div>
      <div>
        <h5 class="card bg-dark text-center">Catatan 3</h5>
        <p>Tugas Membuat API</p>
      </div>
      <div>
        {props.tanggal}
      </div>
    </div>
    </>
  )
}
function App() {
  const name = "rosanhusen";
  return (
    <div>
      <h1 class= "text-center"> Todo list {name}</h1>
      <div class = "text-right">
        <Todos1 tanggal = "13-11-2023"/>
        <Todos2 tanggal = "13-11-2023"/>
        <Todos3 tanggal = "13-11-2023"/>
      </div>
    </div>
  );
}

export default App;
