import "./css/login.css";

export function Login() {
  return (
    <main className="login">
      <form action="">
        <div>
            <h1>Inicia Sesion</h1>
            <div>
                <span>Ingresa tu usuario</span>
                <input type="text" name="" id="" placeholder="Usuario" />
            </div>
            <div>
                <span>Ingresa tu contraseña</span>
                <input type="password" name="" id="" placeholder="Contraseña" />
            </div>
        </div>
        <input type="button" value="Ingresar" />
        <span className="create-account">¿No tienes cuenta? <a href="/signin"> cuenta</a></span>
      </form>
    </main>
  );
}
