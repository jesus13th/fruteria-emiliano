import { IModal } from "./IModal";
import Modal from "./ModalTemplate";

const AdministrarCliente: React.FC<IModal> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Administracion de clientes'>
            <main className="administrar-cliente">
                <div className="justify-between">
                    <span>Nombre del cliente</span>
                    <input style={{width:'100%', margin:'0 15px', fontSize:'large'}} type="text" name="" id="" />
                    <input className="button-black" type="button" value="Buscar" />
                </div>
                <h4>Informacion del cliente</h4>
                <div className="row">
                    <div className="column justify-between">
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Nombre</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Telefono</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Direccion</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Ciudad</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>R.F.C.</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> 
                            <span style={{marginRight:'15px'}}>Descuentos</span> 
                            <select name="" id="">
                                <option value="">No</option>
                                <option value="">Si</option>
                            </select>
                        </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Dias de credito</span> <input type="text" /> </div>
                        <div className="justify-between m-10 fontsize-large"> <span style={{marginRight:'15px'}}>Credito maximo</span> <input type="text" /> </div>
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
export default AdministrarCliente;