import { useState } from "react";

function ProductosCard({ 
  productos,
  eliminarProducto,
  prepararFormulario,
  setMostrarFormulario,
}) {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [productoEliminado, setProductoEliminado] = useState(null);

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-8 shadow-xl/30"> 

      {productos.map((producto) => (
 
        <div 
          className="rounded-lg shadow p-4 justify-items-center mt-12 bg-white" 
          key={producto.id ? String(producto.id) : producto.title} 
        >
          <p className="text-gray-400 text-xs">ID: {producto.id} </p>
          <p className="font-bold text-center mt-2">{producto.title} </p>
          <p className="text-emerald-600 font-semibold">${producto.price}</p>
          <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded mt-1">{producto.category} </p>
          <p className="text-xs text-gray-600 text-center my-4 line-clamp-3">{producto.description} </p>

          <img className="w-full h-48 object-contain mt-2" src={producto.image} alt={producto.title} />

          <div className="flex gap-4 w-full mt-5">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white w-full h-10 rounded-lg cursor-pointer"
              onClick={() => {
                prepararFormulario(producto);           
                setMostrarFormulario(true);
              }}
            >
              Editar
            </button>

            <button 
              className="bg-red-400 hover:bg-red-500 text-white w-full h-10 rounded-lg cursor-pointer"
              onClick={() => {
                setMostrarModal(true);
                setProductoEliminado(producto);
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

     
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40">
          <div className="flex flex-col max-w-sm w-full mx-auto bg-white rounded-xl shadow-2xl p-6 text-center">
            <p className="text-lg font-medium text-gray-800 mb-6">
              ¿Seguro que quieres eliminar este producto?
            </p>

            <div className="flex justify-center gap-4">
              <button 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-28 rounded-lg h-10 cursor-pointer"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
              
              <button 
                className="bg-red-500 hover:bg-red-600 text-white w-28 h-10 rounded-lg cursor-pointer" 
                onClick={() => {
                  setMostrarModal(false);
                  eliminarProducto(productoEliminado.id);
                }} 
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductosCard;



// {}
// []
// =>