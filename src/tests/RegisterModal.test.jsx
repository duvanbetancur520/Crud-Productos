import { describe, expect, test } from "vitest";
import RegisterModal from "../Componentes/RegisterModal";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("RegisterModal", () => {
    test("Debe mostrar el modal", () => {
      


        render(
            <MemoryRouter>
                <RegisterModal

                />
            </MemoryRouter>
        )
        expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Apellido")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Fecha nacimiento")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Correo electronico")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Confirme contraseña")).toBeInTheDocument();

        const inputNombre = screen.getByPlaceholderText("Nombre")
        fireEvent.change(inputNombre, {
            target: {
                value: "Carlos"
            }
        })
        const inputApellido = screen.getByPlaceholderText("Apellido")
        fireEvent.change(inputApellido, {
            target: {
                value: "Betancur"
            }
        })
        const inputFechaNacimiento = screen.getByPlaceholderText("Fecha nacimiento")
        fireEvent.change(inputFechaNacimiento, {
            target: {
                value: "22/08/2000"
            }
        })
        const inputCorreoElectronico = screen.getByPlaceholderText("Correo electronico");
        fireEvent.change(inputCorreoElectronico, {
            target: {
                value: "betancur12@gmail.com"
            }
        })
        const inputContraseña = screen.getByPlaceholderText("Contraseña");
        fireEvent.change(inputContraseña, {
            target: {
                value: "1234567"
            }
        })
         const inputConfimeContraseña = screen.getByPlaceholderText("Confirme contraseña");
        fireEvent.change(inputConfimeContraseña, {
            target: {
                value: "1234567"
            }
        })

        const botonRegistrarme = screen.getByRole("button", {name: /Registrarme/i})
        fireEvent.click(botonRegistrarme);

        const botonRegisterGoogle = screen.getByRole("button", {name: /Registrarse con google/i});
        fireEvent.click(botonRegisterGoogle);

    })

})







//  {}
//  []
//  =>