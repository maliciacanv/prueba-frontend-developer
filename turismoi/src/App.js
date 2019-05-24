import React, {Component} from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const myHeaders = new Headers({
      'Content-Type':'application/json',
      'Authorization':'Token token=f2b15a0105d45'
    });
    fetch('https://turismoi.pe/api/v1/packages.json', { method: 'GET',headers: myHeaders })
    .then(res => res.json())
    .then(json => { 
      console.log('soy data', json)
      this.setState({
        items: json.packages
      })
    });
  }

  render() {
    return (
      <>
      <div className="search"> 
        <form role="search">
          <div className="col-3">
            <input className="form-control" type="search"
              placeholder="Buscar en el sitio..." />
            <button type="button" className="btn btn-primary">Buscar</button>
          </div>
        </form>
      </div>
      <div className="order">
        <select name="Order" className="custom-select col-md-1 mb-1">
          <option className="d-none" value="">Order</option> 
          <option value="precio">Precio</option> 
          <option value="dias">Días</option>
        </select>
      </div> 
      <div className="cards">
        {console.log(this.status.items)}
            <div className="card" style={{width:"18rem"}}>
              <img src="" className="card-img-top" alt="foto-principal" />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                    <p className="activities">Actividades:
                    
                    </p>
                    <p className="">Desde <span> s/. </span></p>
                    <p className=""></p>
                </div>
            </div> 
          )
        }
      </div>
      </>
    );
  }
}

export default App;
