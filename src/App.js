import tw from "twin.macro";
import Home from "./components/pages/home";
import ProjectsSection from "./components/pages/projects";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import './App.scss'


const  AppContainer = tw.div`
    flex
    flex-col
    w-full
    h-full
`;
function App() {
  return (
    <AppContainer>
      <Home />
      <ProjectsSection />
      <About />
      <Contact />
    </AppContainer>
  );
}

export default App;
