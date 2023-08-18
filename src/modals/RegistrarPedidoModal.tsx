import { IModal } from "./IModal";
import Modal from "./ModalTemplate";

const RegistrarPedido: React.FC<IModal> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Registrar pedido'>
            <main className="administrar-producto">
                <div className="row m-10">
                    <div className="column m-10">
                        <div className="m-10 column">
                            <span>Introduce el nombre clave del pedido</span>
                            <input className="p-10" type="text" />
                        </div>
                        <div className="m-10 column">
                            <span>Introduce la cantidad del producto</span>
                            <input className="p-10" type="text" />
                        </div>
                        <input className="m-10 height-50 button-black" type="button" value="Registar" />
                    </div>
                </div>
            </main>
        </Modal>
    )
}
export default RegistrarPedido;