import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import gutterCleaningImage from '../assets/images/gutter-cleaning.jpg';

const GutterCleaning = () => {
    const serviceData = {
        title: "Gutter Cleaning",
        description: "Specialized cleaning for when you're moving into a new home or leaving your current one.",
        image: gutterCleaningImage,
        content: (
            <>
                <p>Our gutter cleaning service helps protect your home from water damage by ensuring proper water flow away from your property. Clogged gutters can lead to a variety of problems, including foundation damage, basement flooding, and roof leaks.</p>
                
                <p className="my-4">Our team of professionals will thoroughly remove leaves, twigs, and debris from your gutters and downspouts, allowing rainwater to flow freely. We also inspect for any damage or potential issues that might need attention.</p>
                
                <p>Regular gutter maintenance is an essential part of home care, especially after fall when leaves accumulate, and before the rainy season to ensure your gutters are ready to handle the increased water flow.</p>
            </>
        ),
        features: [
            {
                title: "Complete Debris Removal",
                description: "Thorough cleaning of all accumulated leaves, twigs, and debris from gutters."
            },
            {
                title: "Downspout Clearing",
                description: "Ensuring proper water flow through downspouts to direct water away from your foundation."
            },
            {
                title: "Gutter Inspection",
                description: "Identification of any damage, leaks, or issues that might need repair."
            },
            {
                title: "Preventative Maintenance",
                description: "Recommendations for gutter guards or regular maintenance schedules."
            }
        ]
    };

    return <ServicePageLayout service={serviceData} />;
};

export default GutterCleaning;
