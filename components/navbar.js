export function Navbar({ features, setFilter }) {
  const resetOtherSelect = (otherId) => {
    const id = 'sport'
    if (otherId === 'sport') id = 'channel'
    document.getElementById(id).value = 'all'
  }
  const handleChange = ({ target }) => {
    const aux = {}
    if (target.value !== 'all') aux[target.id] = target.value
    setFilter(aux)
    resetOtherSelect(target.id)
  }
  // get array of unique sports
  const sports = features.map(f => f.sport)
    .filter((v, i, a) => a.indexOf(v) === i)
    // get array of unique channels
  const channels = features.map(f => f.channel)
    .filter((v, i, a) => a.indexOf(v) === i)
  return (
    <header>
      <div id="navigation_bar">
        <select id="channel" onChange={handleChange}>
          <option key={-1} value="all">Filtrar por canal</option>
          {channels.sort().map((c, i) => <option key={i}>{c}</option>)}
        </select>
        <select  id="sport" onChange={handleChange}>
          <option key={-1} value="all">Filtrar por desporto</option>
          {sports.sort().map((s, i) => <option key={i}>{s}</option>)}
        </select>
      </div>
    </header>
  )
}
