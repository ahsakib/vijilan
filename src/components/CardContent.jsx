import React from "react";

const CardContent = ({ icon, title, description, buttonText, designDescription, cardFooter, index, grdBtn }) => {
  return (
    <div className={index ? `cyber-card ${index % 2 !== 0 ? " sm:mt-8  lg:-mt-8" : "mt-8"}` : '`cyber-card  mt-8'}>

      <div className="card-content text-center p-6">
        {
          icon && <div className="icon-container flex justify-center mb-4">
            <img src={icon} alt="Cybersecurity Illustration" className="icon w-14 h-14" />
          </div>
        }
        <h3 className="title text-xl font-semibold mb-2">{title}</h3>
        {
          description && (
            <p className="description text-gray-300 mb-4">{description}</p>
          )
        }
        {
          cardFooter && (
            <p className=" text-[#0788e4]  mb-4">{cardFooter}</p>
          )
        }
        {
          designDescription && (
            <div className="text-gray-200 text-left space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Client-Centric Mission</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Enduring Trust</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Channel-First Partnership</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Relentless Innovation</span>
              </div>
            </div>
          )
        }
        {buttonText && (
          <button className="cta-button px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
            {buttonText}
          </button>
        )}

        {
          grdBtn && <div className=" inline px-7 py-4 mx-auto rounded-md font-semibold   text-sm  mb-5"
            style={{
              background: 'linear-gradient(to right, #F89B29, #FF0F7B)',
            }}
          >
            {grdBtn}
          </div>
        }
      </div>
    </div>
  );
};

export default CardContent;
