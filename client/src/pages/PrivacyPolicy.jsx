import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset:800,
  once:true,
  duration:1200
});
import React from 'react'
import Dashboard from '../components/Dashboard';

const PrivacyPolicy = () => {
  return (
    <>
    <Dashboard/>
    <div className='py-20 relative px-4 max-w-6xl mx-auto' data-aos="zoom-in-left">
      <h1 className='text-4xl text-center mt-0 font-bold mb-4 text-slate-800'>Elite <span className='text-slate-600'>Estate</span></h1>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>Privacy Policy : </h2>
      <p className='mb-4 text-slate-700'>This privacy policy ("Policy") explains the policy regarding the collection, use, disclosure and transfer of your information by EliteEstate Realty Services Limited and/or its subsidiary(ies) and/or affiliate(s) (collectively referred to as the "Company"), which operates various websites, including sub-sites, platforms, applications, m-web platforms and other platforms (collectively referred to as "Sites") for delivery of information, products, offerings and content via any mobile or internet connected device or otherwise (collectively the "Services").
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>This Policy forms part and parcel of the Terms of Use and other terms on the Site ("Terms of Use"). Capitalized terms which have been used here but are undefined shall have the same meaning as attributed to them in the Terms of Use. This policy is effective from the date and time a user registers with Site and accept the terms and conditions laid out in the Site. Please read this Privacy Policy and our Terms of Use carefully before using our Services.</p>
      <p className='mb-4 text-slate-700'>EliteEstate respects the privacy of its users and is committed to protect it in all respects. With a view to offer most enriching and holistic internet experience to its users EliteEstate offers a vast repository of Online Sites and variety of community services.</p>
      <p className='mb-4 text-slate-700'>The information about the user as collected by EliteEstate is: (a) information supplied by users and (b) information automatically tracked while navigation (Information).</p>
      <p className='mb-4 text-slate-700'>By using EliteEstate website or its services, you consent to collection, storage, use, transfer, share and distribute the personal information you provide (including any changes thereto as provided by you) for any of the services that we offer.</p>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>1. Information Supplied By Users :</h2>
      <p className='mb-4 text-slate-700'>When you register on the Sites for the Service, we ask you to provide basic contact information such as your name, sex, age, address, pin code, contact number, occupation, interests and email address etc. When you register using your other accounts like Facebook, Twitter, Gmail etc. we shall retrieve Information from such account to continue to interact with you and to continue providing the Services.</p>
      <p className='mb-4 text-slate-700'>When you choose any subscription or paid service provided as part of our Services, we or our payment gateway provider may collect your purchase, address or billing information, including your credit card number and expiration date etc. However, when you order using an in-app purchase option on any of the applications of the Company, same are handled by such mobile operating system platform providers. The subscriptions or paid Services may be on auto renewal mode unless cancelled. If at any point you do not wish to auto-renew your subscription, you may cancel your subscription before the end of the subscription term.</p>
      <p className='mb-4 text-slate-700'>We may collect additional information at other times, including but not limited to, when you provide feedback, comments, change your content or email preferences, respond to a survey, or any communications with us.</p>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>2.  Information Automatically Collected/ Tracked While Navigation :</h2>

      <p className='mb-4 text-slate-700'>To improve the responsiveness of the Sites for our Users, we may use "cookies", or similar electronic tools to collect Information to assign each visitor a unique, random number as a User Identification (User ID) to understand the User's individual interests using the identified computer or device. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer or device. The only personal information a cookie can contain is information you supply. A cookie cannot read data off your hard drive or device. Our advertisers may also assign their own cookies to your browser (if you click on their ads etc.), a process that we do not control. We receive and store certain types of Information whenever you interact with us via Site or Service though your computer/laptop/netbook or mobile/tablet/pad/handheld device etc.</p>
      <p className='mb-4 text-slate-700'>If a User opts out using the Ads Settings, the unique DoubleClick cookie ID on the User's browser is overwritten with the phrase "OPT_OUT". Because there is no longer a unique cookie ID, the opt-out cookie can't be associated with a particular browser.</p>
      <p className='mb-4 text-slate-700'>We automatically collect limited information about your computer's connection to the Internet, mobile number, including your IP address, when you visit our site, application or service. Your IP address is a number that lets computers attached to the Internet know where to send you data -- such as the pages you view. We automatically receive and log information from your browser, including your IP address, your computer's name, your operating system, browser type and version, CPU speed, and connection speed. We may also collect log information from your device, including your location, IP address, your device's name, device's serial number or unique identification number (e.g. UDiD on your iOS device), your device operating system, browser type and version, CPU speed, and connection speed etc.</p>
      <p className='mb-4 text-slate-700'>We may use "clear GIFs" (Web Beacons) to track the online usage patterns of our Users in an anonymous manner, without personally identifying the User. We may also use clear GIFs in HTML-based emails sent to our Users to track which emails are opened by recipients. We use this information to inter-alia deliver our web pages to you upon request, to tailor our Sites or Service to the interests of our users, to measure traffic within our Sites to improve the quality, functionality and interactivity of our Sites and let advertisers know the geographic locations from where our Users come without personally identifying the Users.</p>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>3. Information from other sources :</h2>

      <p className='mb-4 text-slate-700'>We may receive information about you from other sources, add it to our account information and treat it in accordance with this Policy. If you provide information to the platform provider or other partner, whom we provide services, your account information and order information may be passed on to us.</p>
      <p className='mb-4 text-slate-700'>We may reference other sources of demographic and other information in order to provide you with more targeted communications and promotions. We use Google Analytics, among others, to track the user behaviour on our Sites. Google Analytics specifically has been enabled to support display advertising towards helping us gain understanding of our users' demographics and interests. The reports are anonymous and cannot be associated with any individual personally identifiable information that you may have shared with us. You can opt-out of Google Analytics for display advertising and customize Google Display Network ads using the Ads Settings options provided by Google.</p>
      <p className='mb-4 text-slate-700'>The Sites may include links to other websites or applications. Such websites or applications are governed by their respective privacy policies, which are beyond our control. Once you leave our servers (you can tell where you are by checking the URL in the location bar on your browser), use of any information you provide is governed by the privacy policy of the operator of the application, you are visiting. That privacy policy may differ from ours. If you can't find the privacy policy of any of these sites via a link from the application's homepage, you should contact the application owners directly for more information.</p>
      <p className='mb-4 text-slate-700'>When we present Information to our advertisers -- to help them understand our audience and confirm the value of advertising on our Sites -- it is usually in the form of aggregated statistics on traffic to various pages / content within our Sites. We use third-party advertising companies to serve ads when you visit our Sites. These companies may use Information (excluding your name, address, email address or telephone number or other personally identifiable information) about your visits to this and other websites or application, in order to provide advertisements about goods and services of interest to you.</p>
      <p className='mb-4 text-slate-700'>We do not provide any personally identifiable information to third party websites / advertisers / ad-servers without your consent.</p>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>4. How collected data is used? :</h2>

      <p className='mb-4 text-slate-700'>We use third-party advertising companies to serve ads when you visit or use our Sites or Services. These companies may use information (excluding your name, address, email address, telephone number, or any personally identifiable information) about your visits or use of a particular website, mobile application, or service in order to provide advertisements about goods and services of interest to you. EliteEstate also allows advertisers and creators to serve advertisements directly, using Times Network's own ad-serving technologies.</p>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>5. Information Sharing :</h2>

      <p className='mb-4 text-slate-700'>Personal information will be used to allow you to login to your account on Site or to resolve specific service issues, inform you of our new services or features and to communicate with you in relation to your use of the Site. Any other information collected will be used for- business purposes and this may include User's viewing or advertising of residential or commercial real estate, rental properties or use of associated services; analytical purposes, data usage; improving the Site, or user experience; and providing targeted advertisements to you.</p>
      <p className='mb-4 text-slate-700'>The Company proposes to share such Information to conduct its business and to share such Information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such Information agree to process such information based on our instructions and in compliance with this Policy and any other appropriate confidentiality and security measures.
The Company proposes to share such Information to conduct its business and to share such Information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such Information agree to process such information based on our instructions and in compliance with this Policy and any other appropriate confidentiality and security measures.
The Company may present Information to our advertisers and third parties - to help them understand our audience and confirm the value of advertising on our Sites - however it is usually in the form of aggregated statistics on traffic to various pages within our site.
The Company may share your Information regarding your activities on Sites with third party social websites to populate your social wall that is visible to other people however you will have an option to set your privacy settings, where you can decide what you would like to share or not to share with others.
We may share your Information to enforce or protect our rights or any or all of its affiliates, associates, employees, directors or officers or when we have reason to believe that disclosing Information of User(s) is necessary to identify, contact or bring legal action against someone who may be causing interference with our rights or our Sites, whether intentionally or otherwise, or when anyone else could be harmed by such activities.
Your E-mail address is made available to other organisations whose products or services we think you might find interesting.
Registered telephone numbers of customers coming on our site may receive telephone or text message contact from us with information regarding new products and services or upcoming events.</p>
<h2 className='text-3xl font-bold mb-4 text-slate-800'>5. Questions / Grievance Redressal :</h2>
     
     <p className='mb-2 text-slate-700'>Mr. Sandeep Dhatwalia (Grievance Officer)</p>
<a href='#' className='text-red-600 mb-4'>www.EliteEstate.com</a>
<p className='mb-2 text-slate-700'>EliteEstate Realty Services Limited</p>
     <p className='mb-2 text-slate-700'>Times Centre</p>
     <p className='mb-2 text-slate-700'>FC-6, Film City</p>
     <p className='mb-2 text-slate-700'>Sector 16-A, Noida - 201301, India</p>
     <p className='mb-2 text-slate-700'>Email:<a href='#' className='text-red-600 mb-4'>greviance@gmail.com</a></p>
     <p className='mb-4 text-slate-700'>Ph: 0120-663 7000</p>
     <p className='mb-4 text-slate-700'>This Privacy Policy is subject to changes. Please periodically review this page for the latest information on our privacy practices.</p>
     <p className='mb-6 pt-20 pb-0 align-text-bottom text-sm text-center bottom-0 text-slate-700'>All trademarks, logos and names are properties of their respective owners. All Rights Reserved.© Copyright 2024 EliteEstate Realty Services Limited. Terms of use</p>
      

    </div>
    </>
  )
}

export default PrivacyPolicy