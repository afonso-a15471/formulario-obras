
// Importar componente Button do Agora Design System. Ver https://design.agora.pt/
import { Accordion, DropdownOption, DropdownSection, InputSelect, Pill, Tab, TabBody, TabHeader, Tabs } from '@ama-pt/agora-design-system';

// Declarar função da aplicação principal
function App() {
  
  // Devolver interface da função
  return (
    <div className="grid xs:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-16">
      <div className="xs:col-span-4 md:col-span-8 xl:col-span-12 py-16">

        <h1 className="text-2xl-bold p-16">
          Folha de Obra - Registo
        </h1>

      </div>
      <div className="xs:col-span-4 md:col-span-8 xl:col-span-12 py-16 px-16">
        <Tabs>
          <Tab>
            <TabHeader>
              Criar nova folha de obra
            </TabHeader>
            <TabBody>

              <Pill variant="danger">(*) - Campos obrigatórios</Pill>
              
              <div className="grid xl:grid-cols-12 gap-x-32">
                <div className="xs:col-span-4 md:col-span-8 xl:col-span-12 py-16">

                  <Accordion headingTitle="Dados gerais" expanded={true}>
                    <div>
                      
                      <InputSelect label={<span>Nome da Obra <Pill variant="danger">*</Pill></span>} required={true} hideSectionNames={true}>
                        <DropdownSection>

                          <DropdownOption selected value="">
                            Escolha um nome de obra
                          </DropdownOption>

                          <DropdownOption value="12">
                            Logística
                          </DropdownOption>

                          <DropdownOption value="3">
                            Manutenção de edifícios desportivos
                          </DropdownOption>

                           <DropdownOption value="2">
                            Manutenção de escolas
                          </DropdownOption>
                         <DropdownOption value="5">
                            Manutenção de espaços publicos
                          </DropdownOption>

                           <DropdownOption value="4">
                            Manutenção de outros edifícios
                          </DropdownOption>
                          
                        </DropdownSection>
                      </InputSelect>

                      <div class="bs-callout bs-callout-primary">
                <h5><b>Resumo dos Serviços Efetuados</b></h5>Serviço de transporte de equipamentos e mobiliário, arquivo, etc.
            </div>

                    </div>
                  </Accordion>

                </div>
              </div>

            </TabBody>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

// Exportar componente App. Obrigatório!
export default App;
