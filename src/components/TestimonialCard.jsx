import React from 'react';

const TestimonialCard = ({ name, review, rating }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4">
            <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                    {'★'.repeat(rating)}
                    {'☆'.repeat(5 - rating)}
                </div>
                <h3 className="ml-4 text-lg font-semibold">{name}</h3>
            </div>
            <p className="text-gray-700">{review}</p>
        </div>
    );
};

export default TestimonialCard;