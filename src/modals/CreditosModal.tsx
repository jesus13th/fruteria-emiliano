import { IModal } from "./IModal";
import Modal from "./ModalTemplate";

function Credito(){
    return (
        <tr> 
            <td className='center'>123123-2113213-32123</td>
            <td className='center'>06/06/23</td>
            <td className='center'>$514.50</td>
            <td className='center'>$454.50</td>
        </tr>
    )
}

const Creditos: React.FC<IModal> = ({ isOpen, onClose }) => {
    const creditos = Array.from( {length:15}, (_, index) => `123123-2113213-32123`);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Creditos'>
            <main className="administrar-producto">
                <div className="justify-between">
                    <span>Nombre del cliente</span>
                    <input style={{width:'100%', margin:'0 15px', fontSize:'large'}} type="text" name="" id="" />
                    <input className="button-black" type="button" value="Buscar" />
                </div>
                <h4>Creditos del cliente</h4>
                <div className="row bg-gray">
                    <table>
                        <tr> 
                            <th>Ticket</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>Restante</th>
                        </tr>
                        { creditos.map((value)=>{ return <Credito/> }) }
                    </table>
                </div>
                <div className="row justify-between m-10">
                    <div className="justify-center">
                        <span>Abono:</span>
                        <input type="text" />
                    </div>
                    <input className="button-black p-10" type="button" value="Abonar" />
                </div>
            </main>
        </Modal>
    )
}
export default Creditos;