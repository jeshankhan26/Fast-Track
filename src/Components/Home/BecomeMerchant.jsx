import React from "react";

const BecomeMerchant = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url('https://i.ibb.co/pjNC8X9P/Blog-or-Website-Content.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="hero-content text-center h-[480px] text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Become a Merchant
          </h1>
          <p className="mb-8 text-lg">
            Join Profast to grow your business and deliver products across Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-primary btn-wide">
              Become a Merchant
            </button>
            <button className="btn btn-secondary btn-wide">
              Earn with Profast Courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMerchant;
