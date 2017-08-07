/**
 * Created by vinic on 16/02/2017.
 */

class NFe {
    constructor(xml) {
        this.xml = xml.replace(/\n/gi, '');
        this.temp = xml.replace(/\n/gi, '');
    }

    _extract(regex) {
        const result = regex.exec(this.temp);
        return result ? result[1] : 0;
    }

    _extractGlobal(regex) {
        let result;
        const arr = [];
        for (result = regex.exec(this.temp); regex.lastIndex !== 0; result = regex.exec(this.temp)) {
            arr.push(result[1]);
        }
        return arr.length ? arr : arr.length;
    }

    select(num) {
        this.temp = this.temp[num];
        return this;
    }

    done() {
        const resp = this.temp;
        this.temp = this.xml;
        return resp;
    }

    destinatario() {
        this.temp = this._extract(/<dest>(.+?)<\/dest>/i);
        return this;
    }

    emitente() {
        this.temp = this._extract(/<emit>(.+?)<\/emit>/i);
        return this;
    }

    endereco() {
        this.temp = this._extract(/<enderemit>(.+?)<\/enderemit>/i)
            || this._extract(/<enderdest>(.+?)<\/enderdest>/i);
        return this;
    }

    uf() {
        this.temp = this._extract(/<uf>(.+?)<\/uf>/i);
        return this;
    }

    inscricaoEstadualST() {
        this.temp = this._extract(/<iest>(.+?)<\/iest>/i);
        return this;
    }

    produtos() {
        this.temp = this._extractGlobal(/<det.+?>(.+?)<\/det>/gi);
        // || this._extract(/<vprod>(.+?)<\/vprod>/i);
        return this;
    }

    cobranca() {
        this.temp = this._extract(/<cobr>(.+?)<\/cobr>/i);
        return this;
    }

    fatura() {
        this.temp = this._extract(/<fat>(.+?)<\/fat>/i);
        return this;
    }

    numFatura() {
        this.temp = this._extract(/<nfat>(.+?)<\/nfat>/i);
        return this;
    }

    valorLiquido() {
        this.temp = this._extract(/<vliq>(.+?)<\/vliq>/i);
        return this;
    }

    duplicatas() {
        this.temp = this._extractGlobal(/<dup>(.+?)<\/dup>/gi);
        return this;
    }

    dataVencimento() {
        this.temp = this._extract(/<dvenc>(.+?)<\/dvenc>/i);
        return this;
    }

    numDuplicata() {
        this.temp = this._extract(/<ndup>(.+?)<\/ndup>/i);
        return this;
    }

    cfop() {
        this.temp = this._extract(/<cfop>(.+?)<\/cfop>/i);
        return this;
    }

    icms() {
        this.temp = this._extract(/<icms>(.+?)<\/icms>/i)
            || this._extract(/<icmstot>(.+?)<\/icmstot>/i)
            || this._extract(/<vicms>(.+?)<\/vicms>/i);
        return this;
    }

    icmsst() {
        this.temp = this._extract(/<vicmsst>(.+?)<\/vicmsst>/i)
            || this._extract(/<vst>(.+?)<\/vst>/i);
        return this;
    }

    ipi() {
        this.temp = this._extract(/<ipi>(.+?)<\/ipi>/i)
            || this._extract(/<vipi>(.+?)<\/vipi>/i);
        return this;
    }

    cofins() {
        this.temp = this._extract(/<cofins>(.+?)<\/cofins>/i)
            || this._extract(/<vcofins>(.+?)<\/vcofins>/i);
        return this;
    }

    pis() {
        this.temp = this._extract(/<pis>(.+?)<\/pis>/i)
            || this._extract(/<vpis>(.+?)<\/vpis>/i);
        return this;
    }

    informacoes() {
        this.temp = this._extract(/<ide>(.+?)<\/ide>/i);
        return this;
    }

    dataEmissao() {
        this.temp = this._extract(/<d.+?emi>(.+?)<\/d.+?emi>/i);
        return this;
    }

    nfNum() {
        this.temp = this._extract(/<nnf>(.+?)<\/nnf>/i);
        return this;
    }

    naturezaOperacao() {
        this.temp = this._extract(/<natop>(.+?)<\/natop>/i);
        return this;
    }

    cnpj() {
        this.temp = this._extract(/<cnpj>(.+?)<\/cnpj>/i);
        return this;
    }

    cep() {
        this.temp = this._extract(/<cep>(.+?)<\/cep>/i);
        return this;
    }

    ie() {
        this.temp = this._extract(/<ie>(.+?)<\/ie>/i);
        return this;
    }

    nome() {
        this.temp = this._extract(/<xnome>(.+?)<\/xnome>/i);
        return this;
    }

    fantasia() {
        this.temp = this._extract(/<xfant>(.+?)<\/xfant>/i);
        return this;
    }

    descricao() {
        this.temp = this._extract(/<xprod>(.+?)<\/xprod>/i);
        return this;
    }

    codigo() {
        this.temp = this._extract(/<cprod>(.+?)<\/cprod>/i);
        return this;
    }

    quantidade() {
        this.temp = this._extract(/<qcom>(.+?)<\/qcom>/i);
        return this;
    }

    baseCalculo() {
        this.temp = this._extract(/<vbc>(.+?)<\/vbc>/i);
        return this;
    }

    baseCalculoST() {
        this.temp = this._extract(/<vbcst>(.+?)<\/vbcst>/i);
        return this;
    }

    valor() {
        this.temp = this._extract(/<vprod>(.+?)<\/vprod>/i)
            || this._extract(/<vicms>(.+?)<\/vicms>/i)
            || this._extract(/<vipi>(.+?)<\/vipi>/i)
            || this._extract(/<vcofins>(.+?)<\/vcofins>/i)
            || this._extract(/<vpis>(.+?)<\/vpis>/i)
            || this._extract(/<vdup>(.+?)<\/vdup>/i)
            || this._extract(/<vorig>(.+?)<\/vorig>/i);
        return this;
    }

    valorUnidade() {
        this.temp = this._extract(/<vuncom>(.+?)<\/vuncom>/i);
        return this;
    }

    valorFrete() {
        this.temp = this._extract(/<vfrete>(.+?)<\/vfrete>/i);
        return this;
    }

    total() {
        this.temp = this._extract(/<total>(.+?)<\/total>/i);
        return this;
    }

    valorNf() {
        this.temp = this._extract(/<vnf>(.+?)<\/vnf>/i);
        return this;
    }

    frete() {
        this.temp = this._extract(/<vfrete>(.+?)<\/vfrete>/i);
        return this;
    }

    informacoesProt(){
	this.temp = this._extract(/<infprot>(.+?)<\/infprot>/i);
        return this;
    }

    chaveNFe() {
	this.temp = this._extract(/<chnfe>(.+?)<\/chnfe>/i);
        return this;
    }

    count() {
        this.temp = typeof this.temp === String ? 0 : this.temp.length;
        return this;
    }

    toNumber() {
        this.temp = Number(this.temp);
        return this;
    }

    toDate() {
        this.temp = new Date(this.temp);
        return this;
    }

    each(cb) {
        this.temp.forEach((el, i) => {
            cb(new NFe(el), i);
        });
        this.temp = this.xml;
    }

    toArray() {
        if (this.temp instanceof Array) {
            this.temp = this.temp.map(el => {
                return new NFe(el);
            });
        } else {
            this.temp = new Array(new NFe(this.temp));
        }

        return this;
    }
}

module.exports = NFe;
