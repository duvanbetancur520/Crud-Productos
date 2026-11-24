# 📦 Gestor de Inventario y Productos (CRUD)

Aplicación web desarrollada con **React** y **Tailwind CSS** para la administración de productos con sistema de autenticación de usuarios. Permite registrar cuentas, iniciar sesión y gestionar un catálogo completo de artículos (crear, leer, actualizar y eliminar), respaldado por **pruebas unitarias** para garantizar el correcto funcionamiento de la lógica y los componentes.

🔗 **[Ver Demo en Vivo]([Pega aquí el enlace de Vercel o Netlify])**

---

## 📸 Capturas de Pantalla

| Vista de Login / Registro | Panel de Gestión de Productos |
| :---: | :---: |
| ![Login](./assets/login/Register.jpeg) | ![Dashboard](./assets/productos.jpeg) |

---

## ✨ Funcionalidades Principales

* **Autenticación de Usuarios:** Vistas de registro (`Register`) e inicio de sesión (`Login`) con validación de credenciales y control de acceso.
* **Crear Productos (`Create`):** Formulario controlado para agregar nuevos artículos al inventario.
* **Visualizar Inventario (`Read`):** Renderizado dinámico de productos con diseño responsivo para móviles y escritorio.
* **Editar Productos (`Update`):** Modo de edición que precarga la información del artículo seleccionado y actualiza su estado en tiempo real.
* **Eliminar Productos (`Delete`):** Eliminación directa de productos del listado con actualización inmediata de la interfaz.
* **Calidad de Código (Testing):** Suite de pruebas unitarias para validar flujos críticos de renderizado, formularios y operaciones CRUD.

---

## 🛠️ Tecnologías Utilizadas

* **React** (Hooks: `useState`, `useEffect`)
* **Tailwind CSS** (Diseño responsivo y estilizado basado en utilidades)
* **JavaScript (ES6+)**
* **Testing:** [Vitest / Jest + React Testing Library — deja la librería que usaste]

---

## 🧠 Retos Técnicos y Aprendizajes

Durante el desarrollo en React, el mayor desafío técnico fue solucionar un error en la funcionalidad de actualización (`Update`), ya que al editar un producto los cambios no se reflejaban correctamente en la interfaz ni en el almacenamiento persistente.

¿Cómo lo resolví? Identifiqué que el problema estaba en la actualización inmutable del estado y en la referencia al `ID` del producto seleccionado. Reestructuré la función de edición utilizando `.map()` para comparar el identificador único de cada elemento, reemplazar únicamente el objeto modificado sin mutar el arreglo original Además, validé este comportamiento mediante pruebas unitarias para prevenir regresiones futuras.

---

## 🚀 Instalación, Uso y Pruebas

Sigue estos pasos para ejecutar el proyecto y correr las pruebas en tu entorno local:


1. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Ejecuta las pruebas unitarias:**
   ```bash
   npm run test
   ```

---

## 📬 Contacto

Desarrollado por **[Duvan Betancur]**



