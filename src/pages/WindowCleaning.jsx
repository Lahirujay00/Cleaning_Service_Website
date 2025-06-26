import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import windowCleanImage from '../assets/images/window-cleaning.jpg';

const WindowCleaning = () => {
    const serviceData = {
        title: "Window Cleaning",
        description: "Deep cleaning services to remove dust, debris, and residues after construction or renovation.",
        image: windowCleanImage,
        content: (
            <>
                <p>Our professional window cleaning service delivers crystal-clear results that transform the look and feel of your home or business. Clean windows allow more natural light into your space and significantly improve your view of the outside world.</p>
                
                <p className="my-4">Using specialized tools and techniques, our experienced team cleans not just the glass but also the frames, tracks, and screens to ensure a comprehensive clean. We can safely access windows at any height, from ground floor to multi-story buildings.</p>
                
                <p>Regular professional window cleaning helps prevent glass degradation caused by hard water stains, mineral deposits, oxidation, and other environmental contaminants that can permanently damage glass surfaces.</p>
            </>
        ),
        features: [
            {
                title: "Interior & Exterior Cleaning",
                description: "Thorough cleaning of both sides of your windows for maximum clarity."
            },
            {
                title: "Frame & Track Cleaning",
                description: "Removal of dirt and debris from window frames, sills, and tracks."
            },
            {
                title: "Screen Cleaning",
                description: "Gentle cleaning of window screens to remove dust and improve airflow."
            },
            {
                title: "Hard Water Stain Removal",
                description: "Special treatments for removing mineral deposits and hard water stains."
            }
        ]
    };

    return <ServicePageLayout service={serviceData} />;
};

export default WindowCleaning;
