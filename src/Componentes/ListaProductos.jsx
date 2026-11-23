import { useEffect, useState } from "react";
import ProductosCard from "./ProductosCard";
import FormularioCard from "./FormularioCard";



function ListaProductos({ mostrarFormulario, setMostrarFormulario, cerrarFormulario, abrirFormulario }) {

    const [productos, setProductos] = useState([]);
    const [buscador, setBuscador] = useState("")
    const [errores, setErrores] = useState({});
    const [crearProducto, setCrearProducto] = useState({
        id: null,
        price: "",
        title: "",
        category: "",
        description: "",
        image: ""
    })
    const [modoEdicion, setModoEdicion] = useState(false)
    const [cargando, setCargando] = useState(true)

   
 

    // SE TRAE LA API
    useEffect(() => {
        const mostrarProductos = async () => {
            try {
                console.log("⏳ Fetch iniciado:", Date.now());
                const dataProducts = await fetch(`https://fakestoreapi.com/products`)
                const data = await dataProducts.json();
                console.log("✅ Fetch resuelto:", Date.now());
                setProductos(data);
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        mostrarProductos();
    }, []);



    // BUSCAR PRODUCTO
    const buscarProducto = productos.filter((producto) => (
        producto.title.toLowerCase().includes(
            buscador.toLowerCase()
        )
    ))


    // VALIDAR LOS PRODUCTOS
    const validarFormulario = () => {
        const nuevosErrores = {}
        console.log(crearProducto)
        if (crearProducto.title.trim() === "") {
            nuevosErrores.title = "El title es obligatorio"
        }
        if (crearProducto.price.trim() === "") {
            nuevosErrores.price = "El precio es obligatorio"
        }
        if (crearProducto.category.trim() === "") {
            nuevosErrores.category = "La categoria es obligatoria"
        }
        if (crearProducto.description.trim() === "") {
            nuevosErrores.description = "La descripción es obligatoria"
        }
        if (crearProducto.image.trim() === "") {
            nuevosErrores.image = "La imagen es obligatoria"
        }


        setErrores(nuevosErrores)
        return Object.keys(nuevosErrores).length === 0
    }

    const CrearProducto1 = () => {
        const valido = validarFormulario();
        if (valido === true) {
            const nuevoProducto = {
                ...crearProducto,
                id: crypto.randomUUID()
            }
            setProductos([
                ...productos,
                nuevoProducto
            ]);
        }

        setCrearProducto({
            id: null,
            price: "",
            title: "",
            category: "",
            description: "",
            image: ""
        })
    }

    const prepararFormulario = (producto) => {
        console.log("PRODUCTO PREPARADO - FORMULARIO", producto)
        console.log("FORMULARIO - CREADO", producto)
        setCrearProducto(producto)
        setModoEdicion(true)
    }

    // EDITAR PRODUCTOS

    const editarProducto = async (producto) => {
        // 1. Actualizamos de inmediato en el estado local de React
        setProductos((productosActuales) => {
            console.log("IDs actuales:", productosActuales.map(p => p.id));
            return productosActuales.map((productoActual) =>
                String(productoActual.id) === String(producto.id)
                    ? producto
                    : productoActual
            );
        });

        // 2. Limpiamos el formulario y cerramos modal
        console.log("Editando producto con id", producto.id, typeof producto.id)
        setCrearProducto({
            id: null,
            title: "",
            price: "",
            category: "",
            description: "",
            image: "",
        });
        setModoEdicion(false);
        cerrarFormulario();

        // 3. (Opcional) Intentamos hacer la petición a la API simulada
        try {
            await fetch(`https://fakestoreapi.com/products/${producto.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto),
            });
        } catch (error) {
            console.log("Nota: FakeStoreAPI simula la respuesta en consola.", error);
        }
    };

    // ELIMINAR PRODUCTOS
    const eliminarProducto = async (id) => {
        try {
            const respuesta = await fetch(
                `https://fakestoreapi.com/products/${id}`,
                {
                    method: "DELETE"
                }
            )

            setProductos((productoActuales) => {
                return productoActuales.filter((producto) => producto.id !== id)
            });

            if (!respuesta.ok) {
                throw new Error("El producto no se encontro")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateProducts = () => {
        if (modoEdicion) {
            editarProducto(crearProducto)
        } else {
            CrearProducto1();

        }
    }

    


    return (


        <div>
            <div className="ml-135 mt-5">
                <input className="mr-5 rounded-lg border w-55 h-10" type="text" placeholder="Buscar Producto"
                    value={buscador}
                    onChange={(e) => setBuscador(e.target.value)}
                />
                 <button className="cursor-pointer bg-w rounded-lg bg-emerald-600 w-32 h-10" onClick={abrirFormulario} >Crear Producto</button>

            </div>




            {mostrarFormulario && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                        <FormularioCard
                            crearProducto={crearProducto}
                            setCrearProducto={setCrearProducto}
                            errores={errores}
                            eliminarProducto={eliminarProducto}
                            modoEdicion={modoEdicion}
                            setModoEdicion={setModoEdicion}
                            editarProducto={editarProducto}
                            cerrarFormulario={cerrarFormulario}
                            productos={productos}
                            CrearProducto1={CrearProducto1}
                            updateProducts={updateProducts}
                      
                        />

                        <button
                            className="gap-4 p-2 bg-amber-400 rounded-lg  hover:bg-amber-300 w-full cursor-pointer"
                            onClick={cerrarFormulario}
                        >Cancelar</button>

                    </div>

                </div>

            )}

            {cargando ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-12 h-12 border-4 border-cyan-900 border-t-transparent rounded-full animate-spin"></div>
                   <p>Cargando...</p>
                </div>
            ) : (
                <ProductosCard
                productos={buscarProducto}
                eliminarProducto={eliminarProducto}
                prepararFormulario={prepararFormulario}
                setMostrarFormulario={setMostrarFormulario}
              
            />

            )}

        </div>


    )

}

export default ListaProductos;


// {}
// []
// =>