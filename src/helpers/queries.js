const URI_Producto = import.meta.env.VITE_API_PRODUCTO;

export const crear = async (productoNuevo) => {
    try {
        const res = await fetch(URI_Producto, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoNuevo),
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductos = async () => {
    try {
        const res = await fetch(URI_Producto);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteProductos = async (id) => {
    try {
        const res = await fetch(`${URI_Producto}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductoById = async (id) => {
    try {
        const res = await fetch(`${URI_Producto}/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const modificarProducto = async (producto, id) => {
    try {
        const res = await fetch(`${URI_Producto}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

const userAdmin = {
    email: "admin@gmail.com",
    password: "admin123",
};

export const iniciarSesion = (user) => {
    if (
        user.email === userAdmin.email &&
        user.password === userAdmin.password
    ) {
        sessionStorage.setItem("loginRC", JSON.stringify(user.email));
        return true;
    } else {
        return false;
    }
};
