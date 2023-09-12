import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "./compomentes/CampoTexto/CampoTexto";
import { Card } from "./compomentes/Card/Card";
import { Estilos } from "./compomentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./compomentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./compomentes/Tipografia/Tipografia";
import { Botao } from "./compomentes/Botao/Botao";
import { ListaSuspensa } from "./compomentes/ListaSuspensa/ListaSuspensa";
import { Cabecalho } from "./compomentes/Cabecalho/Cabecalho";
import { Rodape } from "./compomentes/Rodape/Rodape";

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
      <img src='./logo021.png'/>
      </Cabecalho>
      
      <Container style={{margin:'80px 0'}}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h3" componente="h1">
                Crie seu cadastro
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
              <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                <CampoTexto titulo="cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                <CampoTexto titulo="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                <CampoTexto titulo="senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                <CampoTexto titulo="repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                 <Botao variante="segundaria"> Anterior </Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{textAlign:'right'}}>
                  <Botao>Proxima</Botao>
                  </div>
                
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </Container>
      <Rodape>
      <img src='./logo021.png'/>
      <p>Desenvolvido por Anna Beatriz. Projeto fictício sem fins comerciais.</p>
      </Rodape>
    </ProvedorTema>
  );
}

export default App;


