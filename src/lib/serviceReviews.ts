/**
 * Google reviews quoted on service pages, from the Business Profile (Nov 2026).
 * Quotes are trimmed with "…" but not reworded. No reviewer names, by policy.
 */
export type ServiceReview = {
  text: string;
  /** Month the review was posted, e.g. "May 2025" */
  date: string;
};

export const serviceReviews: Record<string, ServiceReview[]> = {
  'water-heater-replacement': [
    { text: 'I had issues with my water heater and ended up needing a replacement. Josiah and Tyler went over and beyond… The install only took half a day and they made sure everything was working properly before cleaning up and leaving.', date: 'May 2025' },
    { text: 'Steven Howard was very efficient and courteous had my water heater put in and made sure everything was clean and working.', date: 'February 2021' },
  ],
  'leak-detection': [
    { text: 'I had an issue where my tenants water bill would be $600 one month and $50 the next month… I called Plumb All and Josiah came out. Not only did he find one leak but he found the really bad leak. Apparently there was an abandoned pipe underneath the ground that no one knew about… Thank you so much for solving a 2 year long problem.', date: 'May 2025' },
    { text: 'We woke up to a little flood downstairs. After figuring out that the leak was coming from a hot water line running under our foundation to our half bathroom, we began looking for a professional… Ben came out, did an assessment, came up with a plan, and came back Thursday morning and had us back in business within a few hours.', date: 'August 2022' },
  ],
  'water-line-repair': [
    { text: 'Ryan came out within 25 minutes when we had an underground leak in our yard. They stayed all day and fixed it for us same day. Fantastic service and explained everything.', date: 'March 2024' },
    { text: 'The water line needed replaced from the meter to the house… Drew was prompt and keep me informed through the process. The line was replaced the next morning and water service returned to the house. Good price and a job well done.', date: 'June 2021' },
  ],
  'garbage-disposal-repair': [
    { text: 'Had a great experience with a same-day garbage disposal replacement with Tyler. He was good at communicating, friendly, and very efficient! Would definitely use plumb-all again!', date: 'December 2024' },
  ],
  'faucet-repair': [
    { text: 'Had a shower head in my mother’s bathroom that wouldn’t stop leaking even after 2 other companies were called out… Plumb-All were there within a hour, diagnosed my situation and also gave me 3 different options on fixing it, all with affordable pricing. 10/10 Highly Recommended!', date: 'December 2024' },
  ],
  'sink-repair': [
    { text: 'I opened the sink cabinet to get a dish towel and found that my pipes had been leaking all over!… Ben was arranged for the next morning at 9. He was right on time (gave a courtesy call beforehand) and had us all fixed up in no time.', date: 'December 2022' },
  ],
  'toilet-installation': [
    { text: 'Had two different toilets leaking, called Plumb-All, Dylan did the job. True professional and very informative. Would definitely recommend.', date: 'November 2025' },
  ],
  'drain-cleaning': [
    { text: 'Ben helped us in our time of need!… We had a clogged main line from the last tenents, and half of our downstairs was flooded! He was there within 30 minutes of our call.', date: 'January 2022' },
  ],
  'hydro-jetting': [
    { text: 'He fixed in one day what took another company 2 trips to figure out… He performed a Hydro wash I think it’s called and the price was great since the other company wanted to charge me the same for a lesser service. It only took an hour and now I have no problems with my kitchen sink draining properly.', date: 'August 2023' },
  ],
  'bathroom-plumbing': [
    { text: 'Tyler is very professional! He came out to replace my shower valve due to an improper bathroom shower renovation. He was very clean and fast with his work. I highly recommend plumb-All.', date: 'April 2025' },
  ],
  'commercial': [
    { text: 'Ryan and Dylan arrived promptly at our business and quickly diagnosed the issues with two of the automatic sensor-flushing public toilets… They were very knowledgeable about the system, unlike the previous plumber we called. They replaced a few inexpensive parts and had us up and running quickly!', date: 'December 2024' },
    { text: 'Work was completed Friday night after hours as not to disturb our business hours. Main shutoff valve was replaced and they pressure tested the system on the whole site within a few hours… No mess and exceptionally easy to work with.', date: 'June 2026' },
  ],
  'emergencies': [
    { text: 'I recently had an emergency leak coming from my ceiling… I explained the urgency and 30 min later Ryan was sent out to look at my leak!… In less than an hour, Ryan and Dylan had stopped my leak! Thanks to Plumb-All, I was still able to host my family for the Holidays!', date: 'December 2024' },
  ],
  'plumbing-repair': [
    { text: 'After multiple plumbers and one creating a leak, Trey came in and fixed it with no problems! You all have a forever customer!', date: 'October 2026' },
  ],
  'plumbing-installation': [
    { text: 'Ryan and Dylan did a wonderful job installing my shower fixtures and made a door for easy access to plumbing for future install!! Was very pleased with the job!!', date: 'December 2024' },
  ],
  'sewer-line-repair': [
    { text: 'They replaced most of the drain line, cutting through our slab and all the way through the yard. Despite the amount of work, they were done on the shorter end of the projected timeline, and they took care to clean and cover everything as well as they could. The work was thorough and the price was fair.', date: 'April 2026' },
    { text: 'Ryan and Justin did a wonderful job. They repaired a large hole in our main drain line caused by tree roots. They cleaned up after the work and I will definitely be using them again.', date: 'March 2023' },
  ],
  'septic-tank-pumping': [
    { text: 'We were having a septic issue, they sent an amazing young man by the name of Stephen out the next morning (on a Saturday). He was very knowledgeable, explained everything in great detail. I highly recommend this company!!', date: 'April 2024' },
    { text: 'They serviced my mom’s septic tank on Wednesday. They thoroughly explained the procedures and provided pictures. I highly recommend Plumb-All.', date: 'April 2019' },
  ],
  'septic-repair': [
    { text: 'Dylan was professional, quick, smart, and knowledgeable in his tasked in repair of my septic system… He took the time to explain not only what needs to be done. But why and how it works.', date: 'February 2024' },
    { text: 'I had my septic system serviced and repaired by Plumb All and let me tell you, these guys know what they are doing!… It was done right and in a timely manner… This was done 5 months ago, system is working flawlessly.', date: 'March 2021' },
  ],
  'septic-inspection': [
    { text: 'The county requested an outline of my property’s septic drainfield… Steve showed up the next day bright and early. After probing and marking the drainfield with flags, he drew an outline of the field lines including the distances from the house for reference. He also explained thoroughly how a septic tank system works because I recently bought the house.', date: 'February 2024' },
  ],
  'septic-system': [
    { text: 'They came out same day I called… They were very respectful and was good at explaining the old ways and new codes. They told me what my problems were and I never felt forced to pay for anything I didn’t want. They worked all day until job was done.', date: 'August 2025' },
  ],
  'alternative-septic': [
    { text: 'Contacted Plumb-All about installing Eljen septic system. Ryan came out and provided specifics and pricing on installation. They coordinated acquiring all of the required permits and tests needed.', date: 'October 2023' },
  ],
  // Septic town pages: septic reviews (reviews rarely name a town, so these aren't tied to the town)
  'septic-service/jonesboro-ga': [
    { text: 'The county requested an outline of my property’s septic drainfield… Steve showed up the next day bright and early. After probing and marking the drainfield with flags, he drew an outline of the field lines including the distances from the house for reference.', date: 'February 2024' },
    { text: 'Plumb-All did a fantastic job on my septic line to sewer line transition in a timely fashion! Very courteous and knowledgeable about his work! We are highly pleased.', date: 'January 2019' },
  ],
  'septic-service/fayetteville-ga': [
    { text: 'Dylan was professional, quick, smart, and knowledgeable in his tasked in repair of my septic system… He called to let me know what time he will arrive and if he will be late and why. He took the time to explain not only what needs to be done. But why and how it works.', date: 'February 2024' },
  ],
  'septic-service/ellenwood-ga': [
    { text: 'I had my septic system serviced and repaired by Plumb All and let me tell you, these guys know what they are doing!… It was done right and in a timely manner… This was done 5 months ago, system is working flawlessly.', date: 'March 2021' },
  ],
  'septic-service/hampton-ga': [
    { text: 'We were having a septic issue, they sent an amazing young man by the name of Stephen out the next morning (on a Saturday). He was very knowledgeable, explained everything in great detail. I highly recommend this company!!', date: 'April 2024' },
  ],
  'septic-service/stockbridge-ga': [
    { text: 'Zack was there within 15 minutes of my call and Randy took over the job and was thorough, honest, and hard working in the summer heat… While I obviously hate paying thousands of dollars for something like septic system, I know they did a great job and tried to save me money where they could.', date: 'July 2019' },
  ],
  'septic-service/mcdonough-ga': [
    { text: 'They serviced my mom’s septic tank on Wednesday. They thoroughly explained the procedures and provided pictures. I highly recommend Plumb-All.', date: 'April 2019' },
    { text: 'They came out same day I called… They told me what my problems were and I never felt forced to pay for anything I didn’t want. They worked all day until job was done.', date: 'August 2025' },
  ],
};
