<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Eil Nr.</th>
            <th class="text-left">Prekė / Paslauga</th>
            <th class="text-left">Kiekis</th>
            <th class="text-left">Suma, EUR</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.price }}</td>
            <td>
              <v-icon medium @click="deleteLine(index)"
                >mdi-delete-outline
              </v-icon>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <v-text-field
                v-model="inputs.name"
                label="Prekė/Paslauga"
                clearable
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="inputs.amount"
                label="Kiekis"
                clearable
              ></v-text-field>
            </td>
            <td class="d-flex">
              <v-text-field
                v-model="inputs.price"
                label="Suma"
                clearable
              ></v-text-field>
            </td>
            <td><v-icon medium @click="addLine">mdi-plus</v-icon></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row justify="end">
      <div class="pa-4">Bendra suma eur: {{ priceSum }}</div>
    </v-row>
    <v-row justify="end">
      <sum-to-string :sum="priceSum" />
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      desserts: [
        {
          name: 'Ziedas',
          amount: 1,
          price: 100,
        },
        {
          name: 'Auskarai',
          amount: 2,
          price: 140,
        },
        {
          name: 'Apyranke',
          amount: 1,
          price: 90,
        },
      ],
      inputs: {
        name: '',
        amount: '',
        price: '',
      },
    }
  },
  computed: {
    priceSum() {
      let sum = 0
      this.desserts.map((x) => (sum += Number(x.price)))
      return sum
    },
  },
  methods: {
    addLine() {
      this.desserts.push(this.inputs)
      this.inputs = {
        name: '',
        amount: '',
        price: '',
      }
    },
    deleteLine(index) {
      this.desserts.splice(index, 1)
    },
  },
}
</script>
