<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="5" sm="6">
          <v-text-field
            v-model="documentInfo.documentName.value"
            :label="documentInfo.documentName.label"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="documentInfo.documentNr.value"
            :label="documentInfo.documentNr.label"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="documentInfo.documentDate.value"
            :label="documentInfo.documentDate.label"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="6">
          <h3>Pardavėjas</h3>
          <div v-for="(input, index) in sellerInfo" :key="index" class="d-flex">
            <v-text-field
              v-model="input.value"
              :label="input.label"
              clearable
            ></v-text-field>
            <v-icon medium @click="deleteSellerInfo(index)"
              >mdi-delete-outline
            </v-icon>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="sellerInput.label"
              label="Kategorija"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="sellerInput.value"
              label="Tekstas"
              clearable
            ></v-text-field>
            <v-icon medium @click="addSellerInfo">mdi-plus</v-icon>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
          <h3>Pirkėjas</h3>
          <div v-for="(input, index) in buyerInfo" :key="index" class="d-flex">
            <v-text-field
              v-model="input.value"
              :label="input.label"
              clearable
            ></v-text-field>
            <v-icon medium @click="deleteBuyerInfo(index)"
              >mdi-delete-outline
            </v-icon>
          </div>
          <div class="d-flex">
            <v-text-field
              v-model="buyerInput.label"
              label="Kategorija"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="buyerInput.value"
              label="Tekstas"
              clearable
            ></v-text-field>
            <v-icon medium @click="addBuyerInfo">mdi-plus</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentInfo: {
        documentName: {
          value: 'SĄSKAITA FAKTŪRA',
          label: 'Dokumento pavadinimas',
        },
        documentNr: {
          value: '',
          label: 'Serijos Nr.',
        },
        documentDate: {
          value: '',
          label: 'Data',
        },
      },
      sellerInfo: [
        {
          value: 'Vardas Pavarde',
          label: 'Pardavėjas',
        },
        {
          value: 'AB "SwedBank"',
          label: 'Bankas',
        },
        {
          value: 'LT000000000000000000',
          label: 'A.s Nr.',
        },
      ],
      sellerInput: {
        value: '',
        label: '',
      },
      buyerInfo: [
        {
          value: 'Vardas Pavarde',
          label: 'Pirkėjas',
        },
        {
          value: '',
          label: 'In v. nr.',
        },
        {
          value: '',
          label: 'Tel.',
        },
      ],
      buyerInput: {
        value: '',
        label: '',
      },
    }
  },
  mounted() {
    const data = new Date() // today, now
    this.documentInfo.documentDate.value = data.toISOString().slice(0, 10) // YYYY-MM-DD
    this.documentInfo.documentNr.value =
      'Serija JUV Nr. ' + data.toISOString().slice(0, 10).replaceAll('-', '')
  },
  methods: {
    addSellerInfo() {
      this.sellerInfo.push(this.sellerInput)
      this.sellerInput = {
        value: '',
        label: '',
      }
    },
    addBuyerInfo() {
      this.buyerInfo.push(this.buyerInput)
      this.buyerInput = {
        value: '',
        label: '',
      }
    },
    deleteSellerInfo(index) {
      this.sellerInfo.splice(index, 1)
    },
    deleteBuyerInfo(index) {
      this.buyerInfo.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
d-flex {
  display: flex;
  flex-direction: row;
}
</style>
