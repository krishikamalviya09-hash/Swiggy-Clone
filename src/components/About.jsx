import React from "react";

const About = () => {
  const teamMembers = [
    { name: "Krishika Malviya", role: "Founder & CEO" },
    { name: "Mayank Sangolkar ", role: "Head of Operations" },
    { name: "Mansi Vishwakarma ", role: "Lead Developer" },
  ];

  return (
    <div>
      <section className="bg-orange-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to FoodieExpress – delivering happiness, one meal at a time.  
          We connect you with your favorite restaurants, bringing fresh and delicious food right to your doorstep.
        </p>
      </section>

      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Our mission is to make food delivery simple, fast, and reliable.  
          From local favorites to global cuisines, we aim to serve everyone with a smile.
        </p>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-400 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6 text-gray-700">We’d love to hear from you! Reach out anytime.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p>support@foodieexpress.com</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p>+91 9179689329</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;