function Tabla({ productos = [] }) {
    return (
        <div>
            <table>
                <thead><tr><th>Código</th><th>Nombre</th><th>Descripcion</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Total descuento</th></tr></thead>
                <tbody>
                    {productos.map(art => {
                        return (
                            <tr key={art.codigo}>
                                <td>
                                    {art.codigo}
                                </td>
                                <td>
                                    {art.nombre}
                                </td>
                                <td>
                                    {art.descripcion}
                                </td>
                                <td>
                                    {art.precio}
                                </td>
                                <td>
                                    {art.cantidad}
                                </td>
                                <td>
                                    {art.total}
                                </td>
                                <td>
                                    {art.descuento}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;