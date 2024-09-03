import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  //Using the UseEffect to to fetch the data once the component is mounted
  useEffect(()=> {
    //Refectoring the fetch to create a function using the async await
    async function fetchPlaces(){
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places');
      const responseData = await response.json();
      setAvailablePlaces(responseData.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

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
