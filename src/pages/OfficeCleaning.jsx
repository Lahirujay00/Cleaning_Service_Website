import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import office from '../assets/images/office.jpg';

const OfficeCleaning = () => {
    const serviceData = {
        title: "Office Cleaning",
        description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
        image: office,
        content: (
            <>
                <p>Maintain a clean, professional workplace with our comprehensive office cleaning services. A clean office not only creates a positive impression on clients and visitors but also contributes to the productivity and wellbeing of your employees.</p>
                
                <p className="my-4">Our commercial cleaning team is trained to work efficiently and discreetly, minimizing disruption to your business operations. We can schedule our services during or after business hours, depending on your preferences.</p>
                
                <p>From reception areas and conference rooms to restrooms and employee break areas, we provide thorough cleaning services that address all aspects of your commercial environment.</p>
            </>
        ),
        features: [
            {
                title: "Daily/Weekly Maintenance",
                description: "Regular cleaning schedules to maintain consistent cleanliness and hygiene."
            },
            {
                title: "Floor Care",
                description: "Specialized cleaning for all types of commercial flooring, from carpet to hardwood."
            },
            {
                title: "Sanitization Services",
                description: "Thorough disinfection of high-touch surfaces to reduce the spread of germs."
            },
            {
                title: "Flexible Scheduling",
                description: "Services available during or after business hours to minimize disruption."
            }
        ]
    };

    return <ServicePageLayout service={serviceData} />;
};

export default OfficeCleaning;
