'use client';

import { useState } from 'react';
import NextButton from './NextButton';
import VehicleMakeSelector from './VehicleMakeSelector';
import VehicleYearSelector from './vehicleYearSelector';

const VehicleSelector = () => {
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const isDisabled = !(selectedMake && selectedYear);

    return (
        <div className="p-4">
            <VehicleMakeSelector onChange={setSelectedMake} />

            <VehicleYearSelector
                selectedYear={selectedYear}
                onChange={setSelectedYear}
            />

            <NextButton
                isDisabled={isDisabled}
                makeId={selectedMake}
                year={selectedYear}
            />
        </div>
    );
};

export default VehicleSelector;
