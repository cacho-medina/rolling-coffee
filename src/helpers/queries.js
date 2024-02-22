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
        console.log(res);
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

export const deleteProductos = async () => {};
