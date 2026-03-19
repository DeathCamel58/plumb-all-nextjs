import React from 'react';
import Link from "next/link";
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'what-to-know-about-repiping-your-home';
export const metadata = {
  slug: slug,
  title: 'What to Know About Repiping Your Home',
  date: '2020-09-23',
  excerpt: 'Repiping your home is a major investment, but it can solve persistent plumbing problems and protect your property. Here\'s everything you need to know about the process.',
  image: '/images/gray-pipes.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">What to Know About Repiping Your Home</h2>

      <p className="mb-6">
        If your home is plagued by persistent plumbing problems like low water pressure, discolored water,
        frequent leaks, or strange tastes and odors in your water, the underlying cause may be deteriorating
        pipes that need to be replaced. Repiping involves removing all or most of the existing water supply
        pipes in your home and replacing them with new ones. While it&#39;s a significant undertaking, repiping
        can resolve chronic plumbing issues, improve water quality, increase your home&#39;s value, and give
        you peace of mind for decades to come.
      </p>

      <p className="mb-6">
        In this article, we&#39;ll cover the signs that your home may need repiping, the materials available,
        what the process involves, and the factors that affect cost.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Signs Your Home May Need Repiping</h3>

      <p className="mb-6">
        Not every plumbing problem means you need a whole-home repipe. However, if you&#39;re experiencing
        multiple issues from the list below, especially in an older home, repiping may be the most
        cost-effective long-term solution:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Frequent leaks:</strong> If you&#39;re calling a plumber to fix leaks every few months, patching individual sections is no longer economical. Frequent leaks indicate system-wide deterioration.</li>
        <li><strong>Discolored or rusty water:</strong> Brown, yellow, or red-tinted water coming from multiple faucets suggests that your pipes are corroding from the inside and contaminating your water supply.</li>
        <li><strong>Low water pressure throughout the house:</strong> Corroded pipes develop mineral buildup and scale that narrows the interior diameter, restricting water flow to all fixtures.</li>
        <li><strong>Visible corrosion:</strong> If you can see green staining (on copper pipes), flaking, or dimpling on exposed pipes in your basement, crawl space, or utility areas, the pipes you can&#39;t see are likely in similar condition.</li>
        <li><strong>Polybutylene (gray) pipes:</strong> Homes built between 1978 and 1995 may contain polybutylene pipes, which are known to be prone to sudden failure. If your home has these pipes, repiping is strongly recommended even if you haven&#39;t experienced problems yet.</li>
        <li><strong>Lead pipes or lead solder:</strong> Homes built before 1986 may have lead pipes or lead solder in the joints. Lead is a serious health hazard, and repiping is the only way to eliminate the risk.</li>
        <li><strong>Galvanized steel pipes:</strong> Common in homes built before 1960, galvanized pipes corrode from the inside out, eventually leading to restricted flow, leaks, and rusty water. Most galvanized pipes are well past their expected lifespan.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Piping Material Options</h3>

      <p className="mb-6">
        When repiping your home, you&#39;ll need to choose a piping material. The two most common options
        for residential water supply lines are copper and PEX:
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Copper</h4>
      <p className="mb-6">
        Copper has been the gold standard in residential plumbing for decades. It&#39;s durable, long-lasting
        (50 to 70+ years), resistant to bacteria, and doesn&#39;t leach chemicals into the water. Copper
        pipes can handle high temperatures and pressures, making them suitable for both hot and cold water
        lines. The main downsides are higher material and labor costs, since copper requires soldering at
        every joint.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">PEX (Cross-Linked Polyethylene)</h4>
      <p className="mb-6">
        PEX is a flexible plastic tubing that has become increasingly popular for residential repiping. It&#39;s
        significantly less expensive than copper, faster to install because it requires fewer fittings and no
        soldering, and resistant to freezing because it can expand slightly without bursting. PEX is also
        quieter than copper, reducing water hammer noise. It comes in color-coded varieties (red for hot, blue
        for cold) for easy identification. PEX typically lasts 40 to 50 years.
      </p>

      <p className="mb-6">
        Both materials are excellent choices, and the best option for your home depends on your budget, local
        building codes, and personal preferences. Your plumber can help you weigh the pros and cons of each
        during a consultation. For a deeper comparison of these materials, our&nbsp;<Link href="/services/plumbing-installation" className="text-theme-3 hover:underline">plumbing installation</Link>&nbsp;team
        can walk you through the differences.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">The Repiping Process</h3>

      <p className="mb-6">
        Understanding what to expect during a repipe helps you prepare and minimizes disruption to your daily
        routine. Here&#39;s a general overview of the process:
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">1. Inspection and Planning</h4>
      <p className="mb-6">
        A licensed plumber will inspect your home&#39;s current plumbing system, assess the condition of the
        existing pipes, and map out the new pipe routing. They&#39;ll identify the best path for the new pipes,
        taking into account your home&#39;s structure and any access limitations. You&#39;ll receive a detailed
        estimate that includes materials, labor, and any necessary permits.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">2. Preparation</h4>
      <p className="mb-6">
        Before work begins, you&#39;ll need to clear items away from walls where plumbers will be working. The
        plumber will protect your flooring, furniture, and belongings with drop cloths. In most cases, the
        water will need to be shut off during working hours, so plan accordingly.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">3. Pipe Replacement</h4>
      <p className="mb-6">
        The plumbing team will cut small access holes in walls and ceilings as needed to reach the old pipes.
        They&#39;ll remove the old pipes section by section and install the new ones, connecting them to each
        fixture, appliance, and the main water supply. For PEX installations, the process is generally faster
        because the flexible tubing can be routed through walls with fewer holes.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">4. Testing and Inspection</h4>
      <p className="mb-6">
        Once the new pipes are installed, the system is pressurized and tested for leaks. Every connection and
        joint is checked. In most jurisdictions, a building inspector will need to approve the work before the
        walls can be closed up.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">5. Wall Repair and Cleanup</h4>
      <p className="mb-6">
        After the inspection passes, the access holes in walls and ceilings are patched. Some plumbing companies
        include drywall patching in their repipe service, while others leave this for a separate contractor.
        Make sure to clarify what&#39;s included in your estimate before work begins.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Factors That Affect the Cost of Repiping</h3>

      <p className="mb-6">
        The cost of repiping a home varies widely depending on several factors:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Home size:</strong> Larger homes require more piping material and more labor hours</li>
        <li><strong>Number of fixtures:</strong> More bathrooms, kitchens, and water-using appliances mean more connections</li>
        <li><strong>Pipe material:</strong> Copper costs more than PEX in both material and labor</li>
        <li><strong>Accessibility:</strong> Pipes that are easy to reach (in a basement or crawl space) cost less to replace than pipes buried in concrete slabs or behind finished walls</li>
        <li><strong>Number of stories:</strong> Multi-story homes are more complex and time-consuming to repipe</li>
        <li><strong>Local permit requirements:</strong> Permit fees and inspection requirements vary by municipality</li>
        <li><strong>Wall repair:</strong> Whether drywall patching and painting are included in the plumbing estimate</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Is It Worth It?</h3>

      <p className="mb-6">
        Repiping is a significant investment, but it&#39;s one that pays for itself in multiple ways. You&#39;ll
        eliminate the ongoing cost of frequent&nbsp;<Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repairs</Link>,
        enjoy better water pressure and quality, reduce the risk of catastrophic water damage from a burst
        pipe, and increase your home&#39;s resale value. Most importantly, you&#39;ll have peace of mind
        knowing your plumbing system is reliable and safe.
      </p>

      <p className="mb-6">
        If you&#39;re on the fence, consider this: the cost of a single major pipe burst, including water
        damage restoration, mold remediation, and emergency plumbing repair, can easily approach or exceed
        the cost of a full repipe. Proactive replacement on your schedule is always better than a reactive
        emergency.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> If you&#39;re planning a major renovation or addition, that&#39;s the
          ideal time to repipe. The walls are already open, which dramatically reduces labor costs and
          eliminates the need for separate drywall repairs. Combining a repipe with a renovation can save
          you 20 to 40 percent compared to doing it as a standalone project.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Wondering if your home needs repiping? We offer free consultations!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
