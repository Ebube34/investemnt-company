import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Contact from "../Pages/contact";
import About from "../Pages/about";
import Reviews from "../Pages/reviews";
import Investment from "../Pages/investment";
import Resources from "../Pages/resourses";
import FAQs from "../Pages/FAQs";
import TermsAndCondtion from "../Pages/terms-and-conditons";
import Login from "../Pages/login";
import OurTeam from "../Pages/our-team";
import Register from "../Pages/register";
import Roadmap from "../Pages/roadmap";
import Community from "../Pages/community";
import Customers from "../Pages/customers";
import LegalDocs from "../Pages/legal-docs";
import FinancialStrength from "../Pages/financial-strength";
import Regulation from "../Pages/Regulation";
import SupportTeam from "../Pages/support-team";
import Article1 from "../Pages/articule1";
import Article2 from "../Pages/articule2";
import Article3 from "../Pages/articule3";
import Article4 from "../Pages/articule4";
import BuyingAHome from "../Pages/buying-a-home";
import BuildWealth1 from "../Pages/build-wealth1";
import BuildWealth2 from "../Pages/build-wealth2";
import BuildWealth3 from "../Pages/build-wealth3";
import BuildWealth4 from "../Pages/build-wealth4";
import News from "../Pages/news";
import Partnership from "../Pages/partnership";
import Services from "../Pages/services";
import Cryptocurrency from "../Pages/cryptocurrency";
import AccountInfo from "../Pages/account-info";
import StepToHavingAPaidPlan from "../Pages/steps-to-a-plan";
import Careers from "../Pages/careers";
import Policy from "../Pages/policy";
import Overview from "../Pages/overview";
import Address from "../Pages/Address";
import Wellcome from "./wellcome";
import Dashboard from "../Pages/dashboard";
import ForgotPassword from "../Pages/forgotpassword";



function App() {
 return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />}/>
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="investment" element={<Investment />} />
        <Route path="resourses" element={<Resources />} />
        <Route path="FAQs" element={<FAQs />}/>
        <Route path="terms-and-conditions" element={<TermsAndCondtion />} />
        <Route path="login" element={<Login />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="register" element={<Register />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="customers" element={<Customers />} />
        <Route path="community" element={<Community />} />
        <Route path="legal-docs" element={<LegalDocs />} />
        <Route path="financial-strength" element={<FinancialStrength />} />
        <Route path="regulation" element={<Regulation />} />
        <Route path="support-team" element={<SupportTeam />} />
        <Route path="Should-i-invest-now-or-wait-for-the-market-to-rise?" element={<Article1 />} />
        <Route path="Bitcoin-rally-shows-cryptocurrency-resilience-after-FTX-debacle" element={<Article2 />} />
        <Route path="Global-Tax-Reform-May-Add-$250-Billion-a-Year-to-Public-Coffers" element={<Article3 />} />
        <Route path="Could-Inflation-make-a-comeback?" element={<Article4 />} />
        <Route path="buying-a-home" element={<BuyingAHome />} />
        <Route path="How-do-i-start-investing-when-i'm-scared-to-lose-money" element={<BuildWealth1 />} />
        <Route path="What-is-Hedging" element={<BuildWealth2 />} />
        <Route path="What-is-Crypto-and-how-does-it-work" element={<BuildWealth3 />} />
        <Route path="The-Power-of-compound-interest-calculator" element={<BuildWealth4 />} />
        <Route path="cryptocurrency" element={<Cryptocurrency />} />
        <Route path="news" element={<News />} />
        <Route path="partnership" element={<Partnership />} />
        <Route path="services" element={<Services />} />
        <Route path="steps-to-having-a-paid-plan" element={<StepToHavingAPaidPlan />} />
        <Route path="careers" element={<Careers />} />
        <Route path="account-info" element={<AccountInfo />} />
        <Route path="address" element={<Address />} />
        <Route path="policy" element={<Policy />} />
        <Route path="overview" element={<Overview />} />
        <Route path="/confirm/:confirmationCode" element={<Wellcome />}/>
        <Route path="/forgot-password" element={<ForgotPassword /> } />



      </Routes>
    </BrowserRouter>
  </div>
 )
}

export default App;
