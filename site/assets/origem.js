/*
 * Origem dos contatos (fase 1 do CRM das quatro marcas).
 *
 * Todo clique que abre o WhatsApp ganha um código curto no fim da mensagem,
 * por exemplo "(cód. SA-7K2Q)". O código liga a conversa que chega no WhatsApp
 * à visita que a gerou: página, campanha do anúncio (utm_*), gclid e de onde a
 * pessoa veio. Nada pessoal vai no código nem no registro.
 *
 * O registro do clique sai por dois caminhos, os dois opcionais:
 * - um evento `whatsapp_codigo` no GA4, se o gtag estiver carregado;
 * - um POST por sendBeacon para o CRM, se o atributo `data-crm` da tag
 *   <script> tiver um endereço. Vazio, o código vai só na mensagem.
 *
 * É a mesma lógica do `lib/origem.ts` dos outros três sites, em JS puro.
 * Medir nunca pode custar um lead: qualquer falha aqui deixa o link seguir.
 */
(function () {
  var PREFIXO = "SA";
  var CHAVE_CODIGO = "origem:codigo";
  var CHAVE_TOQUE = "origem:toque";
  var VALIDADE_TOQUE_MS = 30 * 24 * 60 * 60 * 1000;
  var ALFABETO = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var PARAMETROS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "fbclid"];
  var RE_CODIGO = /\s*\(c[óo]d\. [A-Z]{2}-[A-Z0-9]{4}\)\s*$/;
  var RE_WHATSAPP = /^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i;
  var script = document.currentScript;
  var DESTINO_CRM = (script && script.getAttribute("data-crm")) || "";

  function ler(armazem, chave) {
    try { return armazem.getItem(chave); } catch (e) { return null; }
  }
  function gravar(armazem, chave, valor) {
    try { armazem.setItem(chave, valor); } catch (e) { /* armazenamento bloqueado */ }
  }

  function codigoDaVisita() {
    var salvo = ler(window.sessionStorage, CHAVE_CODIGO);
    if (salvo && salvo.indexOf(PREFIXO + "-") === 0) return salvo;
    var bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
    var corpo = "";
    for (var i = 0; i < bytes.length; i++) corpo += ALFABETO[bytes[i] % ALFABETO.length];
    var codigo = PREFIXO + "-" + corpo;
    gravar(window.sessionStorage, CHAVE_CODIGO, codigo);
    return codigo;
  }

  function registrarToque() {
    var url = new URL(window.location.href);
    var novo = { em: Date.now(), entrada: url.pathname };
    var temCampanha = false;
    PARAMETROS.forEach(function (p) {
      var v = url.searchParams.get(p);
      if (v) { novo[p] = v.slice(0, 200); temCampanha = true; }
    });
    var referencia = "";
    try {
      if (document.referrer) {
        var ref = new URL(document.referrer);
        if (ref.hostname !== url.hostname) referencia = ref.hostname;
      }
    } catch (e) { /* referência inválida */ }
    if (referencia) novo.referencia = referencia;
    if (temCampanha || referencia) gravar(window.localStorage, CHAVE_TOQUE, JSON.stringify(novo));
  }

  function toqueAtual() {
    var bruto = ler(window.localStorage, CHAVE_TOQUE);
    if (!bruto) return null;
    try {
      var toque = JSON.parse(bruto);
      return Date.now() - toque.em < VALIDADE_TOQUE_MS ? toque : null;
    } catch (e) { return null; }
  }

  function comCodigo(link) {
    if (!RE_WHATSAPP.test(link)) return link;
    try {
      var url = new URL(link);
      var codigo = codigoDaVisita();
      var texto = (url.searchParams.get("text") || "").replace(RE_CODIGO, "");
      url.searchParams.set("text", texto ? texto + "\n\n(cód. " + codigo + ")" : "Olá! (cód. " + codigo + ")");
      return url.toString();
    } catch (e) { return link; }
  }

  function registrarClique(link) {
    try {
      var codigo = codigoDaVisita();
      var toque = toqueAtual() || {};
      var dados = { codigo: codigo, marca: PREFIXO, pagina: window.location.pathname, destino: new URL(link).pathname.replace("/", "") };
      for (var k in toque) if (Object.prototype.hasOwnProperty.call(toque, k)) dados[k] = toque[k];
      dados.em = new Date().toISOString();

      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_codigo", {
          codigo: codigo,
          marca: PREFIXO,
          pagina: dados.pagina,
          origem_campanha: toque.utm_campaign || "",
          origem_fonte: toque.utm_source || toque.referencia || "",
          transport_type: "beacon"
        });
      }
      if (DESTINO_CRM && typeof navigator.sendBeacon === "function") {
        navigator.sendBeacon(DESTINO_CRM, new Blob([JSON.stringify(dados)], { type: "text/plain" }));
      }
    } catch (e) { /* medir nunca pode custar um lead */ }
  }

  try { registrarToque(); } catch (e) { /* segue sem origem */ }

  // Fase de captura em window: roda antes do ouvinte de conversões do document.
  window.addEventListener("click", function (evento) {
    var alvo = evento.target && evento.target.closest ? evento.target.closest("a[href]") : null;
    if (!alvo || !RE_WHATSAPP.test(alvo.href)) return;
    var link = comCodigo(alvo.href);
    if (link !== alvo.href) alvo.href = link;
    registrarClique(link);
  }, true);
})();
