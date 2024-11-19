const vehicleModelsEndpoint =
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';

const fetchAllMakes = async () => {
    try {
        const response = await fetch(vehicleModelsEndpoint);
        const data = await response.json();
        return data.Results;
    } catch (error) {
        console.error('Error fetching vehicle makes:', error);
    }
};

export default fetchAllMakes;
