<template>
  <div>
    <AddNew
      plusColor="info"
      ref="addClient"
      :selectOption="selectOption"
      @load-list-client="LoadClient"
    ></AddNew>
    <CRow>
      <CCol class="mt-3 mb-2">
        <ClientList
          :title="'Liste des Clients'"
          :items="itemsClient"
          :isLoading="cisloading"
          :tableFields="fieldsClient"
          @data-to-edite="DataToEdit"
          @suppression-ok="LoadClient"
        ></ClientList>
      </CCol>
    </CRow>

    <AddNew
      plusColor="dark"
      ref="addSte"
      :modalType="false"
      modalTitle="Nouvelle Société"
      @load-list-ste="LoadSte"
      :selectOption="selectOption"
    ></AddNew>

    <CRow>
      <CCol class="mt-3">
        <ClientList
          :title="'Liste des Sociétés'"
          :items="itemsSte"
          :isLoading="sisloading"
          :tableFields="fieldsSte"
          @data-to-edite="DataToEditSte"
          @suppression-ok="LoadSte"
        ></ClientList>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import ClientList from "./client/ClientList";
import SelectDb from "./config/SelectDb";
import AddNew from "./client/AddNew";
export default {
  name: "SHome",
  components: { AddNew, ClientList },
  data() {
    return {
      itemsClient: [],
      itemsSte: [],
      client: "gestion_project_client",
      ste: "gestion_project_societe",
      cisloading: false,
      sisloading: false,
      dataToEdit: {},
      selectOption: [],
      fieldsClient: [
        {
          key: "nom",
          _style: "min-width:200px; ",
          filter: false
        },
        { key: "adresse", _style: "min-width:200px;" },
        { key: "phone", _style: "min-width:200px;" },
        { key: "fonction", _style: "width:600px;" },
        { key: "activity", _style: "width:600px;" }
      ],
      fieldsSte: [
        { key: "nom", _style: "min-width:200px;", filter: false },
        { key: "siteweb", _style: "min-width:200px;" },
        { key: "email", _style: "width:600px;" },
        { key: "activity", _style: "width:600px;" }
      ]
    };
  },
  mounted() {
    this.LoadClient();
    this.LoadSte();
    this.LoadStePopUp();
  },
  methods: {
    // Request for Loading sociéte  data on DB
    LoadStePopUp() {
      this.sisloading = true;
      SelectDb.selectClient("gestion_project_societe").then(response => {
        this.selectOption = response;
        this.sisloading = false;
      });
    },
    //données pour l'édition d'une société
    DataToEditSte(datas) {
      this.dataToEdit = datas;
      this.$refs.addSte.modalAddOn(datas);
    },

    //données pour l'édition d'une société
    DataToEdit(datas) {
      this.dataToEdit = datas;
      this.$refs.addClient.modalAddOn(datas);
    },

    //chargement des clients en BD
    LoadClient() {
      this.cisloading = true;
      SelectDb.selectClients([]).then(response => {
        this.itemsClient = response;
        this.cisloading = false;
      });
    },
    // Request for Loading sociéte  data on DB
    LoadSte() {
      this.sisloading = true;
      SelectDb.selectSte([]).then(response => {
        this.itemsSte = response;
        this.sisloading = false;
        this.LoadStePopUp();
        this.LoadClient();
      });
    }
  }
};
</script>

<style lang="scss"></style>
