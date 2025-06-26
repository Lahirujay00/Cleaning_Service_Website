import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import HighPressureWashingImage from '../assets/images/high.jpg';

const HighPressureWashing = () => {
    const serviceData = {
        title: "High-Pressure Washing",
        description: "Thorough cleaning after construction or renovation projects to make your space spotless.",
        image: HighPressureWashingImage,
        content: (
            <>
                <p>Our high-pressure washing service efficiently removes stubborn dirt, grime, mold, mildew, and stains from various exterior surfaces. This powerful cleaning method is perfect for driveways, sidewalks, patios, decks, fences, and building exteriors.</p>
                
                <p className="my-4">Using professional-grade equipment and appropriate cleaning solutions, our team can restore the appearance of weathered surfaces and remove years of built-up dirt. The high-pressure water stream can reach places that are difficult to clean manually.</p>
                
                <p>Regular pressure washing not only enhances your property's curb appeal but also helps prevent damage caused by mold, mildew, and other contaminants that can deteriorate surfaces over time.</p>
            </>
        ),
        features: [
            {
                title: "Surface-Appropriate Pressure",
                description: "Adjustable pressure levels to safely clean different surfaces without causing damage."
            },
            {
                title: "Eco-Friendly Cleaning Solutions",
                description: "Use of environmentally responsible detergents when necessary for enhanced cleaning."
            },
            {
                title: "Stain Removal",
                description: "Effective elimination of oil stains, rust, graffiti, and other stubborn marks."
            },
            {
                title: "Preventative Maintenance",
                description: "Regular cleaning that extends the life of your exterior surfaces and prevents deterioration."
            }
        ]
    };

    return <ServicePageLayout service={serviceData} />;
};

export default HighPressureWashing;
