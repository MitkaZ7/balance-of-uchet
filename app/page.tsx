import { Header } from '@components/Header/Header'
import { Intro } from '@components/Intro/Intro'
import { Services } from '@components/Services/Services'
import { Footer } from '@components/Footer/Footer'
import { CallMeSection } from '@components/CallMeSection/CallMeSection'
import { SmallForm } from '@components/SmallForm/SmallForm'
import { AboutUs } from '@components/AboutUs/AboutUs'
import { Feedbacks } from '@components/Feedbacks/Feedbacks'
import { AskUs } from '@components/AskUs/AskUs'
import { WithAnimation } from './utils/withAnimation'
export default function Home() {
  return (
    <>
      <WithAnimation animationClass="fade-in" delay={0}>
        <Header />
      </WithAnimation>
      <Intro/>
      <CallMeSection/>
      <Services/>
      {/* <SmallForm/> */}
      <AboutUs/>
      {/* <Feedbacks/> */}
      {/* <AskUs/> */}
      <Footer/>
    </>
  );
}
