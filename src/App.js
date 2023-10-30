import AppBar from "./components/NavigationBar/Navigation.jsx"
import Introduction from "./components/IntroSection/intro.jsx"
import IntroOurselves from "./components/IntroduceOurselves/mainsection.jsx"
import ChooseSection from "./components/ChooseUs/chooseus.jsx";
import AreaOfPractices from "./components/Practice/practice.jsx"
import ClientCarousel from "./components/ClientCarousel/carousel.jsx"
import OurTeam from "./components/OurTeam/ourteam.jsx"
import FAQ from "./components/FAQ/faq.jsx"
import Subscribe from "./components/Subscribe/subscribe.jsx"
import AppFooter from "./components/LowerFooterAndAppBar/lowerfooterandappbar.jsx"
import LowerFooter from "./components/LowerFooter/lowerfooter.jsx"
import MyFooter from "./components/MyFooter/myfooter.jsx"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Introduction />
      <IntroOurselves />
      <ChooseSection />
      <AreaOfPractices />
      <ClientCarousel />
      <OurTeam />
      <FAQ />
      <Subscribe />
      <AppFooter />
      <LowerFooter />
      <MyFooter />
    </div>
  );
}

export default App;
