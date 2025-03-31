let carrito = [];

document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', () => {
        let nombre = boton.dataset.nombre;
        let precio = parseInt(boton.dataset.precio);

        carrito.push({ nombre, precio });

        actualizarCarrito();
    });
});

function actualizarCarrito() {
    let lista = document.getElementById("lista-carrito");
    let total = document.getElementById("total");
    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        suma += item.precio;
    });

    total.textContent = suma;
}

document.getElementById("comprar").addEventListener("click", () => {
    let mensaje = "Hola, quiero comprar:\n";
    carrito.forEach(item => {
        mensaje += `${item.nombre} - $${item.precio}\n`;
    });

    let url = `https://wa.me/3011300653?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
});

