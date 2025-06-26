import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import officeCleaningImage from '../assets/images/office-cleaning.jpg';

const ResidentialCleaning = () => {
    const serviceData = {
        title: "Residential Cleaning",
        description: "Comprehensive cleaning services for homes of all sizes, tailored to your specific needs.",
        image: officeCleaningImage,
        content: (
            <>
                <p>Our residential cleaning services are designed to give you more time to enjoy the things you love while we take care of keeping your home spotless. Whether you need a one-time deep clean or regular maintenance, our team of trained professionals delivers exceptional results every time.</p>
                
                <p className="my-4">We understand that every home is unique, which is why we offer customized cleaning solutions tailored to your specific requirements. Our thorough approach ensures that no corner goes untouched, from kitchens and bathrooms to living spaces and bedrooms.</p>
                
                <p>Using eco-friendly cleaning products and state-of-the-art equipment, we provide a healthier environment for your family while achieving outstanding cleanliness that you can see and feel.</p>
            </>
        ),
        features: [
            {
                title: "Regular Maintenance Cleaning",
                description: "Weekly, bi-weekly, or monthly cleaning services to keep your home consistently clean and tidy."
            },
            {
                title: "Deep Cleaning",
                description: "Intensive cleaning that reaches areas often missed during regular cleaning sessions."
            },
            {
                title: "Custom Cleaning Plans",
                description: "Tailor-made cleaning solutions focusing on the areas that matter most to you."
            },
            {
                title: "Eco-Friendly Products",
                description: "Safe, environmentally responsible cleaning products that are gentle on your home and family."
            }
        ]
    };

    return <ServicePageLayout service={serviceData} />;
};

export default ResidentialCleaning;
