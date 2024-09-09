export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const responseData = await response.json();
    //verify if the response it's received successfully
    if(!response.ok){
        throw new Error('Failed to fetch places');
    }
    return responseData.places;
}