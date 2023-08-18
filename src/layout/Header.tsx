import { useState } from 'react';
import './css/header.css'

import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css'

import AdministrarProducto  from '../modals/AdministrarProductoModal';
import AdministrarCliente from '../modals/administrarClienteModal';
import Notas from '../modals/NotasModal';
import Ventas from '../modals/VentasModal';
import Creditos from '../modals/CreditosModal';
import IngresarGastos from '../modals/IngresarGastosModal';
import GenerarPedido from '../modals/GenerarPedidoModal';
import RegistrarPedido from '../modals/RegistrarPedidoModal';
import Configuracion from '../modals/ConfiguracionModal';

export function Header(){
    const [modalOpenProducto, setModalOpenProducto] = useState(false);
    const [modalOpenCliente, setModalOpenCliente] = useState(false);
    const [modalOpenNotas, setModalOpenNotas] = useState(false);
    const [modalOpenVentas, setModalOpenVentas] = useState(false);
    const [modalOpenCreditos, setModalOpenCreditos] = useState(false);
    const [modalOpenGastos, setModalOpenGastos] = useState(false);
    const [modalOpenGenerarPedido, setModalOpenGenerarPedido] = useState(false);
    const [modalOpenRegistrarPedido, setModalOpenRegistrarPedido] = useState(false);
    const [modalOpenConfiguracion, setModalOpenConfiguracion] = useState(false);

    return (
    <main>
        <div className="header">
            <a href="/"><div className='logo'><span>Fruteria Emiliano</span></div></a>
            <div className='categories'>
                <a href="#" onClick={()=> { setModalOpenProducto(true); }}>Producto</a>
                <a href="#" onClick={()=> { setModalOpenCliente(true); }}>Cliente</a>
                <a href="#" onClick={()=> { setModalOpenNotas(true); }}>Notas</a>
                <a href="#" onClick={()=> { setModalOpenVentas(true); }}>Ventas</a>
                <a href="#" onClick={()=> { setModalOpenCreditos(true); }}>Creditos</a>
                <a href="#" onClick={()=> { setModalOpenGastos(true); }}>Ingresar gasto</a>
                <a href="#" onClick={()=> { setModalOpenGenerarPedido(true); }}>Generar Pedido</a>
                <a href="#" onClick={()=> { setModalOpenRegistrarPedido(true); }}>Regristrar Pedido</a>
                <a href="#" onClick={()=> { setModalOpenConfiguracion(true); }}>Configuracion</a>
            </div>
            <a href="./login">Usuario</a>
        </div>
        
        
        <AdministrarProducto isOpen= {modalOpenProducto} onClose={() => setModalOpenProducto(false)} />
        <AdministrarCliente isOpen= {modalOpenCliente} onClose={()=> {setModalOpenCliente(false)}}/>
        <Notas isOpen= {modalOpenNotas} onClose={()=> {setModalOpenNotas(false)}}/>
        <Ventas isOpen= {modalOpenVentas} onClose={()=> {setModalOpenVentas(false)}}/>
        <Creditos isOpen= {modalOpenCreditos} onClose={()=> {setModalOpenCreditos(false)}}/>
        <IngresarGastos isOpen= {modalOpenGastos} onClose={()=> {setModalOpenGastos(false)}}/>
        <GenerarPedido isOpen= {modalOpenGenerarPedido} onClose={()=> {setModalOpenGenerarPedido(false)}}/>
        <RegistrarPedido isOpen= {modalOpenRegistrarPedido} onClose={()=> {setModalOpenRegistrarPedido(false)}}/>
        <Configuracion isOpen= {modalOpenConfiguracion} onClose={()=> {setModalOpenConfiguracion(false)}}/>
    </main>)
}