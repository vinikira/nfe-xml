# nfe-xml
Módulo para manipular XML de NFe, baseado em regex. Indicado para grandes processamentos em massa pela sua velocidade de processamento.

## Instalação
__NPM__

```sh
npm install nfe-xml
```

## Exemplos de uso

#### Ler o arquivo e instanciar o módulo

```javascript
const fs = require('fs');
const file = fs.readFileSync('/path/to/xml', 'utf-8');
const NFe = require('nfe-xml');
const xml = new NFe(file);

xml.produtos().select(0).valor().done(); //ex. 250.65
```
#### Iterar sobre produtos do xml

```javascript
//...
xml.produtos().each(produto => console.log(`${produto.icms().done()} - `)); //ex. 254.55 - 658.54 - 856.65
//...
```
#### Pegar o nome do emitente e destinatário

```javascript
//...
xml.emitente().nome().done(); //ex. Foo ltda

xml.destinatario().nome().done(); //ex. Bar ltda
//...
```
Em breve será adicionado uma documentação em JSDoc.
