import Producto from "../database/model/producto.js";

export const funcionPrueba = (req, res) => {
  console.log("alguien hizo una solicitud get a la ruta de prueba");
  res.send("Hola mundo desde el backend");
};

export const crearProducto = async (req, res) => {
  try {
    //extraer el producto del body de la solicitud(req)
    //validar los datos del body
    //crear un objeto con el modelo del producto Producto
    const productoNuevo = new Producto(req.body);
    //guardar el objeto en la BD
    await productoNuevo.save();
    //enviar la respuesta que pudimos crear el producto
    res.status(201).json({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se puede crear el producto" });
  }
};

export const listarProductos = async (req, res) => {
  try {
    //pedir a la BD la coleccion de productos
    const productos = await Producto.find();
    //enviar la respuesta que pudimos crear el producto
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se puede crear el producto" });
  }
};

export const editarProducto = async (req, res) => {
  try {
    //validar los datos del body
    //buscar si el producto existe
    const productoBuscado = await Producto.findById(req.params.id);

    //en caso de que no exista contsto con un error
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "El producto solicitado no existe" });
    }
    //si lo encontre al producto, entonces lo edito
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El producto fue editado correctamente" });

    //envio respuesta al front end
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se pudo editar el producto" });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //verificar si el id es valido
    const productoBuscado = await Producto.findById(req.params.id);
    //si no existe, enviar un mensaje de error
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "El producto solicitado no existe" });
    }
    await Producto.findByIdAndDelete(req.params.id);
    //si existe el producto con el id lo borro y respondo al frontend
    res
      .status(200)
      .json({ mensaje: "El producto fue eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se pudo borrar el producto" });
  }
};

export const obtenerProducto = async (req,res) => {
try {
  const productoBuscado = await Producto.findById(req.params.id)

  if(!productoBuscado){
    return res.status(404).json({mensaje:'El producto solicitado no existe'})
  }
  res.status(200).json(productoBuscado)
} catch (error) {
  console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se pudo encontrar el producto" });
}
}

