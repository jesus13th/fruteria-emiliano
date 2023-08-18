import { useState } from "react";
import { IModal } from "./IModal";
import Modal from "./ModalTemplate";
import { Calendar, DayValue, DayRange, Day } from '@amir04lm26/react-modern-calendar-date-picker'

function Ticket(){
    return (
        <tr> 
            <td className='center'>123123-2113213-32123</td>
        </tr>
    )
}
const Notas: React.FC<IModal> = ({ isOpen, onClose }) => {
    const [day, setDay] = useState<DayValue>(null);
    const [dayRange, setDayRange] = useState<DayRange>({
      from: null,
      to: null
    });
    const [days, setDays] = useState<Day[]>([]);

    const productos = Array.from( {length:15}, (_, index) => `123123-2113213-32123`);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Notas'>
            <main className="notas row m-10">
                <div className="m-10 bg-gray  p-10 radius-15">
                    <span className="m-10">Seleccione el dia para ver las notas</span>
                    <br />
                    <div className="m-10"><Calendar value={dayRange} onChange={setDayRange} /></div>
                    <input className="button-black m-10 p-10" type="button" value="Buscar" />
                    <div className="justify-between">
                        <input className="button-black m-10 p-10" type="button" value="Ver Nota" />
                        <input className="button-black m-10 p-10" type="button" value="Imprimir Nota" />
                    </div>
                </div>
                <div className="column m-10 p-10 bg-gray radius-15">
                    <span>Seleccione un archivo</span>
                    <br />
                    <table>
                        <tr> <th>Notas</th> </tr>
                        { productos.map((value)=>{ return <Ticket/> }) }
                    </table>
                </div>
                <div className="column m-10 p-10 bg-gray radius-15">
                    <span className="">Ticket</span>
                    <br />
                    <textarea style={{height:'100%', width:'250px', resize:'none'}}></textarea>
                </div>
            </main>
        </Modal>
    )
}
export default Notas;