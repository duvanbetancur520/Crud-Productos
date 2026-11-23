import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import FormularioCard from "../Componentes/FormularioCard";

describe("FormularioCard", () => {

    const setCrearProducto = vi.fn();
    const modoEdicion = vi.fn();
    const updateProducts = vi.fn();


    const crearProducto = {
        title: "",
        price: "",
        category: "",
        description: "",
        image: ""
    }

    test("Debe mostrar los inputs", () => {

        render(
            <FormularioCard
                crearProducto={crearProducto}
                errores={{}}
                setCrearProducto={setCrearProducto}
                modoEdicion={modoEdicion}
                updateProducts={updateProducts}
            />

        )

        expect(screen.getByPlaceholderText("Título")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Precio")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Categoría")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Descripción")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("URL de la imagen")).toBeInTheDocument();

        const inputTitulo = screen.getByPlaceholderText("Título");
        fireEvent.change(inputTitulo, {
            target: {
                value: "Laptop"
            }
        });

        expect(setCrearProducto).toHaveBeenCalledWith({ ...crearProducto, title: "Laptop" });

        const inputPrecio = screen.getByPlaceholderText("Precio");
        fireEvent.change(inputPrecio, {
            target: {
                value: "1200"
            }
        })
        expect(setCrearProducto).toHaveBeenCalledWith({ ...crearProducto, price: "1200" });

        const inputCategoria = screen.getByPlaceholderText("Categoría");

        fireEvent.change(inputCategoria, {
            target: {
                value: "Tecnología"
            }
        });

        expect(setCrearProducto).toHaveBeenCalledWith({
            ...crearProducto,
            category: "Tecnología"
        });

        const inputDescription = screen.getByPlaceholderText("Descripción");
        fireEvent.change(inputDescription, {
            target: {
                value: "Descripcion del producto"
            }
        });

        expect(setCrearProducto).toHaveBeenCalledWith({
            ...crearProducto,
            description: "Descripcion del producto"
        })

           const inputImage = screen.getByPlaceholderText("URL de la imagen");
          fireEvent.change(inputImage, {
            target: {
                value: "Imagen funciona"
            }
          });

          const botonGuardar = screen.getByRole("button", {name: /guardar cambios/i,});
          fireEvent.click(botonGuardar);

    });

  
 




})


// {}
// []
// =>