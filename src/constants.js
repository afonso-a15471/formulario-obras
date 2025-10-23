export const requests = {
  GET_DADOS: {
    url: 'https://info2.cmt.local/folhaobra2/modules/folhaobra/files/php/return_ajudanomeobra.php',
    request: {
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      credentials: "include",
      mode: 'cors',
    },
    response: `<div class="bs-callout bs-callout-primary">
                <h5><b>Resumo dos Serviços Efetuados</b></h5>Serviço de transporte de equipamentos e mobiliário, arquivo, etc.
              </div>`,
  },
};