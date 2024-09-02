import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  //fetch it's a promise that returns a response object with data from API calls
  fetch('http://localhost:3000/places')
  .then((response)=>{
    return response.json();
  })
  .then((responseData)=>{
    setAvailablePlaces(responseData.places);
  });

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
