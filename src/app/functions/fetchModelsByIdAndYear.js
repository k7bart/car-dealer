const fetchModelsByIdAndYear = async (makeId, year) => {
    const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await res.json();
    return data.Results;
};

export default fetchModelsByIdAndYear;
