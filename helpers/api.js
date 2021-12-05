function apiURL() {
  // calculate and return api url
  const now = new Date();
  now.setDate(now.getDate());
  const d = now.getDate();
  const m = now.getMonth() + 1;
  const y = now.getFullYear();
  const initDate = '?dataInicio=' + d + '%2F' + m + '%2F' + y + '+00:00';
  const endDate = '&dataFim=' + d + '%2F' + m + '%2F' + y + '+23:59';
  const proxy = 'https://corseverywhere.bordalix.workers.dev/?';
  const uri = 'https://www.sporttv.pt/api/channels/epg';
  const channels = '&idCanal=7133,727,728,729,5406,5422,7386';
  const limit = '&numeroRegistos=600';
  return proxy + uri + initDate + endDate + channels + limit;
}

function normalizeData(feature) {
  const end = new Date()
  const now = new Date()
  const start = new Date()
  start.setTime(feature.data)
  end.setTime(feature.data + feature.duracao)
  const isNow = now >= start && now < end
  return {
    channel: feature.canal.nome,
    day: start.toDateString(),
    description: feature.descricao,
    emissionType: feature.tipoEmissao,
    finish: end.toLocaleTimeString('pt-PT'),
    init: start.toLocaleTimeString('pt-PT'),
    isNow,
    sport: feature.modalidade.nomeModalidade,
    title: feature.evento.nome,
  }
}

export async function getFeatures(filter) {
  const res = await fetch(apiURL())
  const features = await res.json()
  return features.map(f => normalizeData(f))
}
