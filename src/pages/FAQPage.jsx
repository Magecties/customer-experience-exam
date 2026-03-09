import { useState } from "react";
import "../css/faqpage.css";

const faqs = [
  {
    question: "How much does shipping cost?",
    answer:
      "We offer free shipping on orders over 699 DKK. For orders below this amount, shipping starts from 29 DKK.",
  },
  {
    question: "When can I expect to receive my package?",
    answer:
      "You can expect to receive your package within 1–2 business days. Orders placed before 3:00 PM are shipped the same day.",
  },
  {
    question: "How do I return or exchange an item??",
    answer:
      "You can easily and free of charge return or exchange an item within 30 days of purchase.",
  },
  {
    question: "How will I get my refund?",
    answer:
      "From the time you send your return until it is received and processed, it can take up to 5–7 business days. Refunds may take 2–3 business days to appear, depending on your bank and payment method.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <div className="faq-page">
        <header>
          <h1 className="faq-header">FREQUENTLY ASKED QUESTIONS</h1>
        </header>
        <main className="faq-main">
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={index} className="faq-item">
                <h2 className="faq-question" onClick={() => toggle(index)}>
                  {item.question}
                  <img
                    src="/img/arrow.svg"
                    alt=""
                    className={`faq-arrow${openIndex === index ? " faq-arrow--open" : ""}`}
                  />
                </h2>
                {openIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
