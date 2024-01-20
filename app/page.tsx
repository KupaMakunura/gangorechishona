"use client";
import { Link } from "react-daisyui";
import AppNavbar from "./components/AppNavBar";
import { Links, Services } from "./constants";
import { FaChevronRight } from "react-icons/fa"
import AppHeader from "./components/AppHeader";
import AppFeatures from "./components/AppFeatures";

export default function Home() {

  const instructors = [
    {
      id: 1,
      name: 'Jane Doe',
      image: 'instructor_jane.jpg', // Add the image file name
      description: 'Passionate language teacher with years of experience. Specializes in interactive and engaging lessons.',
    },
    {
      id: 2,
      name: 'John Smith',
      image: 'instructor_john.jpg', // Add the image file name
      description: 'Experienced polyglot dedicated to making language learning accessible and enjoyable for all students.',
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      image: 'instructor_maria.jpg', // Add the image file name
      description: 'Dynamic language educator who believes in the power of personalized learning for rapid language acquisition.',
    },
  ];

  const lessonImages = [
    'lesson1.jpg', // Add the image file names
    'lesson2.jpg',
    'lesson3.jpg',
    'lesson4.jpg',
  ];
  return (
    <>
      <AppNavbar />
      <AppHeader />
      <AppFeatures/>

      <div>
        <main className="container mx-auto mt-8">
          <section className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              Meet Our Instructors
            </h1>
            <p className="text-gray-600">
              Our experienced instructors are here to guide you on your language learning journey.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white rounded-md shadow-md p-6 mb-4">
                <img
                  src={`path/to/images/${instructor.image}`} // Adjust the path to your image directory
                  alt={`Instructor ${instructor.name}`}
                  className="rounded-full mx-auto mb-4 h-20 w-20 object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{instructor.name}</h2>
                <p className="text-gray-600 mb-4">{instructor.description}</p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            ))}
          </section>
        </main>
      </div>


      <div className="bg-gray-100">
        <main className="container mx-auto mt-8">
          <section className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Lessons in Progress
            </h1>
            <p className="text-gray-600">
              Explore our language lessons in action. See how our interactive and engaging sessions make learning a breeze.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lessonImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-md shadow-md">
                <img
                  src={`path/to/lesson-images/${image}`} // Adjust the path to your image directory
                  alt={`Lesson ${index + 1}`}
                  className="w-full h-48 object-cover"
                />

              </div>
            ))}
          </section>
        </main>
      </div>

      <footer className="shadow">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-3xl font-semibold logo-font">Gango ReChishona</span>
              <p className="">832 Sandon, Haydon Park, Harare</p>
              <p className="">+263 71 471 0875</p>
              <p className="">rechishonagango@gmail.com</p>
            </div>
            <div className="space-y-4">
              <span className="text-base font-semibold">Useful Links</span>
              <ul className="space-y-2">
                {Links.map((link, index) => (
                  <li key={index} className="flex items-center no-underline hover:text-gray-300">
                    <FaChevronRight className="mr-2" />
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
                <li className="flex items-center hover:text-gray-300">
                  <FaChevronRight className="mr-2" />
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li className="flex items-center hover:text-gray-300">
                  <FaChevronRight className="mr-2" />
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <span className="text-base font-semibold">Our Services</span>
              <ul className="space-y-2">
                {Services.map((service, index) => (
                  <li key={index} className="flex items-center hover:text-gray-300">
                    <FaChevronRight className="mr-2" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <span className="text-base font-semibold">Join Our Newsletter</span>
              <p className="">Receive latest news and updates from our company!!</p>
              <div className="flex space-x-4 mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered text-sm rounded-md px-2 py-1 focus:outline-none focus:border-primary"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
