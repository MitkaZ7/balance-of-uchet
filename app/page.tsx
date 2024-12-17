import { Header } from '@components/Header/Header'
import { Intro } from '@components/Intro/Intro'
import { Services } from '@components/Services/Services'
import { Footer } from '@components/Footer/Footer'
import { CallMeSection } from '@components/CallMeSection/CallMeSection'
import { BenefitsSummary } from '@components/BenefitsSummary/BenefitsSummary'
import { SmallForm } from '@components/SmallForm/SmallForm'
import { AboutUs } from '@components/AboutUs/AboutUs'
import { Feedbacks } from '@components/Feedbacks/Feedbacks'
import { AskUs } from '@components/AskUs/AskUs'
export default function Home() {
  return (
    <>
      <Header/>
      <Intro/>
      <CallMeSection/>
      <Services/>
      <BenefitsSummary/>
      <SmallForm/>
      <AboutUs/>
      <Feedbacks/>
      <AskUs/>
      <Footer/>
    </>
  );
}
