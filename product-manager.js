class ProductManager {
    constructor() {
        this.productos = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let producto = {
            id: this.#getMaxId() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        const campos = Object.values(producto);
        const productoCode = this.#getProductoCode(producto.code);
        if (campos.includes(undefined)) {       //valida que no haya campo vacío
            console.error('Es obligatorio usar todos los campos');
        } else if (productoCode) {      //valida que no se hay repetido el code
            console.error('Producto repetido')
        } else {
            return this.productos.push(producto);
        }

    }

    getProducts() {
        console.log(this.productos);
        return this.productos;
    }

    getProductById(id) {
        let productFound = false;
        this.productos.forEach((producto) => {
            if (producto.id === id) {
                productFound = producto;
            }
        })
        productFound ? console.log('El producto buscado es: ', productFound) : console.error("Not found");
    }

    #getMaxId() {       //método para asegurarse que la id generada no se repita
        let maxId = 0;
        this.productos.map((producto) => {
            if (producto.id > maxId) maxId = producto.id;
        });
        return maxId;
    }
    #getProductoCode(codeProducto) {  //busca el producto por el code
        return this.productos.find((producto) => producto.code === codeProducto);
    }

}

//instancia
const producto = new ProductManager(); 
//Proceso de testing
producto.getProducts();
producto.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
producto.getProducts();
producto.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
producto.getProductById(2); 
producto.getProductById(1);

//más pruebas
producto.addProduct('producto prueba', 'Este es un producto prueba'); // sin llenar todos los campos
producto.addProduct('otro producto prueba', 'Este es un producto prueba', 20, 'Sin imagen', 'cde456', 20); // agregar otro producto
producto.getProducts();
producto.getProductById(2);