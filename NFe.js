function NFe (xml) {
  this.xml = xml.replace(/\n/gi, '')
  this.temp = xml.replace(/\n/gi, '')
}

NFe.prototype._extract = function (regex) {
  const result = regex.exec(this.temp)
  return result ? result[1] : 0
}

NFe.prototype._extractGlobal = function (regex) {
  let result
  const arr = []
  for (result = regex.exec(this.temp); regex.lastIndex !== 0; result = regex.exec(this.temp)) {
    arr.push(result[1])
  }
  return arr.length ? arr : arr.length
}

NFe.prototype.select = function (num) {
  this.temp = this.temp[num]
  return this
}

NFe.prototype.done = function () {
  const resp = this.temp
  this.temp = this.xml
  return resp
}

NFe.prototype.destinatario = function () {
  this.temp = this._extract(/<dest>(.+?)<\/dest>/i)
  return this
}

NFe.prototype.emitente = function () {
  this.temp = this._extract(/<emit>(.+?)<\/emit>/i)
  return this
}

NFe.prototype.endereco = function () {
  this.temp = this._extract(/<enderemit>(.+?)<\/enderemit>/i) ||
            this._extract(/<enderdest>(.+?)<\/enderdest>/i)
  return this
}

NFe.prototype.uf = function () {
  this.temp = this._extract(/<uf>(.+?)<\/uf>/i)
  return this
}

NFe.prototype.inscricaoEstadualST = function () {
  this.temp = this._extract(/<iest>(.+?)<\/iest>/i)
  return this
}

NFe.prototype.produtos = function () {
  this.temp = this._extractGlobal(/<det.+?>(.+?)<\/det>/gi)
  // || this._extract(/<vprod>(.+?)<\/vprod>/i);
  return this
}

NFe.prototype.cobranca = function () {
  this.temp = this._extract(/<cobr>(.+?)<\/cobr>/i)
  return this
}

NFe.prototype.fatura = function () {
  this.temp = this._extract(/<fat>(.+?)<\/fat>/i)
  return this
}

NFe.prototype.numFatura = function () {
  this.temp = this._extract(/<nfat>(.+?)<\/nfat>/i)
  return this
}

NFe.prototype.valorLiquido = function () {
  this.temp = this._extract(/<vliq>(.+?)<\/vliq>/i)
  return this
}

NFe.prototype.duplicatas = function () {
  this.temp = this._extractGlobal(/<dup>(.+?)<\/dup>/gi)
  return this
}

NFe.prototype.dataVencimento = function () {
  this.temp = this._extract(/<dvenc>(.+?)<\/dvenc>/i)
  return this
}

NFe.prototype.numDuplicata = function () {
  this.temp = this._extract(/<ndup>(.+?)<\/ndup>/i)
  return this
}

NFe.prototype.cfop = function () {
  this.temp = this._extract(/<cfop>(.+?)<\/cfop>/i)
  return this
}

NFe.prototype.icms = function () {
  this.temp = this._extract(/<icms>(.+?)<\/icms>/i) ||
            this._extract(/<icmstot>(.+?)<\/icmstot>/i) ||
            this._extract(/<vicms>(.+?)<\/vicms>/i)
  return this
}

NFe.prototype.icmsst = function () {
  this.temp = this._extract(/<vicmsst>(.+?)<\/vicmsst>/i) ||
            this._extract(/<vst>(.+?)<\/vst>/i)
  return this
}

NFe.prototype.ipi = function () {
  this.temp = this._extract(/<ipi>(.+?)<\/ipi>/i) ||
            this._extract(/<vipi>(.+?)<\/vipi>/i)
  return this
}

NFe.prototype.cofins = function () {
  this.temp = this._extract(/<cofins>(.+?)<\/cofins>/i) ||
            this._extract(/<vcofins>(.+?)<\/vcofins>/i)
  return this
}

NFe.prototype.pis = function () {
  this.temp = this._extract(/<pis>(.+?)<\/pis>/i) ||
            this._extract(/<vpis>(.+?)<\/vpis>/i)
  return this
}

NFe.prototype.informacoes = function () {
  this.temp = this._extract(/<ide>(.+?)<\/ide>/i)
  return this
}

NFe.prototype.dataEmissao = function () {
  this.temp = this._extract(/<d.+?emi>(.+?)<\/d.+?emi>/i)
  return this
}

NFe.prototype.nfNum = function () {
  this.temp = this._extract(/<nnf>(.+?)<\/nnf>/i)
  return this
}

