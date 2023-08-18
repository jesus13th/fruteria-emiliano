import './css/signin.css'
export function Singin(){
    return (
    <main className="signin">
        <form action="">
            <div>
                <h1>Registrate</h1>
                <div>
                    <span>Ingresa tu usuario</span>
                    <input type="text" name="" id="" placeholder="Contraseña" />
                </div>
                <div>
                    <span>Tipo de usuario</span>
                    <select name="" id="">
                        <option value="empleado">Empleado</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <div>
                    <span>Ingresa tu contraseña</span>
                    <input type="password" name="" id="" placeholder="Contraseña" />
                </div>
                <div>
                    <span>Repite tu contraseña</span>
                    <input type="password" name="" id="" placeholder="Contraseña" />
                </div>
            </div>
            <input type="button" value="Registrar" />
        </form>
    </main>
    )
}