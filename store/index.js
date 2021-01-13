export const state = () => ({
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
    sellerInfo: [
      {
        seller: {
          value: '',
          label: 'Pardavėjas',
        },
      },
      {
        sellerNr: {
          value: '000000',
          label: 'In v. nr.',
        },
      },
      {
        sellerBankNr: {
          value: 'LT000000000000000000',
          label: 'A.s Nr.',
        },
      },
      {
        sellerBank: {
          value: 'AB "SwedBank"',
          label: 'Bankas',
        },
      },
    ],
  },
})

export const getters = {
  getDocumentInfo: (state) => state.documentInfo,
}
