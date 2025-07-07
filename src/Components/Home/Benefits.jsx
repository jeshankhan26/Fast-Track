import React, { useEffect, useState } from "react";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fetch("/Json/benefits.json")
      .then((res) => res.json())
      .then((data) => setBenefits(data))
      .catch((error) => console.error("Error fetching benefits:", error));
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
