import { useState } from 'react';
import './css/home.css'


function Row(){
    return (
        <tr> 
            <td className='center'>1.5</td>
            <td>Zanahorias</td> 
            <td className='center'>$45.00</td> 
            <td className='center'>$45.00</td> 
        </tr>
    )
}

export function Home() {
    const productos = Array.from( {length:14}, (_, index) => `Producto ${index + 1}`);
    
    return <main className="home">
        <div className="content">
            <div className="products">
                <div className="product">
                    <div className="search">
                        <span>Buscar producto</span>
                        <input type="text" />
                    </div>
                    <div className="quantity">
                        <span>Cantidad/Peso</span>
                        <input type="text" />
                        <div>
                            <input type="checkbox"/>
                            <span>Bascula</span>
                        </div>
                    </div>
                    <div className="add">
                        <input type="button" style={{height:'66%'}} value="Agregar al carrito" />
                        <input type="button" style={{height:'33%'}} value="Producto temporal" />
                    </div>
                </div>
                <div className="product-list">
                    <table>
                        <tr> 
                            <th style={{width:'10%'}}>Cantidad</th>
                            <th style={{width:'70%'}}>Producto</th> 
                            <th style={{width:'10%'}}>Precio</th> 
                            <th style={{width:'10%'}}>Total</th>
                        </tr>
                        { productos.map((value)=>{ return <Row/> }) }
                    </table>
                    <div className="product-delete">
                        <input type="button" value="Vaciar carrito" />
                        <input type="button" value="Eliminar producto seleccionado" />
                    </div>
                </div>
            </div>
            <div className="others">
                <h3>Ventas pendientes</h3>
                <div className="tmp-sales">
                    <button>Guardar</button>
                    <button>Guardar</button>
                    <button>Guardar</button>
                    <button>Guardar</button>
                    <button>Guardar</button>
                    <button>Guardar</button>
                    <button>Guardar</button>
                    <button>Guardar</button>
                </div>
                <div className="client-data">
                    <h3>Cliente</h3>
                    <div className='flex-between'>
                        <span>Nombre</span>
                        <input type="text" name="" id="" placeholder='Cliente General' />
                    </div>
                    <div className='flex-between'>
                        <span>Descuento</span>
                        <select name="" id="">
                            <option value="si">Si</option>
                            <option value="si">No</option>
                        </select>
                    </div>
                </div>
                <div className="pay">
                    <h3>Pago</h3>
                    <div className='flex-between'> <span>Total</span> <input type="text" value={0} /> </div>
                    <div className='flex-between'> <span>Pago/Abono</span> <input type="text" value={0} /> </div>
                    <div className='flex-between'> <span>Cambio</span> <input type="text" value={0} /> </div>
                    <div className='flex-between'>
                        <span>Metodo de pago</span>
                        <select name="" id="">
                            <option value="">Contado</option>
                            <option value="">Cheque</option>
                            <option value="">Credito</option>
                        </select>
                    </div>
                    <div className='done-sale'>
                        <button >Realizar venta</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
}