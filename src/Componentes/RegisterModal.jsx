import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Register() {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [date, setDate] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 

  const navigate = useNavigate();



  return (

    <div className="ml-110 shadow-lg p-2 h-170 w-130 mt-10">
      <div className="flex flex-col gap-3 items-center mt-10">
        <h1 className="text-2xl font-bold">Registrate aqui!</h1>
        <input className="rounded-lg bg-blue-50 h-10 w-100 mt-6"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input className="rounded-lg bg-blue-50 h-10 w-100"
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <input className="rounded-lg bg-blue-50 h-10 w-100"
          type="date"
          placeholder="Fecha nacimiento"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input className="rounded-lg bg-blue-50 h-10 w-100"
          type="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className="rounded-lg bg-blue-50 h-10 w-100"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="rounded-lg bg-blue-50 h-10 w-100"
          type="password"
          placeholder="Confirme contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <button className="rounded-lg bg-slate-600 h-10 w-100 cursor-pointer">Registrarme</button>
        <button className="rounded-lg bg-amber-950 h-10 w-70 cursor-pointer" onClick={() => navigate("/login")}>Inisio sesion</button>


        <button
          type="button"
          className="w-85 h-14 flex items-center justify-center gap-3 border border-gray-300 bg-white rounded-lg p-3 hover:bg-gray-50"
        >
          <img
            src="src/img/google.jpeg"
            alt="Google"
            className="w-8 h-8"
          />

          <span>Registrarse con Google</span>
        </button>

       

      </div>

    </div>




  )

}

export default Register;


// {}
// []
// =>