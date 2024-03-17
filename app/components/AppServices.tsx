import { FaLanguage, FaComments, FaBriefcase, FaGlobe } from "react-icons/fa";

const services = [
  {
    title: "Language Learning",
    description:
      "Unlock the world by mastering new languages. Our tailored language courses cater to all levels, from beginners to advanced learners. Experience interactive lessons and personalized guidance from expert instructors.",
    icon: <FaLanguage className="text-6xl text-blue-500" />,
  },
  {
    title: "Interpretation",
    description:
      "Break down language barriers with our professional interpretation services. Whether it's simultaneous or consecutive interpretation, our skilled interpreters ensure seamless communication in conferences, meetings, and events.",
    icon: <FaComments className="text-6xl text-green-500" />,
  },
  {
    title: "Translation",
    description:
      "Bridge cultures and connect globally with accurate translation services. From documents and websites to marketing materials and legal texts, our translators deliver precise and culturally relevant translations in multiple languages.",
    icon: <FaGlobe className="text-6xl text-red-500" />,
  },
  {
    title: "Consultancy",
    description:
      "Navigate the complexities of language and cultural diversity with our expert consultancy services. Gain insights, strategies, and solutions tailored to your specific needs, whether it's international business expansion or cross-cultural communication training.",
    icon: <FaBriefcase className="text-6xl text-purple-500" />,
  },
];

const AppServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="text-center">{service.icon}</div>
            <h2 className="text-xl font-bold text-center mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppServices;
