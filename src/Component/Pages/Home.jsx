import About from "./Homes/About";
import Banner from "./Homes/Banner";
import SuccessSection from "./Homes/SuccessSection";
import Testimonials from "./Homes/Testimonials";
import FAQSection from "./Homes/FAQSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SuccessSection></SuccessSection>
            <Testimonials></Testimonials>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;