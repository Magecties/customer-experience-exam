import { useState } from "react";
import "../css/returnpage.css";

const faqs = [
  {
    question: "How do I return my order?",
    answer: "Skriv dit svar her.",
  },
  {
    question: "When will I receive my order?",
    answer: "Skriv dit svar her.",
  },
  {
    question: "When will I receive my refund?",
    answer: "Skriv dit svar her.",
  },
  {
    question: "How do I return an order that I have previously exchanged?",
    answer: "Skriv dit svar her.",
  },
  {
    question: "Can I return two orders in the same shipment?",
    answer: "Skriv dit svar her.",
  },
  {
    question: "I have received a wrong order – what do I do?",
    answer: "Skriv dit svar her.",
  },
  {
    question: "I have a claim — what should I do?",
    answer: "Skriv dit svar her.",
  },
];

export default function ReturnPage() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <body className="return-page">
      <header>
        <h1 className="return-header">Return &amp; Exchanges</h1>
      </header>
      <main className="return-main">
        <section className="return-section">
          <h2 className="return-section-title">Exchanges</h2>
          <p>
            We offer free exchanges. You can choose to exchange for a different
            size or for any other product. For exchanges, the return period is
            30 days.
          </p>
          <p>
            You can register your exchange through our return portal: Create
            exchange
          </p>
          <p>We cover the cost of one exchange per order.</p>
        </section>

        <section className="return-section">
          <h2 className="return-section-title">Store Credit</h2>
          <p>
            We offer free return shipping when choosing a refund in the form of
            a store credit. This option is available in the return portal, where
            you can select &ldquo;gift card.&rdquo;
          </p>
          <p>
            When opting for a refund as store credit, the return period is 30
            days. Choose return with issuance of store credit.
          </p>
        </section>

        <section className="return-section">
          <h2 className="return-section-title">Returns</h2>
          <p>
            All orders are subject to our standard 14-day return policy. The
            return period begins on the day you receive your order.
          </p>
          <p>We only accept returns if the following conditions are met:</p>
          <ul className="return-list">
            <li>The returned items appear as new</li>
            <li>The 14-day return period has not expired</li>
            <li>The returned items are properly packaged</li>
            <li>
              The items have not been exposed to perfume, makeup, or smoke
            </li>
            <li>Hangtags and labels have not been removed or damaged</li>
          </ul>
          <p>
            A return must be registered through our return portal before the
            14-day period has expired.
          </p>
        </section>
      </main>
      <section className="return-faq">
        <h2 className="return-faq-header">Frequently Asked Questions</h2>
        <div className="return-faq-list">
          {faqs.map((item, index) => (
            <div key={index} className="return-item">
              <h3 className="return-question" onClick={() => toggle(index)}>
                {item.question}
                <img
                  src="/img/arrow.svg"
                  alt=""
                  className={`return-arrow${openIndex === index ? " return-arrow--open" : ""}`}
                />
              </h3>
              {openIndex === index && (
                <p className="return-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </body>
  );
}
