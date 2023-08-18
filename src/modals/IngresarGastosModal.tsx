import DatePicker, { DayValue } from "@amir04lm26/react-modern-calendar-date-picker";
import { IModal } from "./IModal";
import Modal from "./ModalTemplate";
import { useState } from "react";

const IngresarGastos: React.FC<IModal> = ({ isOpen, onClose }) => {
    let now = new Date();
    
    const [day, setDay] = useState<DayValue>({ day: now.getDay(), month: now.getMonth(), year: now.getFullYear(), });

    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Ingresar gastos'>
            <main className="ingresar-gasto column m-10 justify-between">
                <div className="m-10">
                    <span>Nombre del gasto:</span>
                    <input className="p-10 m-10"  type="text" />
                </div>
                <div className="row">
                    <span className="p-10">Fecha:</span>
                    <div className="justify-center">
                        <DatePicker value={day} onChange={setDay} />
                    </div>
                </div>
                <span className="m-10">Descripcion</span>
                <textarea className="m-10 height-200" name=""></textarea>
                <div className="m-10">
                    <span>Total del gasto: $</span>
                    <input className="m-10 p-10" type="text" />
                </div>
                <input className="button-black p-10 m-10" type="button" value="Ingresar" />
            </main>
        </Modal>
    )
}
export default IngresarGastos;