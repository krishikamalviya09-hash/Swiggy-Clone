import React from "react";

const Help = () => {
  const helpTopics = [
    {
      id: 1,
      title: "📦 Order Related",
      details: [
        "How do I place an order?",
        "Can I cancel or modify my order?",
        "What if my food is delivered late or incorrect?",
      ],
    },
    {
      id: 2,
      title: "💳 Payments",
      details: [
        "What payment methods are accepted?",
        "How do I apply promo codes?",
        "Refunds & failed transactions.",
      ],
    },
    {
      id: 3,
      title: "👤 Account & Profile",
      details: [
        "How do I create or delete my account?",
        "Updating mobile number and email address.",
        "Managing saved addresses.",
      ],
    },
    {
      id: 4,
      title: "📞 Need More Help?",
      details: [
        "Email: support@foodapp.com",
        "Phone: +91 98765 43210",
        "Live Chat: Available in the bottom-right corner.",
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-orange-600">Help & Support</h1>
      <p className="text-gray-700 mb-8">
        Welcome to the Help Center 👋. Find quick answers to common questions
        below or reach out for further support.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {helpTopics.map((topic) => (
          <div
            key={topic.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white p-6 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold mb-4">{topic.title}</h2>
            <ul className="space-y-2 text-gray-600 text-sm">
              {topic.details.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-2 hover:text-orange-600 transition-colors"
                >
                  <span className="text-orange-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
