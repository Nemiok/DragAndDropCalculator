const INTEGER_FORMATTER = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
})

export const formatOperand = (operand: string | null | undefined) => {
  let integer, decimal
  if (operand !== null && operand !== undefined) {
    [integer, decimal] = operand.split(".")
  }

  if (decimal == null && operand !== undefined) return INTEGER_FORMATTER.format(Number(integer))
  return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`
}