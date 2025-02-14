import React, { useState } from "react";
import InputControl from '../../assets/componentes/InputControl';


function FormCadastro() {

    const [formPart, setFormPart] = useState('pt1')

    return (
        <>

            <form id="registrationForm" method="POST" action="/register/pedreiro">


                <div id="cadastroInicio" class="avancar-cadastro-pedreiro">
                    {formPart === 'pt1' &&

                        <div>
                            <InputControl>
                                <input type="hidden" name="tipo" value="pedreiro" />
                                <label for="nome" class="text">Nome:</label>
                                <input type="text" name="nome" required class="input" />
                            </InputControl>
                            <InputControl>
                                <label for="cpf" class="text">CPF:</label>
                                <input type="text" name="cpf" required class="input" />
                            </InputControl>
                            <InputControl>
                                <label for="cep" class="text">CEP:</label>
                                <input type="text" name="cep" required class="input" />
                            </InputControl>

                            <button class="avancar-cadastro-pedreiro botao-entrar" onClick={() => setFormPart('pt2')}> Avançar</button>
                        </div>

                    }


                    {formPart === 'pt2' &&

                        <div>
                            <InputControl>
                                <label for="telefone" class="text">Telefone:</label>
                                <input type="text" name="telefone" class="input" />
                            </InputControl>
                            <InputControl>
                                <label for="email" class="text">Email:</label>
                                <input type="text" name="email" required class="input" />
                            </InputControl>
                            <InputControl>
                                <label for="senha" class="text">Senha:</label>
                                <input type="password" name="senha" required class="input" />
                            </InputControl>

                            <div class="manter-conectado cadastro-tipo-servico">
                                <div>
                                    <input type="checkbox" id="conectado" name="conectado" />
                                    <label for="conectado">Aceitar termos e condições de uso de dados </label>
                                </div>
                                
                            </div>
                            <div className="container-buttons">
                                <button type="submit" class="botao-entrar cadastro-tipo-servico" onClick={() => setFormPart('pt1')} style={{ backgroundColor: "white", color: "#FE8813", border:"2px solid #FE8813"}}>Voltar</button>

                                <button type="submit" class="botao-entrar cadastro-tipo-servico">Cadastrar</button>
                            </div>
                        </div>


                    }
                </div>

                    {/* <h3>Agora, escolha os tipos de serviços que deseja oferecer <br /><span>(Máx. 3 serviços)</span></h3>
                        <div class="cadastro-pedreiro-checkbox">

                            <input type="checkbox" id="nome-servico" name="tipos_servicos" value="id-servico" />
                            <label for="nome-servico">
                                <div class="icone-servico">
                                    <img src="../img-fixas/acordo.png" alt="nome-servico" />
                                </div>
                                <div class="info-servicos-cadastro">
                                    <span>nome servico</span>
                                    <p>desc servico</p>
                                </div>
                            </label>
                        </div> */}


            </form>


        </>
    )
}

export default FormCadastro;