import { Helmet } from "react-helmet";
import {
  Contact,
  Footer,
  Gallery,
  Header,
  Hero,
  Services,
  Testimonials,
  WhyChooseUs,
  ReturnToTop,
} from "./components";
import { CONTACT_INFO, BUSINESS_INFO } from "@/lib/contactInfo";

function App(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>
          {BUSINESS_INFO.company.name} - {BUSINESS_INFO.company.tagline} | Reliable Home
          Repairs
        </title>
        <meta
          name="description"
          content={`Expert handyman services from ${BUSINESS_INFO.company.name}. Professional home repairs, maintenance, and improvements. Licensed, insured, and trusted by local homeowners. Get your free estimate today!`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CONTACT_INFO.website.canonical} />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main className="pt-20 md:pt-24">
          <Hero />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ReturnToTop />
      </div>
    </>
  );
}

export default App;
