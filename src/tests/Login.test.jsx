import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Login from "../Pages/Login"
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
    test("Debe mostrar el login", () => {
        render(
             <MemoryRouter>
                <Login

                />
            </MemoryRouter>
        )

        expect(screen.getByPlaceholderText("Correo electronico")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();

        const botonInicioSesion = screen.getByRole("button", {name: /iniciar sesion/i});
        fireEvent.click(botonInicioSesion);
    })
})


// {}
// []
// =>