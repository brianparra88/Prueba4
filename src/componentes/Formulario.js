//En App.js 
import { useState } from 'react';
import App from '../App';
import Tabla from './Tabla';


function Formulario() {

    //useState inicializa con un arreglo vacío a la variable de estado operaciones
    const [productos, setProductos] = useState([])

    function agregar(event) {
        //preventDefault() evita que submit envíe datos a otra página
        event.preventDefault();
        const cod = parseInt(event.target.txt_codigo.value)
        const nom = event.target.txt_nombre.value
        const desc = event.target.txt_descripcion.value
        const precio = parseInt(event.target.txt_precio.value)
        const cantidad = parseInt(event.target.txt_cantidad.value)
        const total = precio * cantidad
        const totalDescuento = total * 0.90
        const totalApagar = totalDescuento

        //se crea un objeto nuevo con los resultados y datos obtenidos del formulario
        const nuevo = {
            codigo: cod,
            nombre: nom,
            descripcion: desc,
            precio: precio,
            cantidad: cantidad,
            total: total,
            descuento: totalDescuento,
            resultado: totalApagar
        }
        //modifica el estado de useState con el nuevo objeto
        setProductos([...productos, nuevo])
        event.target.txt_codigo.value = ''
        event.target.txt_nombre.value = ''
        event.target.txt_descripcion.value = ''
        event.target.txt_precio.value = ''
        event.target.txt_cantidad.value = ''
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-xs-12 col-sm-6 col-xl-3" >
                    <form onSubmit={agregar}>
                        <h2>Agregar producto</h2>
                        <div className="row">
                            <div className="">
                                Código
                                <input className='form-control' type="numeric" name="txt_codigo" placeholder="codigo producto" required /><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                Nombre
                                <input className='form-control' type="text" name='txt_nombre' placeholder="Nombre producto" required /><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                Descripcion
                                <input className='form-control' type="text" name="txt_descripcion" placeholder="tipo de producto" required /><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                Precio
                                <input className='form-control' type="numeric" name="txt_precio" placeholder="ingrese precio" required /><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="">
                                Cantidad
                                <input className='form-control' type="numeric" name="txt_cantidad" placeholder="ingrese cantidad" required /><br />
                            </div>
                        </div>
                        <input className='btn btn-primary' type="submit" value="agregar producto" />
                    </form>
                </div>
                <Tabla productos={productos} />
            </div>
        </div>
    );
}
export default Formulario;