import { Feature } from './feature'

function filterData(feature, filter) {
  if (!filter) return true
  if (filter.channel) return feature.channel === filter.channel
  if (filter.sport) return feature.sport === filter.sport
  return true
}

function filteredFeatures(features, filter) {
  return features.filter(f => filterData(f, filter))
}

export function Maincontent({ features, filter }) {
  return (
    <div id="main_content">
      {filteredFeatures(features, filter).map((feature, i) => (
        <Feature key={i} feature={feature} />
      ))}
    </div>
  )
}
