import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ku52b07",
        "template_1e9g1h7",
        formRef.current,
        "n1UreLX0aHgvm1sSe"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a043a] via-[#0b021a] to-[#12052b]" />

      <div className="relative  mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-20">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400">
              Drop me a message
            </h3>

            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              I’m currently seeking frontend developer opportunities. Feel free to connect or reach out.
            </p>

            <div className="mt-10 space-y-5 text-gray-300">


              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black">
                  <FaEnvelope />
                </span>
                <span>alisba221712@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black">
                  <FaMapMarkerAlt />
                </span>
                <span>Noida, Uttar Pardesh</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-gray-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-gray-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-gray-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-fit px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
