// import React, {Component} from 'react';
import './App.scss';

import React, { useState, useEffect } from 'react';

  const useFetch = (url, auth) => {
    const [data, setData] = useState([]);
    useEffect( () => {
      fetch(url, auth)
      .then(res => res.json())
      .then(data => setData(data.packages));
    }, []);
    return data;
  }
  
  const sortPrices = (data) => data.sort((aa,bb) => aa.price > bb.price ? 1 :-1);
 
  const sortDays = (data) => data.sort((aa,bb) => aa.days_and_nights > bb.days_and_nights ? 1 :-1);
  
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
        let regex = new RegExp(string, 'i');
        let filtered = data.filter(item => regex.test(item.city_names));
        setResult(filtered);
        setTermino(string);
    }
    const dataContainer = termino === '' ? data : result

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
        <div className="search"> 
          <form role="search">
            <div className="col-3">
              <input className="form-control" type="search" onChange = {term => searchValue(term.target.value)}
                placeholder="Buscar por región..." />
            </div>
          </form>
        </div>

        <div className="order">
          <select name="Orden" className="custom-select col-md-1 mb-1" onChange = {val => orderValue(val.target.value)} >
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
                  <p className="activities">Actividades:
                    {element.activities.map(item => (
                      <p>{item.name}</p>
                    ))}
                  </p>
                    <p className="">Desde <span> s/.{element.price} </span></p>
                    <p className="">{element.days_and_nights}</p>
              </div> 
          </div> 
          ))} 
        </div>
      </>
    );
  }

  const App = () => (
    <div>
      <Container />
    </div>
  )

  export default App;
