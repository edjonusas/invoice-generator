<template>
  <div class="pa-4">(Suma žodžiais) {{ amountInWords }} eur.</div>
</template>

<script>
export default {
  props: {
    sum: {
      type: Number,
      required: true,
    },
  },
  computed: {
    amountInWords() {
      if (String(this.sum).length === 1) {
        return this.oneDigit(this.sum)
      }
      if (String(this.sum).length === 2) {
        if (this.sum >= 10 && this.sum <= 19) {
          return this.twoDigitsTill19(this.sum)
        }
        if (this.sum >= 20 && this.sum <= 99) {
          const sumString = String(this.sum)
          const fistDigit = this.twoDigitsDozens(sumString[0])
          const secondDigit =
            sumString[1] === '0' ? '' : this.oneDigit(sumString[1])
          return fistDigit + ' ' + secondDigit
        }
      }
      if (String(this.sum).length === 3) {
        const sumString = String(this.sum)
        const fistDigit = this.treeDigitsHundreds(sumString[0])
        const secondDigit = this.twoDigitsDozens(sumString[1])
        const thirdDigit =
          sumString[2] === '0' ? '' : this.oneDigit(sumString[2])
        return fistDigit + ' ' + secondDigit + ' ' + thirdDigit
      }
      if (String(this.sum).length === 4) {
        const sumString = String(this.sum)
        const fistDigit = this.treeDigitsHundreds(sumString[0])
        const secondDigit = this.twoDigitsDozens(sumString[1])
        const thirdDigit =
          sumString[2] === '0' ? '' : this.oneDigit(sumString[2])
        return 'keturi'
      }
      return 'netinka'
    },
  },
  methods: {
    oneDigit(digit) {
      switch (Number(digit)) {
        case 0:
          return 'nulis'
        case 1:
          return 'vienas'
        case 2:
          return 'du'
        case 3:
          return 'trys'
        case 4:
          return 'keturi'
        case 5:
          return 'penki'
        case 6:
          return 'šeši'
        case 7:
          return 'septyni'
        case 8:
          return 'aštuoni'
        case 9:
          return 'devyni'
      }
    },
    twoDigitsTill19(digit) {
      switch (Number(digit)) {
        case 10:
          return 'dešimt'
        case 11:
          return 'venuolika'
        case 12:
          return 'dvylika'
        case 13:
          return 'trylika'
        case 14:
          return 'keturiolika'
        case 15:
          return 'penkiolika'
        case 16:
          return 'šešiolika'
        case 17:
          return 'septiniolika'
        case 18:
          return 'aštoniolika'
        case 19:
          return 'deviniolika'
      }
    },

    twoDigitsDozens(digit) {
      switch (Number(digit)) {
        case 2:
          return 'dvidešimt'
        case 3:
          return 'trisdešimt'
        case 4:
          return 'keturiasdešimt'
        case 5:
          return 'penkiasdešimt'
        case 6:
          return 'šešiasdešimt'
        case 7:
          return 'septyniasdešimt'
        case 8:
          return 'aštuoniasdešimt'
        case 9:
          return 'devyniasdešimt'
      }
    },
    treeDigitsHundreds(digit) {
      switch (Number(digit)) {
        case 1:
          return 'šimtas'
        case 2:
          return 'du šimtai'
        case 3:
          return 'trys šimtai'
        case 4:
          return 'keturi šimtai'
        case 5:
          return 'penki šimtai'
        case 6:
          return 'šeši šimtai'
        case 7:
          return 'septyni šimtai'
        case 8:
          return 'aštuoni šimtai'
        case 9:
          return 'devyni šimtai'
      }
    },
  },
}
</script>
