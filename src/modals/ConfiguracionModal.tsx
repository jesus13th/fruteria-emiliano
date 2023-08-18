import { IModal } from "./IModal";
import Modal from "./ModalTemplate";

const Configuracion: React.FC<IModal> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Configuracion'>
            <main className="configuracion row">
                <div className="column bg-gray m-10 p-10">
                    <h4>Impresora</h4>
                    <span>Seleccione la impresora a utilizar</span>
                    <select className="p-10" name="" id="">
                        <option value="">XP-230 Series</option>
                        <option value="">Otras v:</option>
                        <option value="">Otras v:</option>
                        <option value="">Otras v:</option>
                    </select>
                    <div className="justify-between">
                        <span className="justify-center m-r-5">Caracteres maximos</span>
                        <input className="p-10" type="number" />
                    </div>
                    <span>Ubicacion de archivos</span>
                    <div className="justify-between">
                        <input type="text" />
                        <input className="p-10 button-black" type="button" value="..." />
                    </div>
                    <span>Texto de prueba</span>
                    <div className="justify-between">
                        <input type="text" />
                        <input className="p-10 button-black" type="button" value="Imprimir prueba" />
                    </div>
                </div>
                <div className="bg-gray m-10 p-10">
                    <h4>Bascula</h4>
                    <div className="m-10 justify-between">
                        <span className="m-10">Puerto Serial</span>
                        <select className="p-10" name="" id="">
                            <option value="">COM1</option>
                            <option value="">COM2</option>
                            <option value="">COM3</option>
                            <option value="">COM4</option>
                        </select>
                    </div>
                    <div className="m-10 justify-between">
                        <span className="m-10">Rate</span>
                        <select className="p-10" name="" id="">
                            <option value="">300</option>
                            <option value="">1200</option>
                            <option value="">2400</option>
                            <option value="">9600</option>
                            <option value="">10417</option>
                        </select>
                    </div>
                    <div className="m-10 justify-between">
                        <span className="m-10">Valor de prueba</span>
                        <input className="p-10" type="text" />
                    </div>
                    <div  className="justify-between">
                        <input className="button-black m-10 p-10" type="button" value="Iniciar prueba" />
                        <input className="button-black m-10 p-10" type="button" value="Detener prueba" />
                    </div>
                </div>
                <div className="bg-gray m-10 p-10 column">
                    <h4>Informacion del ticket</h4>
                    <span>Domicilio:</span>
                    <input className="p-10" type="text" />
                    <span>Telefono:</span>
                    <input className="p-10" type="text" />
                    <span>Ciudad:</span>
                    <input className="p-10" type="text" />
                </div>
            </main>
        </Modal>
    )
}
export default Configuracion;