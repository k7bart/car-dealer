import React from 'react';

const Page = ({ title, children }) => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default Page;
