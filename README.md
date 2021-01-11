# tsBank
Referente ao curso de TypScript do Alura

Para execução do projeto, executar:
npm install
npm install typescript@2.3.2 --save-dev


npm start 

conforme package.json, está habilitado o seguinte:
"watch": "tsc -w",
"start": "concurrently \"npm run watch\" \"npm run server\""
Onde, já irá executar o servidor local e as alterações serão automatizadas. 
