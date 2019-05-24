import React, {Component} from 'react';
import './App.scss';

class App extends Component {

  render() {
    return (
      <>
      <div className="search"> 
        <form role="search">
          <div class="col-3">
            <input class="form-control" type="search"
              placeholder="Buscar en el sitio..." />
            <button type="button" class="btn btn-primary">Buscar</button>
          </div>
        </form>
      </div>
      <div className="order">
        <select name="Order" class="custom-select col-md-1 mb-1">
          <option class="d-none" value="">Order</option> 
          <option value="precio">Precio</option> 
          <option value="dias">Días</option>
        </select>
      </div> 
      <div className="cards">
        <div class="card" style={{width:"18rem"}}>
          <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
