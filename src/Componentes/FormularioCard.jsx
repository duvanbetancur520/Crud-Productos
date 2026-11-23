function FormularioCard({
    crearProducto,
    setCrearProducto,
    errores,
    modoEdicion,
    updateProducts,

}) 


{

    return (
        <div className="w-full mx-auto bg-white p-2 rounded-xl">
            <input
                className="w-full border rounded-lg p-2 mb-1"
                type="text"
                placeholder="Título"
                value={crearProducto.title || ""}
                onChange={(e) =>
                    setCrearProducto({
                        ...crearProducto,
                        title: e.target.value
                    })
                }
            />
            {errores.title && <p className="text-red-500 text-xs mb-3">{errores.title}</p>}

            <input
                className="w-full border rounded-lg p-2 mb-1"
                type="number"
                placeholder="Precio"
                value={crearProducto.price || ""}
                onChange={(e) =>
                    setCrearProducto({
                        ...crearProducto,
                        price: e.target.value
                    })
                }
            />
            {errores.price && <p className="text-red-500 text-xs mb-3">{errores.price}</p>}

            <input
                className="w-full border rounded-lg p-2 mb-1"
                type="text"
                placeholder="Categoría"
                value={crearProducto.category || ""}
                onChange={(e) =>
                    setCrearProducto({
                        ...crearProducto,
                        category: e.target.value
                    })
                }
            />
            {errores.category && <p className="text-red-500 text-xs mb-3">{errores.category}</p>}

            <input
                className="w-full rounded-lg border p-2 mb-1"
                type="text"
                placeholder="Descripción"
                value={crearProducto.description || ""}
                onChange={(e) =>
                    setCrearProducto({
                        ...crearProducto,
                        description: e.target.value
                    })
                }
            />
            {errores.description && <p className="text-red-500 text-xs mb-3">{errores.description}</p>}

            <input
                className="w-full rounded-lg border p-2 mb-1"
                type="text"
                placeholder="URL de la imagen"
                value={crearProducto.image || ""}
                onChange={(e) =>
                    setCrearProducto({
                        ...crearProducto,
                        image: e.target.value
                    })
                }
            />
            {errores.image && <p className="text-red-500 text-xs mb-3">{errores.image}</p>}

            {crearProducto.image && (
                <img
                    className="w-full h-32 object-contain mb-4"
                    src={crearProducto.image}
                    alt="Vista previa"
                />
            )}

            <button
                type="button"
                className="p-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 w-full cursor-pointer mb-2"
                onClick={updateProducts}
            >
                {modoEdicion ? "Guardar Cambios" : "Crear Producto"}
            </button>
        </div>
    );
}

export default FormularioCard;




// {}
// []
// =>