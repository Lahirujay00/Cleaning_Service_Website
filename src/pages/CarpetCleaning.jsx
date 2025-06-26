import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import carpetCleaningImage from '../assets/images/CarpetCleaning.jpg';

const CarpetCleaning = () => {
    const serviceData = {
        title: "Carpet Cleaning",
        description: "Intensive cleaning service that tackles even the most stubborn dirt and grime.",
        image: carpetCleaningImage,
        content: (
            <>
                <p>Our professional carpet cleaning service restores the beauty and extends the life of your carpets. Using advanced equipment and effective cleaning solutions, we remove deep-seated dirt, stains, and allergens that regular vacuuming can't reach.</p>
                
                <p className="my-4">Whether you need residential or commercial carpet cleaning, our team delivers exceptional results that leave your carpets looking and feeling fresh. Our methods are safe for all types of carpet materials and won't leave behind any harmful residues.</p>
                
                <p>Regular professional carpet cleaning not only improves the appearance of your carpets but also contributes to a healthier indoor environment by removing dust mites, pet dander, and other allergens that can affect air quality.</p>
            </>
        ),
        features: [
            {
                title: "Deep Extraction Cleaning",
                description: "Removes embedded dirt and grime from deep within carpet fibers."
            },
            {
                title: "Stain Removal",
                description: "Specialized treatments for tough stains like wine, coffee, and pet accidents."
            },
            {
                title: "Odor Elimination",
                description: "Effective solutions to remove unpleasant odors and leave carpets smelling fresh."
            },
            {
                title: "Quick Drying",
                description: "Advanced techniques that minimize drying time so you can use your space sooner."
            }
        ]
    };

    return <ServicePageLayout service={serviceData} />;
};

export default CarpetCleaning;
