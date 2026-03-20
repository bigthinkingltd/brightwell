import Image from 'next/image';

export default function AboutBrightwell() {
  return (
    <section className="px-10 pt-20 pb-12 text-[#4d4033] md:px-16 md:pt-24 md:pb-16">
      <h2 className="mb-10 text-4xl font-bold text-[#2f2418] md:text-5xl">
        About Brightwell
      </h2>

      <div className="mb-12 grid items-start gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-2xl font-semibold text-[#2f2418]">
            About Brightwell Academy
          </h3>
          <p className="italic">(Excerpt from the Official School Handbook, 7th Edition)</p>

          <p className="mt-4">Welcome to Brightwell Academy.</p>
          <p>We are pleased that you have found your way here.</p>

          <p className="mt-4">
            If you are reading this, it is assumed that one of the following has occurred:
          </p>

          <ul className="mt-2 ml-6 list-disc">
            <li>You have received formal notice of your place</li>
            <li>You have been directed here by a current student or artefact</li>
            <li>You have arrived unintentionally, but with sufficient curiosity to continue</li>
          </ul>

          <p className="mt-4">In all cases, you are welcome.</p>
        </div>

        <div>
          <Image
            src="/brightwell.png"
            alt="Brightwell Academy"
            width={800}
            height={500}
            className="h-64 w-full rounded object-cover"
            priority
          />
        </div>
      </div>

      <div className="space-y-8 text-[16px] leading-8">
        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">A Brief History</h3>
          <p className="mt-2">
            Brightwell (and Darkwell) Academy was founded to allow Humans and the Fae to study, learn and grow in the times after the Accord.
          </p>
          <p className="mt-2">
            You can find more information in the ‘History’ section of the website, or in the book “The Founders: The Gathering”.
          </p>

          <ul className="mt-2 ml-6 list-disc">
            <li>Curiosity without limit</li>
            <li>Inquiry without conclusion</li>
            <li>Courage in the face of the unknown</li>
            <li>Conviction to follow what is right</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">Campus Overview</h3>
          <ul className="mt-2 ml-6 list-disc">
            <li>Brightwell Hall (central learning space, the library and administrative offices)</li>
            <li>The Gallery (portraits, archives, and occasionally moving subjects)</li>
            <li>House Territories (assigned upon arrival)</li>
            <li>The Museum (access permitted with guidance)</li>
          </ul>

          <p className="mt-4 italic">
            Some areas of the Academy may not remain in a fixed location. Students are advised to proceed with awareness and avoid assuming familiarity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">The House System</h3>

          <p className="mt-2">
            All students are placed within one of four Houses upon arrival:
          </p>

          <ul className="mt-2 space-y-1">
            <li><strong>House of Wonder</strong> – Exploration, imagination, possibility.</li>
            <li><strong>House of Wisdom</strong> – Logic, investigation, deeper enquiry.</li>
            <li><strong>House of the Wild</strong> – Instinct, nature, unseen connections.</li>
            <li><strong>House of Watch</strong> – Protection, action, principled decisions.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">Curriculum</h3>

          <ul className="mt-2 ml-6 list-disc">
            <li>Exploratory mapping and navigation</li>
            <li>Artefact interaction and interpretation</li>
            <li>Applied problem-solving (open outcome)</li>
            <li>Interdisciplinary fieldwork</li>
          </ul>

          <p className="mt-4 italic">
            Assessment is ongoing and rarely announced in advance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">Artefact Allocation</h3>

          <p className="mt-2">
            Each student may be selected by a magical creature during their time at the Academy.
          </p>

          <ul className="mt-2 ml-6 list-disc">
            <li>Magical creatures must not be trapped or coerced</li>
            <li>Report any interaction to your House mentor</li>
            <li>If a creature refuses to respond, do not take it personally</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">Conduct and Expectations</h3>

          <ul className="mt-2 ml-6 list-disc">
            <li>Act with integrity</li>
            <li>Respect the Academy and its inhabitants</li>
            <li>Report significant anomalies</li>
          </ul>

          <p className="mt-4">
            Students are not expected to understand everything immediately, succeed first time, or remain unchanged.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2f2418]">Final Advisory</h3>

          <ul className="mt-2 ml-6 list-disc">
            <li>Minor temporal inconsistencies</li>
            <li>Shifts in perception</li>
            <li>Unresolved questions</li>
          </ul>

          <p className="mt-4">
            If you experience any of the above, consult your House mentor.
          </p>

          <p className="mt-6 font-semibold">
            We look forward to your time at Brightwell.
          </p>
        </div>
      </div>
    </section>
  );
}