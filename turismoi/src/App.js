import React, { useState} from 'react';
import './App.css';
import { useFetch, sortPrices, sortDays, searchTour } from './component/functions'
  
  const Container = () =>  {
    const myHeaders = new Headers({
       'Content-Type':'application/json',
       'Authorization':'Token token=f2b15a0105d45'
    });
    const data = useFetch('https://turismoi.pe/api/v1/packages.json', { method: 'GET',headers: myHeaders });
    
    const [termino, setTermino] = useState('');
    const [result, setResult] = useState([]);
    const [valueSelect, setValueSelect] = useState('');

    const searchValue = (string) => {
        setResult(searchTour(string, data));
        setTermino(string);
    }
    const dataContainer = termino === '' ? data : result;

    const orderValue = (string) => {
      if(string === 'precio'){
        setResult(sortPrices(data))
      } else if(string === 'dias'){
        setResult(sortDays(data))
      }
     setValueSelect(string)
    }

    return (
      <>
        <div className="search" > 
          <form className="form">
            <div className="form-control">
              <input className="input" type="text" onChange = {term => searchValue(term.target.value)}
                placeholder="Buscar por región..." /><i className="fas fa-search"></i>
            </div>
          </form>
        </div>
        <div className="order">
          <select name="orden" className="custom-select" onChange = {val => orderValue(val.target.value)} >
            <option className="d-none" >Orden</option> 
            <option value="precio">Precio</option> 
            <option value="dias">Días</option>
          </select>
        </div> 
        <div className="cards">
          {dataContainer.map(element => (
          <div className="card" style={{width:"18rem"}}>
            <img src = {element.principal_photo} className="card-img-top " alt="foto-principal" />
              <div className="card-body">
                <h5 className="card-title">{element.name} - {element.city_names}</h5>
                  <div className="activities">Actividades:
                    {element.activities.map(item => (
                      <span> {item.name},</span>
                    ))}
                  </div>
              </div> 
              <div className="footer-container">
                <div className="price-text">
                <small className="">Desde</small>
                </div>
                  <div className="footer-card">
                    <div className="day-card">
                      <p className="day">{element.days_and_nights}</p>
                    </div>
                    <div className="price-card">
                      <h3 className="price">s/.{element.price}</h3>
                    </div>
                  </div>
              </div>
          </div> 
          ))} 
        </div>
      </>
    )
  }

  const App = () => (
    <div>
      <Container />
    </div>
  )

  export default App;
