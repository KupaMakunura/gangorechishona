import AppFeatures from "./components/AppFeatures";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppLessons from "./components/AppLessons";
import AppNavbar from "./components/AppNavBar";
import AppServices from "./components/AppServices";
import AppTeam from "./components/AppTeam";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <AppHeader />
      <div className="max-md:px-5">
        <AppFeatures />
      </div>

      <main id="services" className="container mx-auto mt-8 max-md:px-5 ">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Services
          </h1>
        </section>
        <AppServices />
      </main>

      <div>
        <main className="container mx-auto mt-8">
          <section className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Meet our team
            </h1>
            <p className="text-gray-600 text-base">
              Our experienced instructors are here to guide you on your language
              learning journey.
            </p>
          </section>
          <div className="md:flex justify-center w-full md:space-x-5 max-md:flex-row max-md:space-y-3 max-md:px-5">
            <AppTeam />
          </div>
        </main>
      </div>

      <div className="flex-1 max-md:px-5">
        <AppLessons />
      </div>

      <AppFooter />
    </>
  );
}
