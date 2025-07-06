import React from "react";

const CardContent = ({ icon, banner, Cardsticket,iconColor, linkBtn, Number, ColorHeading, side_text, Index, badge, title, description, buttonText, designDescription, cardFooter, head, sub, grdBtn, iconed }) => {

  console.log(side_text)
  return (
    <div className={`relative rounded-[24px] p-[2px] ${Index % 2 !== 0 ? "m-2 md:mt-10 md:ml-5" : "m-2 md:mb-10 md:ml-5"}`} >
      {/* Gradient border using pseudo */}
      <div
        className="absolute inset-0 rounded-[24px] p-[2px] z-0"
        style={
          !banner
            ? {
              background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
            linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude"
            }
            : undefined
        }

      />


      <div className={`relative rounded-[24px] ${banner ? "bg-transparent" : "card-content text-center p-6"}`} >

        {icon && <div className="icon-container flex justify-center mb-4">
          <img src={icon} alt="Cybersecurity Illustration" className="icon w-[100px] h-[100px]" />
        </div>}
        {iconColor && <div className="icon-container flex justify-center mb-4">
          <img src={iconColor} alt="Cybersecurity Illustration" className="icon bg-cyan-400 rounded-xl p-2 w-[100px] h-[100px]" />
        </div>}


        {banner && (
          <div className="relative flex justify-center mb-4">
            <img src={banner} alt="banner" className="w-full rounded-[16px]" />
            {badge && (
              <span className="absolute top-2 left-2 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
        )}



        {iconed && <div className={`iconed flex ${side_text ? "justify-start" : "justify-center"}  mb-4`}>
          <img src={iconed} alt="Icon" className="iconed w-[77px] text-white h-[77px]" />
        </div>}
        {
          Cardsticket && <div className='bg-[#D9D9D9] w-auto md:w-[250px] p-6 h-auto md:h-[190px] mx-auto rounded-2xl my-5 flex justify-center items-center'>
            <h4 className='text-center text-black  text-2xl'>{Cardsticket}</h4>
          </div>
        }

        {head && <h3 className={`head text-[25px] text-white font-medium mb-2 ${side_text ? "text-left" : "text-center"} `}>{head}</h3>}
        {
          side_text && <>
            <h1 className="text-left text-[#00aeef]">{ColorHeading} </h1>
            <h3 className="text-left text-[37px] font-bold mb-2">{Number}</h3>
            <p className="text-left text-green-500">{linkBtn}</p>
          </>

        }

        <h3 className="title text-3xl md:text-4xl font-medium mb-2">{title}</h3>


        {
          description && (
            <p
              className={`mb-4 ${banner ? "text-sm" : "description"} ${side_text ? "text-left" : "text-center"}`}
            >
              {description}
            </p>
          )
        }

        {
          sub && (
            <p className="text-sm md:text-[18px] text-white mb-4" style={{ whiteSpace: 'pre-line' }}>{sub}</p>
          )
        }
        {
          cardFooter && (
            <p className="cardFooter text-[18px] text-[#00AEEF]">{cardFooter}</p>
          )
        }
        {
          grdBtn && <button className="w-auto grdBtn mt-16 text-white  px-[24px] py-[16px] rounded-[8px] flex justify-center items-center mx-auto" style={{
            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
          }}>{grdBtn}</button>
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
          <button className={`${banner ? "text-blue-600" : "cta-button px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"}`}>
            {buttonText}
          </button>
        )}
      </div>
    </div >
  );
};

export default CardContent;


// import React from "react";

// const CardContent = ({ icon, title, description, buttonText, designDescription, cardFooter, head, sub, grdBtn, iconed }) => {
//   return (
//     <div className="relative rounded-[24px]" >
//       {/* Gradient border using pseudo */}
//       <div
//         className="absolute inset-0 rounded-[24px] p-[2px] z-0"
//         style={{
//           background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
//                  linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
//           WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude"
//         }}
//       />


//       <div className="card-content text-center p-6">
//         {icon && <div className="icon-container flex justify-center mb-4">
//           <img src={icon} alt="Cybersecurity Illustration" className="icon w-[100px] h-[100px" />
//         </div>}
//         {iconed && <div className="iconed flex justify-center mb-4">
//           <img src={iconed} alt="Icon" className="iconed w-[77px] h-[77px]" />
//         </div>}
//         {head && <h3 className="head text-[25px] text-white font-medium mb-2">{head}</h3>}
//         <h3 className="title text-[37px] font-medium mb-2">{title}</h3>
//         {
//           description && (
//             <p className="description text-[27px] mb-4">{description}</p>
//           )
//         }
//         {
//           sub && (
//             <p className="sub text-[18px] text-white mb-4" style={{ whiteSpace: 'pre-line' }}>{sub}</p>
//           )
//         }
//         {
//           cardFooter && (
//             <p className="cardFooter text-[24px] text-[#00AEEF]">{cardFooter}</p>
//           )
//         }
//         {
//           grdBtn && <button className="w-auto grdBtn mt-16 px-[24px] py-[16px] rounded-[8px] flex justify-center items-center mx-auto" style={{
//             background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
//           }}>{grdBtn}</button>
//         }
//         {
//           designDescription && (
//             <div className="text-gray-200 text-left space-y-3">
//               <div className="flex items-center space-x-3">
//                 <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Client-Centric Mission</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Enduring Trust</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Channel-First Partnership</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span>Relentless Innovation</span>
//               </div>
//             </div>
//           )
//         }
//         {buttonText && (
//           <button className="cta-button mt-3 text-[18px] p-[20px] text-[#082235] rounded-[8px]  transition">
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardContent;
