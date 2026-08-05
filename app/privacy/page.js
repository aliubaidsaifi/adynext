import RevealText from "@/components/ui/RevealText";

export const metadata = {
  title: "Privacy Policy",
  description: "How Adynext collects, uses and protects your information.",
};

const sections = [
  {
    title: "1. Information we collect",
    body: "We collect information you provide directly to us, such as your name, email address, company, and project details when you submit a contact form or subscribe to our newsletter. We also automatically collect certain technical information, including IP address, browser type, and pages visited, through standard analytics tools.",
  },
  {
    title: "2. How we use your information",
    body: "We use the information we collect to respond to inquiries, deliver services, improve our website, and — with your consent — send occasional updates about our work. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Cookies",
    body: "Our website uses cookies and similar technologies to understand how visitors use our site and to remember preferences. You can disable cookies through your browser settings, though some features may not function as intended.",
  },
  {
    title: "4. Data sharing",
    body: "We may share information with trusted service providers who help us operate our business, such as hosting and analytics providers, under confidentiality obligations. We disclose information when required by law.",
  },
  {
    title: "5. Data retention",
    body: "We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
  },
  {
    title: "6. Your rights",
    body: "Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us at privacy@adynext.com.",
  },
  {
    title: "7. Changes to this policy",
    body: "We may update this policy from time to time. Material changes will be reflected by an updated effective date at the top of this page.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-24 container-px mx-auto max-w-content">
      <RevealText>
        <p className="eyebrow mb-6">Legal</p>
      </RevealText>
      <RevealText delay={0.05}>
        <h1 className="font-display font-medium text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] tracking-tight mb-4">
          Privacy Policy
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
