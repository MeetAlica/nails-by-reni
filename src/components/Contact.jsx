import Logo from "../assets/facebook.png";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-shadow">
          Írj nekem
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-red-300 bg-opacity-50 rounded-3xl">
          <div className="p-10">
            <form action="https://formspree.io/f/mzzpbopb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="A Te neved"
                      className="bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email címed"
                      className="bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Üzenet"
                      className="bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold bg-green-300 hover:bg-green-500 transition duration-500 rounded-md text-shadow"
                  >
                    Küldés
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex h-20 justify-center items-center m-5">
        <a href="https://www.facebook.com/renata.varju.1103" target="_blank">
          <img src={Logo} className="size-20 m-5" />
        </a>
        <p className="text-xl m-5 text-shadow">Keress Facebookon!</p>
      </div>
    </div>
  );
};

export default Contact;
