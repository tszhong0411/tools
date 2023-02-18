import ReactSelect, { Props } from 'react-select'

type SelectProps = Props

const Select = (props: SelectProps) => {
  const { classNames, ...rest } = props

  return (
    <ReactSelect
      classNames={{
        control: () =>
          'flex items-center justify-between outline-none transition-colors duration-300 border-accent-2 border hover:border-accent-3 rounded-lg relative',
        valueContainer: () => 'px-2 py-0.5',
        indicatorsContainer: () => '[&>div]:p-2',
        indicatorSeparator: () => 'w-px bg-accent-2 my-2 self-stretch',
        option: () => 'p-2 hover:bg-theme-4 active:bg-theme-5',
        menu: () =>
          'border border-accent-2 rounded-lg absolute left-0 top-[calc(100%+12px)] bg-hong-bg',
        ...classNames,
      }}
      unstyled
      {...rest}
    />
  )
}

export default Select
