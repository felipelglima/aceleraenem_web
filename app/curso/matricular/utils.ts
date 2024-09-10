const unmaskData = (mobile: string) => mobile.replace(/[^0-9]/g, "")
const utils = {
  repeatedNumbers: /(.)\1{10}/,
  validateCpfDigit: (cpf: string, number: number) => {
    let sum = 0

    for (let i = 1; i <= number - 2; i++)
      sum += Number(cpf?.substring(i - 1, i)) * (number - i)

    let rest = (sum * 10) % 11

    if (rest === 10 || rest === 11) rest = 0

    if (rest !== Number(cpf?.substring(number - 2, number - 1))) return false

    return cpf
  },
  parseMobile: (mobile: string) => {
    const parseMobileRegex = /^0?(55)?0?(\d{2})?(9?\d{8})$/g
    const numberParsed = [...mobile.matchAll(parseMobileRegex)][0]

    return numberParsed
  },
  mobileConsolidation: /^55\d{2}9?\d{8}$/g,
}

export function validateCPF(input: string) {
  const cpf = unmaskData(input)

  if (cpf.length !== 11 || utils.repeatedNumbers.test(cpf)) {
    return false
  }

  const secondToLastDigit = utils.validateCpfDigit(cpf, 11)
  const lastDigit = utils.validateCpfDigit(cpf, 12)
  const validCPF = secondToLastDigit && lastDigit

  if (!validCPF) {
    return false
  }

  return validCPF
}

export function validatePhone(input: string) {
  let mobile = unmaskData(input)

  if (mobile.length < 10 || mobile.length > 15) {
    return false
  }

  const mobileParsed = utils.parseMobile(mobile)

  mobile = mobileParsed.slice(1, 4).join("")

  if (mobileParsed[1] === undefined) mobile = `55${mobile}`

  try {
    utils.mobileConsolidation.test(mobile)
    return true
  } catch (error) {
    return false
  }
}
