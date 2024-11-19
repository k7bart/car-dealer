const currentYear = new Date().getFullYear();

const getYears = (startYear = 2015) => {
    if (currentYear > startYear)
        return Array.from(
            { length: currentYear - startYear + 1 },
            (_, index) => startYear + index
        );
};

export default getYears;
