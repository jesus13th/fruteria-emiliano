import { Calendar, Day, DayRange, DayValue } from "@amir04lm26/react-modern-calendar-date-picker";
import { IModal } from "./IModal";
import Modal from "./ModalTemplate";
import { useState } from "react";

function Valor(){
    return (
        <tr> 
            <td className='center'>$2123.50</td>
        </tr>
    )
}

const Ventas: React.FC<IModal> = ({ isOpen, onClose }) => {
    const [day, setDay] = useState<DayValue>(null);
    const [dayRange, setDayRange] = useState<DayRange>({
      from: null,
      to: null
    });
    const [days, setDays] = useState<Day[]>([]);

    const productos = Array.from( {length:15}, (_, index) => `123123-2113213-32123`);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Ventas'>
            <main className="notas row m-10">
                <div className="m-10 bg-gray  p-10 radius-15">
                    <span className="m-10">Seleccione un dia para ver las ventas</span>
                    <br />
                    <div className="m-10"><Calendar value={dayRange} onChange={setDayRange} /></div>
                    <input className="button-black m-10 p-10" type="button" value="Ver Ventas" />
                    <div className="m-10 justify-between">
                        <span>Ganancias:</span>
                        <input type="text" />
                    </div>
                    <div className="center">
                        <input className="button-black m-10 p-10" type="button" value="Generar corte" />
                    </div>
                </div>
                <div className="column m-10 p-10 bg-gray radius-15 justify-between">
                    <table>
                        <tr> <th>Ventas</th> </tr>
                        { productos.map((value)=>{ return <Valor/> }) }
                    </table>
                    <div className="justify-between m-10">
                        <span className="width-150">Ventas total:</span>
                        <input className="width-50" type="text" readOnly />
                    </div>
                </div>
                <div className="column m-10 p-10 bg-gray radius-15 justify-between">
                    <table>
                        <tr> <th>Gastos</th> </tr>
                        { productos.map((value)=>{ return <Valor/> }) }
                    </table>
                    <div className="justify-between m-10">
                        <span className="width-150">Gastos total:</span>
                        <input className="width-50" type="text" readOnly />
                    </div>
                </div>
                <div className="column m-10 p-10 bg-gray radius-15 justify-between">
                    <table>
                        <tr> <th>Abonos</th> </tr>
                        { productos.map((value)=>{ return <Valor/> }) }
                    </table>
                    <div className="justify-between m-10">
                        <span className="width-150">Abonos total:</span>
                        <input className="width-50" type="text" readOnly />
                    </div>
                </div>
            </main>
        </Modal>
    )
}
export default Ventas;