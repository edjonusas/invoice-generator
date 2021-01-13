<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="5" sm="6">
          <v-text-field
            v-model="documentName.value"
            :label="documentName.label"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="documentNr.value"
            :label="documentNr.label"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="documentDate.value"
            :label="documentDate.label"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="seller.value"
            :label="seller.label"
            clearable
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="buyer.value"
            :label="buyer.label"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      seller: {
        value: '',
        label: 'Pardavėjas',
      },

      buyer: {
        value: '',
        label: 'Pirkėjas',
      },
    }
  },
  mounted() {
    const data = new Date() // today, now
    this.documentDate.value = data.toISOString().slice(0, 10) // YYYY-MM-DD
    this.documentNr.value =
      'Serija JUV Nr. ' + data.toISOString().slice(0, 10).replaceAll('-', '')
  },
}
</script>
