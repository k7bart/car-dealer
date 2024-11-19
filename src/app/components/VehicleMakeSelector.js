'use client';

import { useEffect, useState } from 'react';
import fetchAllMakes from '../functions/fetchAllMakes';

const VehicleMakeSelector = ({ onChange }) => {
    const [makes, setMakes] = useState([]);
    const [selectedMake, setSelectedMake] = useState('');

    useEffect(() => {
        onChange(selectedMake);
    }, [selectedMake]);

    useEffect(() => {
        const fetchMakes = async () => {
            try {
                const data = await fetchAllMakes();
                setMakes(data);
            } catch (error) {
                console.error('Error fetching makes:', error);
            }
        };
        fetchMakes();
    }, []);

    return (
        <div className="mb-4">
            <label className="block text-gray-700">Select Vehicle Make:</label>
            <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                aria-label="Select vehicle make"
            >
                <option value="">Choose a Make</option>
                {makes.map((make) => (
                    <option key={make.MakeId} value={make.MakeId}>
                        {make.MakeName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VehicleMakeSelector;
