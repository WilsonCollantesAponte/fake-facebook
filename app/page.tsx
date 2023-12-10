export default function Home() {
  return (
    <div className="h-screen">
      <div className=" p-3 flex flex-col gap-4X justify-center text-center h-full">
        <span className=" pb-3 text-blue-600 text-xl font-extrabold">
          facebook
        </span>

        <input
          className=" mb-2 rounded-sm text-sm font-normal bg-gray-100 placeholder-gray-600"
          type="text"
          placeholder="Número de celular o correo electrónico"
          name="email"
        />

        <input
          className=" mb-3 rounded-sm text-sm font-normal bg-gray-100 placeholder-gray-600"
          type="text"
          placeholder="Contraseña"
          name="password"
        />

        <button className=" bg-blue-600 py-1.5 mb-3 font-semibold rounded-md text-white text-lg">
          Iniciar sesión
        </button>

        <span className=" text-sm font-normal text-blue-600 mb-4">
          ¿Olvidaste tu contraseaña?
        </span>

        <div className=" flex items-center gap-4 justify-center mb-3">
          <hr className=" w-full border border-gray-200" />
          <span className=" text-sm">o</span>
          <hr className=" w-full border border-gray-200" />
        </div>

        <button className="mt-0.5 mb-3 border border-gray-400 w-4/5 self-center py-2 text-sm font-medium rounded">
          Crear cuenta nueva
        </button>

        <div className="bg-yellow-400 flex-grow flex items-center text-xs">
          <div className="bg-green-600 flex-grow flex flex-col">
            <div className="flex">
              <div className=" bg-red-600 flex flex-col flex-grow">
                <span>Español</span>
                <span>Italiano</span>
                <span>Français (France)</span>
                <span>العربية</span>
              </div>

              <div className=" bg-blue-500 flex flex-col flex-grow">
                <span>English (US)</span>
                <span>Português (Brasil)</span>
                <span>Deutsch</span>
                <span className="border border-gray-500 w-fit self-center px-1.5">
                  +
                </span>
              </div>
            </div>
            <span className=" bg-indigo-600">Información · Ayuda · Más </span>
            <br />
            <span className="">Meta © 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
