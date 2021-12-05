export function Feature({ feature }) {
  return (
    <div className={feature.divClasses}>
      <p>{feature.description}</p>
      <p>
        <span className={feature.channelClasses}>
          {feature.channel}
        </span>
        <span>{feature.title}</span>
        <span>{feature.sport}</span>
      </p>
      <p>
        <span>{feature.day}</span>
        <span>{feature.init}</span>
        <span>{feature.finish}</span>
      </p>
    </div>
  )
}
