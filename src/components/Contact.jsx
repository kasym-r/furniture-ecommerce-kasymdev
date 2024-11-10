import React from 'react'

const Contact = () => {
    return (
          <section className="text-gray-600 body-font relative md:px-8 ">
          <h1 className="text-gray-900 text-2xl font-extrabold text-center mt-8">FEEL FREE TO CONTACT US</h1>

            <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" className="contactMap absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.4190179071975!2d74.60737407693176!3d42.84288480446038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb622c6122a75%3A0xa04e9fa1397bac61!2z0YPQuy4g0JDRhdGD0L3QsdCw0LXQstCw!5e0!3m2!1sru!2skg!4v1731251132934!5m2!1sru!2skg"></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Akhunbaev Street, Bishkek, Kyrgyzstan</p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-500 leading-relaxed">sofashopbishkek@gmail.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">+996999999999</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600">You can drop your comments, feedback, or any questions at anytime !</p>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Button</button>
              </div>
            </div>
          </section>
    )
}
export default Contact