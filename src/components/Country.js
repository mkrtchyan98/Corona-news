import React from 'react';
import CountryInfo from './CoutryInfo';

const Country = (props) => {
	return (
		      <div>
		      {props.countries.map(item => (
		      	<CountryInfo 
		      	key={item.country}
		      	item={item}
		      	/>
          ))}
        </div>

        )
}

export default Country;