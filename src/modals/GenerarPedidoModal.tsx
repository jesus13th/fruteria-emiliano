import { IModal } from "./IModal";
import Modal from "./ModalTemplate";

const GenerarPedido: React.FC<IModal> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Generar pedido'>
            <main className="generar-pedido">
                <span>Marque las categorias a generar pedido</span>
                <div className="row m-10">
                    <div className="justify-between column border p-10">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>Abarrotes</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>Frutas y Verduras</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>Cereales</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>Desechables</span>
                        </div>
                    </div>
                    <div className="column m-10 justify-between">
                        <input className="button-black m-10 p-10" type="button" value="Marcar todo" />
                        <input className="button-black m-10 p-10" type="button" value="Desmarcar todo" />
                    </div>
                </div>
                <div className="center">
                    <input className="button-black m-10 p-10" type="button" value="Generar Pedido" />
                </div>
            </main>
        </Modal>
    )
}
export default GenerarPedido;