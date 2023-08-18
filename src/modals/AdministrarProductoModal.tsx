import { IModal } from "./IModal";
import Modal from "./ModalTemplate";
import './css/administrar-producto.css'



const AdministrarProducto: React.FC<IModal> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Administracion de producto'>
            <main className="administrar-producto">
                <div className="justify-between">
                    <span>Clave de producto</span>
                    <input style={{width:'100%', margin:'0 15px', fontSize:'large'}} type="text" name="" id="" />
                    <input className="button-black" type="button" value="Buscar" />
                </div>
                <h4>Informacion del producto</h4>
                <div className="row">
                    <div className="column justify-between">
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Clave</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Nombre</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> 
                            <span style={{marginRight:'15px'}}>Categoria</span> 
                            <select name="" id="">
                                <option value="">Frutas y Verduras</option>
                                <option value="">Abarrotes</option>
                                <option value="">Tienda</option>
                            </select>
                        </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Precio de compra</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Precio de venta</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Precio de venta cliente</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>cantidad existente</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>cantidad maxima</span> <input type="text" /> </div>
                    </div>
                    <div className="column">
                        <input className="button-black m-10 width-100 height-100" type="button" value="Agregar" />
                        <input className="button-black m-10 width-100 height-100" type="button" value="Actualizar" />
                        <input className="button-black m-10 width-100 height-100" type="button" value="Eliminar" />
                    </div>
                </div>
            </main>
        </Modal>
    )
}
export default AdministrarProducto;