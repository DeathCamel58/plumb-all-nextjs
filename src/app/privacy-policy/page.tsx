import React from 'react';
import Link from "next/link";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Privacy Policy';
  const description = 'Learn about how we use your data and keep it safe!';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/api/og?title=news&image=/images/our-team.jpg';

  const env = process.env.NODE_ENV;

  return {
    metadataBase: env === 'production' ? new URL('https://plumb-all.com') : new URL('http://127.0.0.1:3000'),
    title: finalTitle,
    description: description,
    icons: {
      icon: '/logo/icon.png'
    },
    openGraph: {
      title: finalTitle,
      description: description,
      url: `/privacy-policy`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Plumb-All Logo'
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: description,
      images: [ogImageUrl],
      site: '@PlumbAll'
    }
  };
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>

        <p className="mb-4">
          Thank you for choosing to be part of our community at Plumb-All (&#34;<strong>Company</strong>&#34;, &#34;<strong>we</strong>&#34;, &#34;<strong>us</strong>&#34;, or &#34;<strong>our</strong>&#34;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at webmaster@plumb-all.com.
        </p>

        <p className="mb-4">
          When you visit our website plumb-all.com (the &#34;<strong>Website</strong>&#34;), and more generally, use any of our services (the &#34;<strong>Services</strong>&#34;, which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
        </p>

        <p className="mb-4">
          This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as any related services, sales, marketing or events.
        </p>

        <p className="mb-6">
          <strong>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</strong>
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="table-of-contents">TABLE OF CONTENTS</h2>

        <div className="mb-6 space-y-2">
          <p>1. WHAT INFORMATION DO WE COLLECT?</p>
          <p>2. HOW DO WE USE YOUR INFORMATION?</p>
          <p>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</p>
          <p>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</p>
          <p>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
          <p>6. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
          <p>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
          <p>8. DO WE COLLECT INFORMATION FROM MINORS?</p>
          <p>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>
          <p>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
          <p>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
          <p>12. DO WE MAKE UPDATES TO THIS NOTICE?</p>
          <p>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
        </div>

        <h2 className="text-3xl font-semibold mb-6" id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>

        <h3 className="text-2xl font-semibold mb-4">Personal information you disclose to us</h3>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We collect information that you provide to us.</em>
        </p>

        <p className="mb-4">
          We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website (such as by posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.
        </p>

        <p className="mb-4">
          The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
        </p>

        <p className="mb-4">
          <strong>Personal Information Provided by You.</strong> We collect names; email addresses; usernames; passwords; contact preferences; billing addresses; debit/credit card numbers; mailing addresses; phone numbers; contact or authentication data; and other similar information.
        </p>

        <p className="mb-4">
          <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by PayPal. You may find their privacy notice link(s) here: <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full" className="text-theme-3 hover:underline">https://www.paypal.com/us/webapps/mpp/ua/privacy-full</a>.
        </p>

        <p className="mb-6">
          All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Information automatically collected</h3>

        <p className="mb-4">
          <em><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</em>
        </p>

        <p className="mb-4">
          We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about who and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
        </p>

        <p className="mb-4">
          Like many businesses, we also collect information through cookies and similar technologies.
        </p>

        <p className="mb-4">
          The information we collect includes:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic usage and performance information our servers automatically collect when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &#39;crash dumps&#39;) and hardware settings).</li>
          <li><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet or other device you use to access the Website. Depending on the device used, this device data may include information such as your IP address (or proxy server), device application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system configuration information.</li>
          <li><em>Location Data.</em> We collect information data such as information about your device&#39;s location, which can be either precise or imprecise. How much information we collect depends on the type of settings of the device you use to access the Website. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Locations settings on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6" id="infouse">2. HOW DO WE USE YOUR INFORMATION?</h2>

        <p className="mb-4">
          <em><strong>In Short:</strong> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em>
        </p>

        <p className="mb-4">
          We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
        </p>

        <p className="mb-4">
          We use the information we collect or receive:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>To facilitate account creation and logon process.</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
          <li><strong>To post testimonials.</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the consent of the testimonial. If you wish to update, or delete your testimonial, please contact us at webmaster@plumb-all.com and be sure to include your name, testimonial location, and contact information.</li>
          <li><strong>Request feedback.</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
          <li><strong>To enable user-to-user communications.</strong> We may use your information in order to enable user-to-user communications with each user&#39;s consent.</li>
          <li><strong>To manage user accounts</strong>. We may use your information for the purposes of managing our account and keeping it in working order.</li>
          <li><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website.</li>
          <li><strong>Administer prize draws and competitions.</strong> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</li>
          <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may use your information to provide you with the requested service.</li>
          <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
          <li><strong>To send you marketing and promotional communications.</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the &#34;WHAT ARE YOUR PRIVACY RIGHTS&#34; below).</li>
          <li><strong>Deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6" id="infoshare">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em>
        </p>

        <p className="mb-4">
          We may process or share your data that we hold based on the following legal basis:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
          <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
          <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
          <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
          <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
        </ul>

        <p className="mb-4">
          More specifically, we may need to process your data or share your personal information in the following situations:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Website, which will enable them to collect data on our behalf about how you interact with our Website over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
          <li><strong>Other Users.</strong> When you share personal information or otherwise interact with public areas of the Website, such personal information may be viewed by all users and may be publicly made available outside the Website in perpetuity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Website, and view your profile.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6" id="whoshare">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We only share information with the following third parties.</em>
        </p>

        <p className="mb-4">
          We only share and disclose your information with the following third parties. We have categorized each party so that you may easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us using the contact details provided in the section below titled &#34;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&#34;.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Content Optimization</strong><br />Google Site Search and YouTube video embed</li>
          <li><strong>Functionality and Infrastructure Optimization</strong><br />CloudFlare</li>
          <li><strong>Invoice and Billing</strong><br />PayPal</li>
          <li><strong>Web and Mobile Analytics</strong><br />Google Analytics</li>
          <li><strong>Website Hosting</strong><br />Namecheap</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6" id="cookies">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We may use cookies and other tracking technologies to collect and store your information.</em>
        </p>

        <p className="mb-6">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
        </p>

        <p className="mb-4">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than six (6) months past the termination of the user&#39;s account.
        </p>

        <p className="mb-6">
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="infosafe-">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We aim to protect your personal information through a system of organizational and technical security measures.</em>
        </p>

        <p className="mb-6">
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="infominors">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>We do not knowingly collect data from or market to children under 18 years of age.</em>
        </p>

        <p className="mb-6">
          We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&#39;s use of the Website. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at webmaster@plumb-all.com.
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>You may review, change, or terminate your account at any time.</em>
        </p>

        <p className="mb-4">
          If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/newsroom/article29/items/612080/en" className="text-theme-3 hover:underline">https://ec.europa.eu/newsroom/article29/items/612080/en</a>.
        </p>

        <p className="mb-6">
          If you are resident in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="text-theme-3 hover:underline">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
        </p>

        <p className="mb-4">
          If you have questions or comments about your privacy rights, you may email us at webmaster@plumb-all.com.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Account Information</h3>

        <p className="mb-4">
          If you would at any time like to review or change the information in your account or terminate your account, you can:
        </p>

        <p className="mb-4">
          ■ Log in to your account settings and update your user account.
        </p>

        <p className="mb-6">
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Cookies and similar technologies</h3>

        <p className="mb-6">
          Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit <a href="https://optout.aboutads.info" className="text-theme-3 hover:underline">https://optout.aboutads.info</a>.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Opting out of email marketing</h3>

        <p className="mb-4">
          You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Access your account settings and update your preferences.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6" id="DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>

        <p className="mb-6">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&#34;DNT&#34;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="caresidents">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em>
        </p>

        <p className="mb-4">
          California Civil Code Section 1798.83, also known as the &#34;Shine The Light&#34; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
        </p>

        <p className="mb-6">
          If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="policyupdates">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>

        <p className="mb-4">
          <strong><em>In Short:</em></strong> <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
        </p>

        <p className="mb-6">
          We may update this privacy notice from time to time. The updated version will be indicated by an updated &#34;Revised&#34; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
        </p>

        <h2 className="text-3xl font-semibold mb-6" id="contact">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>

        <p className="mb-4">
          If you have questions or comments about this notice, you may email us at webmaster@plumb-all.com or by post to:
        </p>

        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
          <p>
            Plumb-All<br />
            218 N McDonough St<br />
            Jonesboro, GA 30236<br />
            United States
          </p>
        </blockquote>

        <h3 className="text-2xl font-semibold mb-4">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>

        <p className="mb-6">
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <Link href="/contact" className="text-theme-3 hover:underline">here</Link>. We will respond to your request within 30 days.
        </p>
      </div>
    </div>
  );
}
