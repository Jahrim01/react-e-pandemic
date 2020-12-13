import './App.css';
import Pictures from './pictures.json';

function App() {
  return (
    <div className="app">
      {Pictures.map(post => {
        return(
          <div key={post.id}>
              <h3>{post.title}</h3>
              <img src={post.url} alt=""></img>
          </div>
        )
      })}
    </div>
  );
}

export default App;
