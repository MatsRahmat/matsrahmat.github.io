import ButtonCustom from "../components/ButtonCustom";

function Contact() {
  return (
    <>
      <div className="bg-gradient-radial-at-b to-gray-950 from-zinc-800 min-h-screen flex items-center justify-center flex-col">
        <div className="my-20">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-sky-300">Contact</span> Me!
          </h1>
        </div>
        <div className="w-1/2 bg-gray-900 border border-white rounded-md shadow-lg">
          <form
            className="p-10 flex flex-col gap-5"
            action="mailto:rahmath123756@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="flex gap-5">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="px-3 py-1 rounded text-white text-2xl flex-1 bg-gray-600 placeholder:font-semibold"
              required="true"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="false"
              className="px-3 py-1 rounded text-white text-2xl flex-1 bg-gray-600 placeholder:font-semibold"
              required="true"
            />
            </div>
            <div className="flex gap-5">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="px-3 py-1 rounded text-white text-2xl flex-1 bg-gray-600 placeholder:font-semibold"
              required="true"
            />
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="px-3 py-1 rounded text-white text-2xl flex-1 bg-gray-600 placeholder:font-semibold"
              required="true"
            />
            </div>
            <textarea
              className="rounded-md px-3 py-2 text-2xl focus:text-black bg-gray-600 placeholder:font-semibold"
              name="message"
              id="emailMessage"
              cols="30"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <div className="my-5 flex gap-4">
              <button>
                <ButtonCustom text={"Send Email"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
