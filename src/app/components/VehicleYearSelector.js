import getYears from '../functions/getYears';

const years = getYears();

const VehicleYearSelector = ({ selectedYear, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="year-select" className="block text-gray-700">
                Select Model Year:
            </label>
            <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                aria-label="Select model year"
            >
                <option value="">Choose a Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VehicleYearSelector;
