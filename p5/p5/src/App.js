import {
  Link,
} from "react-router-dom";
import router from "./router";


function App() {
  return (
    <div className="App flex-col">
      <header className="App-header">
        <div className="flex bg-gray-500">
          {router.routes.map((el, index) => (
            <Link to={`${el.path}`} className="m-10">{el.path}</Link>
          ))}
        </div>
      </header>

      <main className="App-main">
        <p>123</p>
      </main>

      <footer className="App-footer">
        <p>456</p>
      </footer>
    </div>
  );
}

export default App;
