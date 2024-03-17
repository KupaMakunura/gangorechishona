// Header.js
import Link from "next/link";

const AppHeader = () => {
  return (
    <section className="hero py-8 flex flex-col justify-center items-center px-4">
      <h1 className="md:text-4xl max-md:text-2xl font-semibold text-gray-800 mb-4 text-center">
        For all your language needs
      </h1>
      <p className="text-gray-600 text-base text-center">
        Explore interactive lessons, personalized learning, and track your
        progress.
      </p>
      <p className="text-gray-600 text-base text-center">
        Enhance your skills with interpretation and translation features.
      </p>
      <div className="mt-6 flex justify-center">
        <Link href="/sign-up" className="btn btn-primary text-white">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default AppHeader;
