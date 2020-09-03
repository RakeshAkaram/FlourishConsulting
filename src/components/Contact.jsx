import React from 'react';
import FooterComp from './FooterComp';

function Contact(props) {
    return (
        <React.Fragment>
        
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
        <hr/>
        <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe className="absolute inset-0 contact"  title="map" marginheight="0" marginwidth="0" scrolling="no"
             src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Nagaram+Vijaya+Hospital&ie=UTF8&t=&z=14&iwloc=B&output=embed" width="100%" height="100%" frameborder="0"></iframe>
  
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="bg-white relative flex flex-wrap py-6">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
                <p className="leading-relaxed">1-1-30/45/7, Renuka Nagar, Kapra, Hyderabad.Telangana-500062</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
                <a className="text-teal-500 leading-relaxed">travelblocks@gmail.com</a>
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
                <p className="leading-relaxed">+91 8328314450</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <FooterComp/>
        </React.Fragment>
    );
}

export default Contact;