import React from 'react';

const ServiceCard = ({ iconPath, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={iconPath} alt={title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default ServiceCard;
