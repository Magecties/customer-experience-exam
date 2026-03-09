import { useState } from "react";
import "../css/returnpage.css";
import arrowIcon from "../img/arrow.svg";

const faqs = [
  {
    question: "How do I return my order?",
    answer:
      "If you want to return an item, simply contact us at support@wantedarchives.com within 14 days of receiving your order. Make sure the item is unused and in its original condition. Once approved, we’ll send you the return instructions.",
  },
  {
    question: "When will I receive my order?",
    answer:
      "Orders are usually processed within 1–2 business days. Delivery typically takes 2–5 business days depending on your location. Once your order ships, you'll receive a tracking link so you can follow it all the way to your door.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Once we receive and inspect your return, your refund will be processed within 3–5 business days. The amount will be returned to your original payment method.",
  },
  {
    question: "How do I return an order that I have previously exchanged?",
    answer:
      "Returns after an exchange follow the same process as normal returns. Just contact our support team and include your new order number, and we’ll guide you through the return.",
  },
  {
    question: "Can I return two orders in the same shipment?",
    answer:
      "Yes, you can return multiple orders in the same package. Just make sure to include the order numbers for each item inside the parcel so we can process the returns correctly.",
  },
  {
    question: "I have received a wrong order – what do I do?",
    answer:
      "If you received the wrong item, contact us at support@wantedarchives.com as soon as possible with your order number and a photo of the item. We’ll sort it out quickly and make sure you receive the correct piece.",
  },
  {
    question: "I have a claim — what should I do?",
    answer:
      "If your item is damaged or faulty, please contact our support team within 7 days of receiving your order. Include photos of the issue and your order number, and we’ll help you resolve it as fast as possible.",
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
                  src={arrowIcon}
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
