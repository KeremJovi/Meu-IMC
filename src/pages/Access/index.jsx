import './styles.css';
import logoqImg from '../../assets/img/imc.svg';
import Button from '../../components/Button/Button';

function Access() {
  return (
    <div id="body">
      <div className="part-logo">
        <img src={logoqImg} alt="Ilustração Sibolizando perguntas e respostas" />
        <h2>Bem vindo!</h2>
        <h1> Ao Seu IMC</h1>
        <p className="text-logo">Onde você pode acompanhar seu progresso!</p>
        <p className="text-logo">
          Entre com sua conta para que seja armazenado seus índices ou click no botão abaixo para apenas calcular seu
          IMC.
        </p>
        <button className="button-logo">Calcular IMC</button>
      </div>
      <div className="part-login">
        <div className="login">
          <form>
            <div className="input">
              <div>
                <input type="text" placeholder="E-mail" />
              </div>
              <div>
                <input type="text" placeholder="Senha" />
              </div>
              <div className="button-login">
                <Button />
              </div>
            </div>
          </form>
        </div>
        <p className="regist">
          Ainda não é registrado? <a href=" ">Registrar-se</a>
        </p>
      </div>
    </div>
  );
}

export default Access;
