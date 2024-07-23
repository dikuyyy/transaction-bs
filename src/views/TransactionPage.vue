<template>
  <div>
    <AppPage title="Data Transaksi">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <div class="h5 mx-2" v-b-toggle.accordion-1>Filter</div>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="row">
              <div class="col-6">
                <b-form-group label="Tanggal Awal" label-for="transaction-select">
                  <b-form-datepicker id="example-datepicker" v-model="filter.tanggal_awal"
                                     class="mb-2"></b-form-datepicker>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Tanggal Akhir" label-for="transaction-select">

                  <b-form-datepicker id="example-datepicker" v-model="filter.tanggal_akhir"
                                     class="mb-2"></b-form-datepicker>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <b-form-group label="Tipe Transaksi" label-for="transaction-select">
                  <b-form-select
                      id="transaction-select"
                      class="form-select"
                      :options="transactionTypesOptions"
                      v-model="filter.jenis"
                      placeholder="Pilih Tipe Transaksi"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Nomor Rekening" label-for="transaction-select">
                  <b-form-input v-model="filter.nomor_rekening" placeholder="Nomor Rekening"></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-6">
                <b-form-group label="Status" label-for="transaction-select">
                <b-form-select class="form-select" label-field="Tipe Transaksi" :options="statusTypeOptions"
                               v-model="filter.status"></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="d-flex justify-content-end gap-2">
              <b-button @click="reset()">Reset</b-button>
              <b-button variant="primary" @click="onFilter()">Filter</b-button>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card>
        <b-card-body>
          <b-table striped hover :items="items" :fields="fields" show-empty>
            <template v-slot:cell(action)="data">
              <b-button size="sm" variant="primary" @click="viewDetails(data.item.id)">
                <b-icon icon="eye"></b-icon>
              </b-button>
            </template>
            <template v-slot:empty>
              <b-alert variant="info" show>No data available</b-alert>
            </template>
          </b-table>
        </b-card-body>
      </b-card>
    </AppPage>
  </div>
</template>

<script>
import AppPage from "@/components/AppPage.vue";
import {data, statusTypeOptions, transactionTypes} from "@/views/transaction";
import router from "@/router";

export default {
  components: {AppPage},
  data() {
    return {
      items: [
        ...data.transactions
      ],
      filter: {
        tanggal_awal: null,
        tanggal_akhir: null,
        jenis: '',
        nomor_rekening: '',
        status: ''
      },
      fields: [
        'date', 'accountNumber', 'adminFee', 'totalAmount', 'status', 'action'
      ],
      transactionTypesOptions: transactionTypes,
      statusTypeOptions: statusTypeOptions
    }
  },
  methods: {
    reset() {
      this.filter.tanggal_awal = null;
      this.filter.tanggal_akhir = null;
      this.filter.jenis = '';
      this.filter.nomor_rekening = '';
      this.filter.status = '';
      this.items = data.transactions;
    },
    onFilter() {
      this.items = data.transactions;
      const {tanggal_awal, tanggal_akhir, jenis, nomor_rekening, status} = this.filter;
      const startDate = tanggal_awal ? new Date(tanggal_awal) : null;
      const endDate = tanggal_akhir ? new Date(tanggal_akhir) : null;
      this.items = this.items.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const isWithinDateRange = (!startDate || transactionDate >= startDate) &&
            (!endDate || transactionDate <= endDate);
        const matchesJenis = jenis ? transaction.transactionType.toLowerCase().includes(jenis.toLowerCase()) : true;
        const matchesNomorRekening = nomor_rekening ? transaction.accountNumber.includes(nomor_rekening) : true;
        const matchesStatus = status ? transaction.status.toLowerCase().includes(status.toLowerCase()) : true;

        return isWithinDateRange && matchesJenis && matchesNomorRekening && matchesStatus;
      })
    },
    viewDetails(id) {
      router.push({
        name: 'detail-page',
        params: {
          id
        }
      })
    }
  }
}
</script>