"use client";
import { useState } from "react";

// interface data {
//   email: string;
//   password: string;
// }

export default function Home() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleData(event) {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  }

  return (
    <div className="h-screen">
      <div className=" p-3 flex flex-col text-center h-full">
        <span className=" pb-3 text-blue-600 text-xl font-extrabold">
          facebook
        </span>

        <div className=" flex flex-col w-7/12X w-full sm:w-96 self-center">
          <input
            className=" mb-2 rounded-sm text-sm font-normal bg-gray-100 placeholder-gray-600"
            type="text"
            placeholder="Número de celular o correo electrónico"
            name="email"
            value={data.email}
            onChange={handleData}
          />

          <input
            className=" mb-2 rounded-sm text-sm font-normal bg-gray-100 placeholder-gray-600"
            type="text"
            placeholder="Contraseña"
            name="password"
            value={data.password}
            onChange={handleData}
          />

          <button className=" bg-blue-600 py-1.5 mb-3 font-semibold rounded-md text-white text-lg">
            Iniciar sesión
          </button>

          <span className=" text-sm font-normal text-blue-600 mb-4">
            ¿Olvidaste tu contraseña?
          </span>

          <div className=" flex items-center gap-4 justify-center mb-3">
            <hr className=" w-full border border-gray-200" />
            <span className=" text-sm">o</span>
            <hr className=" w-full border border-gray-200" />
          </div>

          <button className="mt-0.5 mb-3 border border-gray-400/80 w-4/5 self-center py-2 text-sm font-medium rounded">
            Crear cuenta nueva
          </button>
        </div>

        <div className="bgX-yellow-400 flex-grow flex items-center text-xs text-gray-800">
          <div className="bgX-green-600 w-full flex flex-col">
            <div className="flex pb-6">
              <div className=" bgX-red-600 flex flex-col flex-grow">
                <span>Español</span>
                <span>Italiano</span>
                <span>Français (France)</span>
                <span>العربية</span>
              </div>

              <div className=" bgX-blue-500 flex flex-col flex-grow">
                <span>English (US)</span>
                <span>Português (Brasil)</span>
                <span>Deutsch</span>
                <span className="border border-gray-600 w-fit self-center px-1.5">
                  +
                </span>
              </div>
            </div>
            <span className=" bgX-indigo-600 pb-3">
              Información · Ayuda · Más
            </span>
            {/* <br /> */}
            <span className=" bgX-emerald-300">Meta © 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
