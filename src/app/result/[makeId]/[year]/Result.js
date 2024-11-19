import fetchModelsByIdAndYear from '@/app/functions/fetchModelsByIdAndYear';

const Result = async ({ params: { makeId, year } }) => {
    const models = await fetchModelsByIdAndYear(makeId, year);
    const makeName = models[0]?.Make_Name;

    return (
        <div>
            <p className="pb-3">Vehicle Models for {makeName}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {models.map((model) => (
                    <div key={model.Model_ID} className="border p-4 rounded">
                        <p>{model.Model_Name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;
