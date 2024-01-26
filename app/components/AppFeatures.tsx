"use lient";
import { FaChalkboardTeacher, FaChartLine } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'

interface Props {
    title: string;
    description: string;
}
const Feature = ({ title, description }: Props) => {
    return (
        <div className="p-8 bg-white rounded-md shadow flex flex-col items-center">

            {title === 'Interactive Lessons' && <FaChalkboardTeacher size={60} color="#5ac776" />}
            {title === 'Personalized Learning' && <IoMdSchool size={60} color="#5ac776" />}
            {title === 'Track Your Progress' && <FaChartLine size={60} color="#5ac776" />}

            <h2 className="text-xl text-gray-800 my-4">{title}</h2>
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
            <div
                className="max-md:grid max-md:grid-cols-1 md:flex justify-center md:space-x-5 max-md:space-y-3"
            >
                {features.map((feature, index) => (
                    <Feature key={index} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

export default AppFeatures;
