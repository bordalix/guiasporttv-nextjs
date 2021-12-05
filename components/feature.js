export function Feature({ feature }) {
  const { channel, day, description, sport, title } = feature
  const { emissionType, isNow, init, finish } = feature
  // classes for feature div
  let divClasses = `event ${emissionType}`
  if (isNow) divClasses +=' now'
  // classes for channel span
  const channelClasses = `channel ${channel.replace(/\s/g,'_')}`
  return (
    <div className={divClasses}>
      <p>{description}</p>
      <p>
        <span className={channelClasses}>
          {channel}
        </span>
        <span>{title}</span>
        <span>{sport}</span>
      </p>
      <p>
        <span>{day}</span>
        <span>{init}</span>
        <span>{finish}</span>
        {isNow &&
          <span className="now">Agora</span>
        }
        {emissionType === 'DIRETO' &&
          <span className="live">Direto</span>
        }
      </p>
    </div>
  )
}
