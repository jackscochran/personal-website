import HomeBanner from './HomeBanner'
import Profile from './Profile'
import Skills from './Skills'
import Projects from './Projects'

const HomePage = () => {
    return (
        <div className="home-page">
            <HomeBanner />
            <Profile/>
            <Skills />
            <Projects />
        </div>
    )
}

export default HomePage