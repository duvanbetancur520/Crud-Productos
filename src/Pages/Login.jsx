import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    return (


        <div className="flex min-h-screen ">

          <div className="w-170 bg-cyan-900 text-white">
              <section className="mt-60  justify-items-center">
                <h1 className="text-2xl font-bold">Hola,  Bienvenido 👋</h1>
                <p className="flex mt-6">¿No tienes una cuenta?</p>
                <p>Registrate para tener descuentos</p>
                 <button className="flex justify-center mt-5 cursor-pointer border rounded-lg w-36 h-10" onClick={() => navigate("/register")}>Registrarme</button>
            </section>
          </div>


            <section className="shadow-lg p-2 gap-5 float-right h-199 w-190" >
                <h1 className="font-bold text-2xl ml-20 mt-50">Inicio Sesion</h1>
                <p className="mt-3 ml-20">Ingresa tus credenciales para acceder al panel</p>

                <p className="mt-8 ml-20">Correo electronico</p>
                <input className="rounded-lg bg-cyan-50 w-90 h-9 mt-2 ml-20" type="text"
                    placeholder="Correo electronico"
                    value={user}
                    onChange={(e) => {setUser(e.target.value)}}
                    
                />

                <p className="mt-3 ml-20">Contraseña</p>
                <input className="rounded-lg bg-cyan-50 w-90 h-9 mt-2 ml-20" type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 <label className="flex ml-20 mt-3 " htmlFor="">
                    <input  type="checkbox" />
                    Recordarme
                </label>
               

                <button className="bg-slate-600 w-90 rounded-lg h-9 ml-20 mt-5 cursor-pointer"
                onClick={() => navigate("/productos") }
                >Iniciar sesion</button>

            </section>

        </div>

    )

}

export default Login;

// {}
// []
// =>