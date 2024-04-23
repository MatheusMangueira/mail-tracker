# Mail-Tracker

Esse projeto foi desenvolvido para monitorar minha caixa de e-mails e registrar automaticamente as candidaturas que
faço para vagas de emprego, especialmente aquelas recebidas através do LinkedIn. Cada vez que envio uma candidatura,
eu recebo um e-mail do Linkedin informando que me candidatei para a vaga e, então, o sistema adiciona uma entrada em uma tabela Excel,
contendo o nome da empresa e a data em que foi feita a aplicação.

</br>
Essa ideia surgiu através de um vídeo no meu canal do YouTube, onde eu queria mostrar todas as vagas para as quais me candidatei até conseguir
um emprego na área de desenvolvimento. Este projeto me ajudou a automatizar esse processo, registrando automaticamente cada candidatura e organizando 
as informações de forma eficiente.

### O projeto utiliza tecnologias como:
<br/>
  <img src="https://skillicons.dev/icons?i=git,ts,nodejs,gmail" />

  ### Dúvidas e solicitações relacionadas a integração e API, devem ser enviadas para o [linkedin](https://www.linkedin.com/in/matheusmangueira/)

  
## Acesso
1)  Para testar, Faça um clone do repósitorio https://github.com/MatheusMangueira/mail-tracker.git
2)  Configure as variaveis de ambiente de acordo com o arquivo <strong> .env.example </strong>


## OBS PARA GMAIL
Para conseguir configurar e monitorar o GMAIL, você precisarar fazer algumas configurações no seu Gmail. 
1) Abra seu `Gmail` e clique na engrenagem no canto superior direito.
2) Selecione `"Configurações"` e, em seguida, clique em `"Mostrar todas as configurações"`.
3) Na aba `"Encaminhamento e POP/IMAP"`:
   * Ative o Status do `IMAP`.
   * Certifique-se de que o IMAP esteja habilitado.
4) Você precisa ter a `"Verificação em duas etapas"` ativada:
   * Acesse a página `"Contas do Google"` e selecione `"Segurança"`.
   * Em `"Verificação em duas etapas"`, ative essa opção e siga as instruções para configurá-la.
5) Na mesma página, vá para `"Senhas de app"` (localizada em "Segurança"): `(https://support.google.com/accounts/answer/185833)`
   * Crie uma nova senha de app e selecione `"Outro (nome personalizado)"` como o tipo de app.
   * Escolha um nome para o app (por exemplo, "Mail Tracker") e clique em "Gerar".
   * Copie a senha de 16 caracteres gerada.
6) No arquivo `.env.example`, em vez de usar sua senha do Gmail, cole a senha de 16 caracteres que você acabou de gerar.

# Extras
Crie um arquivo <strong> `.bat` </strong>  e faça: 

```
@echo off
cd /d E:\caminho\caminho_do_projeto\
npm run start
```
Este script permite que você execute o comando npm run start no diretório do seu projeto. Aqui está uma explicação de cada linha:
  * `@echo off`: Desativa a exibição dos comandos no prompt de comando, tornando o processo mais limpo.
  * `cd /d E:\caminho\caminho_do_projeto\`: Navega até o diretório do seu projeto, substituindo caminho_do_projeto pelo caminho real do seu projeto.
  * `npm run start`: Executa o comando npm run start, que inicia o seu projeto.
    
Este script permite que você inicie facilmente o seu projeto com apenas um clique. Certifique-se de substituir caminho_do_projeto pelo caminho real do seu projeto.








