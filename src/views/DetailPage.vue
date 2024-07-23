<template>
  <AppPage title="Detail Transaksi">
    <b-card>
      <b-card-body>
        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Nomor Rekening</b-col>
          <b-col>{{ transaction?.accountNumber }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Tipe Transaksi</b-col>
          <b-col>{{ transaction?.transactionType }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Deskripsi</b-col>
          <b-col>{{ transaction?.description }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Bank Tujuan</b-col>
          <b-col>{{ transaction?.destinationBank }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Kode Bank Tujuan</b-col>
          <b-col>{{ transaction?.destinationBankCode }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Biaya Admin</b-col>
          <b-col>{{ transaction?.adminFee }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Jumlah Total</b-col>
          <b-col>{{ transaction?.totalAmount }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Tanggal</b-col>
          <b-col>{{ transaction?.date }}</b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col cols="2" class="font-weight-bold">Status</b-col>
          <b-col>{{ transaction?.status }}</b-col>
        </b-row>
        <div class="d-flex justify-content-end">
          <b-button variant="secondary" :to="{name: 'transaction-page'}">Kembali</b-button>
        </div>
      </b-card-body>
    </b-card>
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage.vue";
import { data } from "@/views/transaction";

export default {
  name: "DetailPage",
  components: {AppPage},
  data() {
    return {
      transaction: null
    }
  },
  computed: {
    transactionId() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.transaction = data.transactions.find((transaction) => Number(transaction.id) === Number(this.$route.params.id));
    console.log(this.transaction)
  }
}
</script>