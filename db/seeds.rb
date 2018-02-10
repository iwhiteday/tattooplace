[
  { name: 'Реализм' },
  { name: 'Графика' },
  { name: 'Нео-трад' },
  { name: 'Олд скул' },
  { name: 'Традиционная' }
].each { |style_seed| Style.where(name: style_seed[:name]).first_or_create! }