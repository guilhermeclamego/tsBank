# tsBank
Referente ao curso de TypScript do Alura

<strong>Comandos necessários para execução do projeto:</strong><br>
npm install
npm install typescript@2.3.2 --save-dev

<string>Startar o projeto:</strong><br>
npm start 

<strong>conforme package.json, está habilitado o seguinte:</strong><br>
"watch": "tsc -w",
"start": "concurrently \"npm run watch\" \"npm run server\""
Onde, já irá executar o servidor local e as alterações serão automatizadas. 
