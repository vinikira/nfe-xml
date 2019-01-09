# nfe-xml
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

### Mapear produtos

```javascript
//...
xml.produtos().map(produto => ({ valor: produto.valor().toNumber().done() })); // [{ valor: 255.50 }, { valor: 265.78 }]
//...
```

### Filtrar produtos

```javascript
//...
xml.produtos().filter(produto => produto.valor().toNumber().done() > 400); // [ NFe {}, NFe {} ]
//...
```

### Reduzir produtos para um valor

```javascript
//...
xml.produtos().reduce(produto => produto.valor().toNumber().done() + acc, 0); // 500.56
//...
```

#### Pegar o nome do emitente e destinatário

```javascript
//...
xml.emitente().nome().done(); //ex. Foo ltda

xml.destinatario().nome().done(); //ex. Bar ltda
//...
```
