import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductosCard from "../Componentes/ProductosCard"

const prepararFormulario = vi.fn()
const setMostrarFormulario = vi.fn()


describe("ProductosCard", () => {
    test("Debe mostrar el titulo del producto", () => {
        const productos = [
            {
                id: 0,
                title: "producto de prueba",
                price: 100,
                category: "prueba",
                description: "Descripcion de prueba",
                image: "imagen.jpg"
            }
        ];
        render(
            <ProductosCard
                productos={productos}
                prepararFormulario={prepararFormulario}
                setMostrarFormulario={setMostrarFormulario}

            />
        );
        expect(screen.getByText("producto de prueba")).toBeInTheDocument();
        expect(screen.getByText(/100/)).toBeInTheDocument();
        expect(screen.getByText("prueba")).toBeInTheDocument();
        expect(screen.getByText("Descripcion de prueba")).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "producto de prueba" })).toBeInTheDocument();
        const botonEditar = screen.getByRole("button", { name: /editar/i });
        const botonEliminar = screen.getByRole("button", { name: /eliminar/i });

        fireEvent.click(botonEliminar);
        const botonCancelar = screen.getByRole("button", { name: /cancelar/i });

        fireEvent.click(botonCancelar);
        expect(screen.queryByText(/Seguro que quieres eliminar este producto/i)).not.toBeInTheDocument()
        //el queryByText es para comprobar si existe o no existe y el getByText espero que si exista
        //ESCRIBIRLO EN EL CUADERNO

        const eliminarModal = screen.getByRole("button", { name: /eliminar/i })
        fireEvent.click(eliminarModal);



        //BOTON EDITAR
        fireEvent.click(botonEditar);



        //BOTON EDITAR
        expect(prepararFormulario).toHaveBeenCalledWith(productos[0]);
        expect(setMostrarFormulario).toHaveBeenCalledWith(true);


    })
})

test("Debe eliminar el producto al confirmar", () => {
    const productos = [{
        id: 0,
        title: "producto de prueba",
        price: 100,
        category: "prueba",
        description: "Descripcion de prueba",
        image: "imagen.jpg"
    }];
    const eliminarProducto = vi.fn();
    render(
        <ProductosCard
            productos={productos}
            prepararFormulario={prepararFormulario}
            setMostrarFormulario={setMostrarFormulario}
            eliminarProducto={eliminarProducto} />
    )
}
);



// {}
// []
// =>