import Header from "./components/Header/Header";
import FindExperience from "./components/FindExperience/FindExperience";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import FooterLower from "./components/FooterLower/FooterLower";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <FindExperience />
      <Testimonials />
      <Footer />
      <FooterLower />
    </div>
  );
}
