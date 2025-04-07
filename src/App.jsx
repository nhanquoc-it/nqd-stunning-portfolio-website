import AboutMeMain from "./components/AboutMe/AboutMeMain";
import HeroGradient from "./components/Hero/HeroGradient";
import HeroMain from "./components/Hero/HeroMain";
import HeroSlogan from "./components/Hero/HeroSlogan";
import NavbarMain from "./components/Navbar/NavbarMain";
import SkillsMain from "./components/Skills/SkillsMain";
import HelperSection from "./components/HelperSection";
import SubSkills from "./components/Skills/SubSkills";
import ExperienceMain from "./components/Experience/ExperienceMain";
import ProjectMain from "./components/Projects/ProjectMain";
import ContactMeMain from "./components/Contact/ContactMeMain";

function App() {
	return (
		<main className="font-body overflow-hidden">
			<NavbarMain />
			<HeroMain />
			<HeroGradient />
			<HeroSlogan />
			<AboutMeMain />
			<SkillsMain />
			<SubSkills />
			<ExperienceMain />
			<ProjectMain />
			<ContactMeMain />
			<HelperSection />
		</main>
	);
}

export default App;
