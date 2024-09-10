import {Button} from '../../components'
import{Title, Container, ContainerInput, TopBackground} from './styles.js'


export function Home () {
    return (
      <Container>

        <TopBackground>
            <img src=''/>
        </TopBackground>



        <Title>Seja bem-vindo</Title>
  
        <ContainerInput >
          <h2>Faça o login</h2>
          <input id="login" type="text" placeholder="Nome de usuario" />
          <input id="senha" type="text" placeholder="Senha" />
        </ContainerInput>
  
        <div className="containerButton">
            <Button>Login</Button>
          <a href="./senha.js">Esqueci minha senha</a>
            <Button>Cadastre-se</Button>
        </div>
        
      </Container>
    );
  }
  
  
  