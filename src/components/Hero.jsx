import heroimage from "../assets//profilepic.png";

const Hero = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[auto] mx-auto py-8"
    >
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-shadow">
          Üdvözöllek az oldalamon!
        </h1>

        <p className="text-white sm:text-xl my-6 lg:text-2xl text-shadow bg-red-300 bg-opacity-50 p-5 rounded-3xl">
          Reni vagyok, és immár 5 éve foglalkozom műkörömépítéssel és erősített
          géllakk technikával. Ez idő alatt rengeteg tapasztalatot szereztem, és
          szenvedélyemmé vált a körmök világa.
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-shadow">
          Miért válassz engem?
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-white sm:text-xl my-6 lg:text-2xl text-shadow bg-green-300 bg-opacity-50 p-5 rounded-3xl">
            <span className="underline">Minőségi alapanyagok:</span> Kizárólag a
            legjobb minőségű termékekkel dolgozom, hogy a végeredmény tartós és
            gyönyörű legyen.
          </li>
          <li className="text-white sm:text-xl my-6 lg:text-2xl text-shadow bg-red-300 bg-opacity-50 p-5 rounded-3xl">
            <span className="underline">Személyre szabott szolgáltatások:</span>{" "}
            Minden vendégem számára egyedi, személyre szabott megoldásokat
            kínálok, figyelembe véve az egyéni igényeket és stílust.
          </li>
          <li className="text-white sm:text-xl my-6 lg:text-2xl text-shadow bg-green-300 bg-opacity-50 p-5 rounded-3xl">
            <span className="underline">Kreativitás és egyediség:</span> Munkáim
            során nagy hangsúlyt fektetek az egyedi, kreatív megoldásokra,
            legyen szó egyszerűbb vagy extrémebb díszítésekről.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
