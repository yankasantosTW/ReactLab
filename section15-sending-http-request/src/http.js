export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const responseData = await response.json();
    //verify if the response it's received successfully
    if(!response.ok){
        throw new Error('Failed to fetch places');
    }
    return responseData.places;
}
//We use the PUT method to Create and Update in the same object URL
// We are using the distructure as {places} because the key is "places" and the value is "places"
export async function updateUserPlaces(places){
    const response =  await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    
    const responseData = await response.json();
    
    if(!responseData.ok){
        throw new Error('Failed to update user data.');
    }
    return responseData.message;

}