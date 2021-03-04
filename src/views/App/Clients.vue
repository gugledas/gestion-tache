<template>
  <div>
    <AddNew
      plusColor="info"
      ref="addClient"
      @load-list-client="loadListClient"
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
      @load-list-ste="loadListSte"
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
  },
  methods: {
    //données pour l'édition d'une société
    DataToEditSte(datas) {
      console.log("object Sté :", datas);
      this.dataToEdit = datas;
      this.$refs.addSte.modalAddOn(datas);
    },

    //données pour l'édition d'une société
    DataToEdit(datas) {
      console.log("object :", datas);
      this.dataToEdit = datas;
      this.$refs.addClient.modalAddOn(datas);
    },

    //chargement des clients en BD
    LoadClient() {
      this.cisloading = true;
      SelectDb.selectClient(this.client).then(response => {
        this.itemsClient = response;
        this.cisloading = false;
      });
    },
    // Request for Loading sociéte  data on DB
    LoadSte() {
      this.sisloading = true;
      SelectDb.selectClient(this.ste).then(response => {
        console.log("steList :", response);

        this.itemsSte = response;
        this.sisloading = false;
      });
    },
    loadListClient() {
      this.LoadClient();
    },
    loadListSte() {
      this.LoadSte();
    }
  }
};
</script>

<style lang="scss"></style>