NFe.prototype.naturezaOperacao = function () {
  this.temp = this._extract(/<natop>(.+?)<\/natop>/i)
  return this
}

NFe.prototype.cnpj = function () {
  this.temp = this._extract(/<cnpj>(.+?)<\/cnpj>/i)
  return this
}

NFe.prototype.cep = function () {
  this.temp = this._extract(/<cep>(.+?)<\/cep>/i)
  return this
}

NFe.prototype.ie = function () {
  this.temp = this._extract(/<ie>(.+?)<\/ie>/i)
  return this
}

NFe.prototype.nome = function () {
  this.temp = this._extract(/<xnome>(.+?)<\/xnome>/i)
  return this
}

NFe.prototype.fantasia = function () {
  this.temp = this._extract(/<xfant>(.+?)<\/xfant>/i)
  return this
}

NFe.prototype.descricao = function () {
  this.temp = this._extract(/<xprod>(.+?)<\/xprod>/i)
  return this
}

NFe.prototype.codigo = function () {
  this.temp = this._extract(/<cprod>(.+?)<\/cprod>/i)
  return this
}

NFe.prototype.quantidade = function () {
  this.temp = this._extract(/<qcom>(.+?)<\/qcom>/i)
  return this
}

NFe.prototype.baseCalculo = function () {
  this.temp = this._extract(/<vbc>(.+?)<\/vbc>/i)
  return this
}

NFe.prototype.baseCalculoST = function () {
  this.temp = this._extract(/<vbcst>(.+?)<\/vbcst>/i)
  return this
}

NFe.prototype.valor = function () {
  this.temp = this._extract(/<vprod>(.+?)<\/vprod>/i) ||
            this._extract(/<vicms>(.+?)<\/vicms>/i) ||
            this._extract(/<vipi>(.+?)<\/vipi>/i) ||
            this._extract(/<vcofins>(.+?)<\/vcofins>/i) ||
            this._extract(/<vpis>(.+?)<\/vpis>/i) ||
            this._extract(/<vdup>(.+?)<\/vdup>/i) ||
            this._extract(/<vorig>(.+?)<\/vorig>/i)
  return this
}

NFe.prototype.valorUnidade = function () {
  this.temp = this._extract(/<vuncom>(.+?)<\/vuncom>/i)
  return this
}

NFe.prototype.valorFrete = function () {
  this.temp = this._extract(/<vfrete>(.+?)<\/vfrete>/i)
  return this
}

NFe.prototype.total = function () {
  this.temp = this._extract(/<total>(.+?)<\/total>/i)
  return this
}

NFe.prototype.valorNf = function () {
  this.temp = this._extract(/<vnf>(.+?)<\/vnf>/i)
  return this
}

NFe.prototype.frete = function () {
  this.temp = this._extract(/<vfrete>(.+?)<\/vfrete>/i)
  return this
}

NFe.prototype.informacoesProt = function () {
  this.temp = this._extract(/<infprot>(.+?)<\/infprot>/i)
  return this
}

NFe.prototype.chaveNFe = function () {
  this.temp = this._extract(/<chnfe>(.+?)<\/chnfe>/i)
  return this
}

NFe.prototype.count = function () {
  this.temp = typeof this.temp === 'string' ? 0 : this.temp.length
  return this
}

NFe.prototype.toNumber = function () {
  this.temp = Number(this.temp)
  return this
}

NFe.prototype.toDate = function () {
  this.temp = new Date(this.temp)
  return this
}

NFe.prototype.toArray = function () {
  if (this.temp instanceof Array) {
    this.temp = this.temp.map(el => {
      return new NFe(el)
    })
  } else {
    this.temp = new Array(new NFe(this.temp))
  }

  return this
}

NFe.prototype.each = function (cb) {
  this.temp.forEach((el, i) => {
    cb(new NFe(el), i)
  })
  this.temp = this.xml
}

NFe.prototype.map = function (cb) {
  const tempArray = this.toArray().done()

  return Array.prototype.map.call(tempArray, cb)
}

NFe.prototype.reduce = function (cb, initValue) {
  const tempArray = this.toArray().done()

  return Array.prototype.reduce.call(tempArray, cb, initValue)
}

NFe.prototype.filter = function (cb) {
  const tempArray = this.toArray().done()

  return Array.prototype.filter.call(tempArray, cb)
}

module.exports = NFe
