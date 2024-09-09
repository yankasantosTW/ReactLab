import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();


  //Using the UseEffect to to fetch the data once the component is mounted
  useEffect(()=> {
    //Refectoring the fetch to create a function using the async await
    async function fetchPlaces(){
      setIsFetching(true);
      //Using the try catch to handler the error on request API
      try{
        const response = await fetch('http://localhost:3000/placess');
        const responseData = await response.json();
        //verify if the response it's received successfully
        if(!response.ok){
          throw new Error('Failed to fetch places');
        }
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            responseData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
        })
      }
      catch(error){
        setError({message: error.message || 'Could not fetch places. Try again later.'});
      }
      
      setIsFetching(false);
    }
    
    fetchPlaces();
  }, []);
  //Render the error message if the request fail
  if (error) {    
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }        

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
