import logo from './logo.svg';
import './App.css';
import GithubImage from './github.png';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github Profile</h1>
      <form>
        <div className="form-group">
          
          <div className="input-group">
            <input 
              type="text" 
              className="form-control"
              required
            />
            <span>
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img 
          src={GithubImage} 
          className="responsive rounded-circle" 
          alt=""
          height="200px"
        />
        
      </div>
    </div>
  );
}

export default App;
