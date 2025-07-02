import { StrategicData, weSarve } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';
import CardContent from '@components/CardContent';
import React from 'react';

const Sarve = () => {
    return (
        <section className='common-bg text-white'>
            <div className='w-[95%] px-10 mx-auto py-12  '>
                <div>
                    <h1 className='text-5xl text-center my-5'>  Tailored Cybersecurity for Every Organization</h1>
                    <p className='text-xl text-center my-5'> Whether you're an MSP looking to grow your security practice or an enterprise defending against advanced threats, Vijilan has a solution built for your specific needs.
                        this is sarve system </p>
                </div>



                {/* video section */}
                <div>
                    <h1 className='capitalize text-center text-5xl mb-8'>A message from our ceo</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='col-span-1 border-2 bg-[#133A55] '>
                            <iframe width="260" height="315" src="https://www.youtube.com/embed/sUf2PtEZris?si=I-RlYjaQ9oYy0pXc&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <div className='col-span-1 '>
                            <p className='text-xl font-thin mb-3'>
                                Whether you're an MSP looking to grow your security practice or an enterprise defending against advanced threats, Vijilan has a solution built for your specific needs.
                                this is sarve system
                            </p>
                            <p className='text-[#0788e4] font-semibold'>-Kevin Najed, Founder and CEO</p>
                        </div>
                    </div>
                </div>

                {/* card section */}

                <div className='grid grid-cols-1  lg:grid-cols-2 gap-10'>
                    {
                        weSarve.map((sarve, index) => <CardContent
                            index={index + 2}
                            icon={sarve.icon}
                            title={sarve.audience}
                            description={sarve.description}
                            cardFooter={sarve.action}
                        />)
                    }
                </div>


                {/* Strategic Resources for your Role */}
                <div className='mt-16'>
                    <h1 className='mt-12 text-center text-5xl'>
                        Strategic Resources for your Role
                    </h1>
                    <div className='grid grid-cols-1   lg:grid-cols-3 gap-8'>
                        {
                            StrategicData.map((data, index) => <CardContent
                                title={data.title}
                                description={data.description}
                                grdBtn={data.action}
                            />)
                        }
                    </div>
                </div>

                {/* where to start */}

                <div className=' mt-5 md:mt-16'>
                    <Blog_Subscribe_Component_Btn
                        H1='Not Sure Where to Start?'
                        Desc="Let's discuss your unique cybersecurity challenges and how Vijilan can provide the protection and peace of mind you need to focus on growing your business."
                        Btn='Get Your Free Security Consultation'
                    />
                </div>
            </div>






        </section >
    );
};

export default Sarve;