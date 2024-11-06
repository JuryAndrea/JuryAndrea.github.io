import { GradientText } from "astro-boilerplate-components";
import { Section } from "astro-boilerplate-components";

import Swal from 'sweetalert2'

const Contact = () => {

  return (

    <section id="contact">

      <Section
        title={
          <>
            <GradientText>Contact Me</GradientText>
          </>
        }
      >

        <div className="max-w-2xl mx-auto pt-0 pb-12 px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-xl font-semibold text-white-700 text-center mb-2">Have Any Questions?</h2> */}
          <p className="text-center text-blue-jury mb-4">
            <strong>Feel free to reach out!</strong>
          </p>
          <p className="text-center text-white-500 mb-4">
            Whether you're interested in <span className="text-role-yellow italic">working together</span>,
            have a <span className="text-role-yellow italic">question</span>, or just want to say <span className="text-role-yellow italic">hello</span>,
            I’d love to hear from you. Please fill out the form below, and I’ll get back to you as soon as possible.
          </p>

          {/* Form */}
          <form action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
                className="needs-validation space-y-6"
                noValidate
          >
            <input type="hidden" name="access_key" value="960990d5-f96c-4556-8812-d63bcdfc5a27" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your Name" autoComplete="name" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your Email" autoComplete="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Enter your Message" autoComplete="off" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-full shadow-sm text-white bg-blue-400 hover:bg-blue-500 transition-transform transform hover:scale-105 focus:outline-none">
                SEND
                <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>

      </Section>

    </section>

    


  );

};

export { Contact };