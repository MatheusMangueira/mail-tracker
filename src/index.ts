import 'dotenv/config';
import Imap from 'imap';
import writeToExcel from './writeToExcel';

const imapConfig: Imap.Config = {
  user: process.env.EMAIL_USER || "",
  password: process.env.EMAIL_PASSWORD || "",
  host: process.env.EMAIL_HOST,
  // host: "outlook.office365.com", --- outlook ---
  port: parseInt(process.env.EMAIL_PORT || "993"),
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
};


const imap = new Imap(imapConfig);
let processedEmails: Map<string, Set<string>> = new Map();

function openInbox(cb: any) {
  imap.openBox('INBOX', true, cb);
}

function processEmails() {
  openInbox(function (err: any, box: any) {
    if (err) {
      console.error('Erro ao abrir caixa de entrada:', err);
      return;
    }

    const fetch = imap.seq.fetch(box.messages.total + ':*', {
      bodies: ['HEADER.FIELDS (FROM SUBJECT DATE)'],
      struct: true
    });

    fetch.on('message', function (msg, seqno) {
      let prefix = '(#' + seqno + ') ';

      msg.on('body', function (stream, info) {
        let buffer = '';

        stream.on('data', function (chunk) {
          buffer += chunk.toString('utf8');
        });

        stream.once('end', async function () {
          const headers = Imap.parseHeader(buffer);
          const subject = headers['subject'][0];
          const from = headers['from'][0];
          const date = headers['date'][0];
          const emailId = seqno.toString();

          if (subject && subject.startsWith(process.env.EMAIL_TRACK_TITLE!)) {
            const dynamicPart = subject.replace(process.env.EMAIL_TRACK_TITLE + " ", "");
            const key = from + '|' + dynamicPart;

            if (!processedEmails.has(emailId) || !processedEmails.get(emailId)?.has(key)) {
              processedEmails.set(emailId, new Set<string>());
              processedEmails.get(emailId)?.add(key);

              await writeToExcel(dynamicPart, date);
            }
          }
        });
      });

      msg.once('end', function () {
        console.log(prefix + 'Finalizado');
      });
    });

    fetch.once('error', function (err) {
      console.error('Erro durante a busca de mensagens:', err);
    });

    fetch.once('end', function () {
      console.log('Concluída a busca por todas as mensagens!');
    });
  });
}

imap.once('ready', function () {
  console.log('Conectado ao servidor IMAP');

  // Processar emails a cada 10 segundos
  setInterval(processEmails, 10000);
});

imap.once('error', function (err: any) {
  console.error('Erro:', err);
});

imap.once('end', function () {
  console.log('Conexão encerrada');
});

imap.connect();