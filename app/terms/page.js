import RevealText from "@/components/ui/RevealText";

export const metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Adynext website and services.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By accessing or using the Adynext website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.",
  },
  {
    title: "2. Services",
    body: "Adynext provides digital agency services including website development, design, SEO, marketing, AI automation and related consulting. Specific service engagements are governed by a separate signed agreement between Adynext and the client.",
  },
  {
    title: "3. Intellectual property",
    body: "All content on this website, including text, graphics, logos and code, is the property of Adynext or its licensors and is protected by applicable intellectual property laws. Client deliverables are governed by the terms of the relevant service agreement.",
  },
  {
    title: "4. Use of website",
    body: "You agree not to misuse this website, including attempting to gain unauthorized access to our systems, interfering with normal operation, or using the site for unlawful purposes.",
  },
  {
    title: "5. Limitation of liability",
    body: "Adynext is not liable for any indirect, incidental or consequential damages arising from your use of this website, to the fullest extent permitted by law.",
  },
  {
    title: "6. Third-party links",
    body: "This website may contain links to third-party websites. We are not responsible for the content or practices of those sites.",
  },
  {
    title: "7. Governing law",
    body: "These terms are governed by the laws of the State of New York, without regard to conflict of law principles.",
  },
  {
    title: "8. Contact",
    body: "Questions about these terms can be directed to legal@adynext.com.",
  },
];

export default function TermsPage() {
  return (
    <section className="pt-40 pb-24 container-px mx-auto max-w-content">
      <RevealText>
        <p className="eyebrow mb-6">Legal</p>
      </RevealText>
      <RevealText delay={0.05}>
        <h1 className="font-display font-medium text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] tracking-tight mb-4">
          Terms of Service
        </h1>
      </RevealText>
      <p className="text-muted text-sm mb-16">Effective date: January 1, 2026</p>

      <div className="max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl mb-3">{s.title}</h2>
            <p className="text-muted leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
