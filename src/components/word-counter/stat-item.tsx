type StatItemProps = {
  value: number
  label: string
}

const StatItem = (props: StatItemProps) => {
  const { value, label } = props

  return (
    <div className='h-24 w-full rounded-lg border p-3'>
      <div className='text-2xl font-bold'>{value}</div>
      <div className='text-xs font-bold text-muted-foreground'>{label}</div>
    </div>
  )
}

export default StatItem
