// Features.js
import React from 'react';


interface Props {
    title: string;
    description: string;
}
const Feature = ({ title, description }: Props) => {
    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl  text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const AppFeatures = () => {
    const features = [
        { title: 'Interactive Lessons', description: 'Engage in fun and effective lessons.' },
        { title: 'Personalized Learning', description: 'Learn at your own pace, with tailored lessons.' },
        { title: 'Track Your Progress', description: 'Monitor your improvement over time.' },
    ];

    return (
        <section className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Feature key={index} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

export default AppFeatures;
