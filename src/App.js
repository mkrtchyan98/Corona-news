import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import './App.css';
import {fetchData,fetchCountries} from './redux-store/actionCreators';
import Country from './components/Country'

function  App()  {
  const [country,setCountry] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(state =>state.items,shallowEqual);
  const countries = useSelector(state => state.countries,shallowEqual);
     const handleChange = event => {
    setCountry(event.target.value);
  };

 useEffect(()=> {
    dispatch(fetchData(country));
    dispatch(fetchCountries());
  },[country])


  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Corona News</h1>
     <h2>Select Country</h2>
     <select
      id="countries"
      onChange={handleChange}
>
     {countries.map(item=>(
      <>
      <option aria-label="country" value=""/>
        <option
         value={item}
         key={item}
         >{item}</option>
         </>
      ))}
</select>
<Country countries={items} />

     
    

      </header>
    </div>
  );
}

export default  App;
