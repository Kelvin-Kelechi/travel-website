import Header from "./components/Header";
import FindExperience from "./components/FindExperience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <FindExperience />
      <Testimonials />
      <Footer />
    </div>
  );
}
