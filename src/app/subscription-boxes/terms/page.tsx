//going to provide ChatGPT with the page content and get it to create the code for the page, then refine it for deployment

import Link from "next/link";
import { Cinzel } from "next/font/google";

// Load Cinzel font for this page
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SubscriptionTermsPage() {
  return (
    // Main page wrapper
    <main className="min-h-screen bg-[#ede1cf] px-4 py-10 text-black sm:px-6 sm:py-14">
      {/* Main centred content container */}
      <div
        className={`mx-auto flex max-w-[900px] flex-col text-left ${cinzel.className}`}
      >
        {/* Page heading */}
        <div className="text-center">
          <p className="text-[0.9rem] uppercase tracking-[0.28em] sm:text-[1rem]">
            Brightwell Mystery Box
          </p>

          <h1 className="mt-4 text-[2rem] leading-tight sm:text-[3rem]">
            Terms & Conditions
          </h1>
        </div>

        {/* Intro */}
        <section className="mt-12 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">1. Overview</h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            By purchasing a Brightwell Mystery Box subscription, you agree to
            the following terms and conditions.
          </p>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            The Brightwell Mystery Box is a subscription-based product
            delivered monthly, containing story content, printed materials, and
            themed items.
          </p>
        </section>

        {/* Subscription and payments */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">
            2. Subscription & Payments
          </h2>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">
              2.1 Subscription Options
            </h3>
            <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
              Customers may purchase:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
              <li>A monthly subscription (£10 per month), or</li>
              <li>A 6-month term subscription (£54 upfront)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">2.2 Billing</h3>
            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
              <li>
                Monthly subscriptions are billed every calendar month from the
                date of purchase.
              </li>
              <li>
                6-month subscriptions are billed in full at the time of
                purchase.
              </li>
            </ul>
          </div>
        </section>

        {/* Delivery */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">3. Delivery</h2>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">
              3.1 Shipping Schedule
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
              <li>Boxes are dispatched once per calendar month.</li>
              <li>
                Orders placed before the monthly cut-off date will be included
                in that month’s dispatch.
              </li>
              <li>
                Orders placed after the cut-off may roll over to the following
                month.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">
              3.2 Delivery Method
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
              <li>Boxes are sent via standard UK postal services.</li>
              <li>
                Delivery times may vary depending on location and postal service
                performance.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">
              3.3 Address Responsibility
            </h3>
            <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
              Customers are responsible for providing accurate delivery details.
            </p>
            <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
              We cannot be held responsible for delays or losses due to
              incorrect addresses.
            </p>
          </div>
        </section>

        {/* Cancellations */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">4. Cancellations</h2>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">
              4.1 Monthly Subscription
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
              <li>You may cancel your subscription at any time.</li>
              <li>
                Cancellation must be made before the next billing date to avoid
                being charged for the following month.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[1.05rem] sm:text-[1.2rem]">
              4.2 6-Month Subscription
            </h3>
            <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
              6-month subscriptions are sold as a complete term and are
              non-refundable once the first box has been dispatched.
            </p>
          </div>
        </section>

        {/* Returns and refunds */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">
            5. Returns & Refunds
          </h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Due to the nature of the product (printed materials and themed
            content), we do not accept returns unless:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
            <li>The item arrives damaged</li>
            <li>The item is faulty or incorrect</li>
          </ul>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            In such cases, please contact us within 7 days of delivery.
          </p>
        </section>

        {/* Lost or missing deliveries */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">
            6. Lost or Missing Deliveries
          </h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            If your box does not arrive:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
            <li>
              Please contact us within 14 days of the expected delivery date
            </li>
            <li>
              We will investigate and, where appropriate, arrange a replacement
            </li>
          </ul>
        </section>

        {/* Product content */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">
            7. Product Content
          </h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Each Brightwell Mystery Box contains curated items which may
            include:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
            <li>Printed story content</li>
            <li>Puzzle materials</li>
            <li>Themed paper artefacts</li>
          </ul>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Contents may vary each month and are part of an ongoing narrative
            experience.
          </p>
        </section>

        {/* Age suitability */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">
            8. Age Suitability
          </h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            The Brightwell Mystery Box is designed for children aged 8+.
          </p>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Parental guidance is recommended for younger readers.
          </p>
        </section>

        {/* Changes to service */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">
            9. Changes to the Service
          </h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            We reserve the right to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 sm:text-[1.05rem]">
            <li>Make minor changes to box contents</li>
            <li>Adjust dispatch schedules if necessary</li>
            <li>Update pricing with notice</li>
          </ul>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Any significant changes will be communicated in advance.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 space-y-4">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">10. Contact</h2>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            For any queries, please contact:
          </p>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Email:{" "}
            <a
              href="mailto:subscriptions@bigthinkingpublishing.com"
              className="underline underline-offset-4 hover:opacity-70"
            >
              subscriptions@bigthinkingpublishing.com
            </a>
          </p>
          <p className="text-[0.98rem] leading-7 sm:text-[1.05rem]">
            Website:{" "}
            <a
              href="https://www.bigthinkingpublishing.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              www.bigthinkingpublishing.com
            </a>
          </p>
        </section>

        {/* Final note */}
        <section className="mt-10 space-y-4 border-t border-black/20 pt-8">
          <h2 className="text-[1.35rem] sm:text-[1.7rem]">Final Note</h2>
          <p className="text-[0.98rem] leading-7 italic sm:text-[1.05rem]">
            Some deliveries from Brightwell may contain unusual or unexpected
            materials. This is entirely intentional.
          </p>
        </section>

        {/* Back link */}
        <div className="mt-14 text-center">
          <Link
            href="/subscription-boxes"
            className="inline-block border border-black/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black/80 transition hover:bg-black hover:text-[#ede1cf] sm:text-xs"
          >
            Back to Subscription Boxes
          </Link>
        </div>
      </div>
    </main>
  );
}