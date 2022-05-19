<template>
  <div>
    <CRow class="ml-2 mt-n2 d-flex" alignVertical="center">
      <CButton @click="modalAddOn" size="sm" :color="plusColor" shape="pill">
        <CIcon class="text-white" name="cilPlus" :height="35" size="xl" />
      </CButton>
      <h6 class="ml-1 mt-1">Nouveau Client</h6>
    </CRow>
    <!-- Modal for add new entities -->
    <CModal
      size="lg"
      :title="modalTitle"
      :color="plusColor"
      :show.sync="modalAdd"
      :footer="false"
      class=" modal-dialog-scrollable"
    >
      <PopUpClient
        ref="pop"
        :modalType="modalType"
        :btnState="btnStateAdd"
        @load-list-client="loadListClient"
        @load-list-ste="loadListSte"
        :formValues="dataToEdit"
        :selectOption="selectOption"
      ></PopUpClient>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3">
          <CButton @click="modalAdd = false" class="mx-1" color="light">
            Cancel
          </CButton>
          <CButton
            class="mx-1"
            @click="PostNewClient"
            :color="btnStateAdd.state ? plusColor : 'light'"
          >
            Add
          </CButton>
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import PopUpClient from "./PopUpClient";
export default {
  name: "SHome",
  props: {
    plusColor: {
      type: String,
      default: "info",
    },
    modalTitle: {
      type: String,
      default: "Nouveau client",
    },
    modalType: {
      type: Boolean,
      default: true,
    },
    selectOption: {
      type: Array,
      default: function () {
        return {};
      },
    },
  },
  components: { PopUpClient },
  data() {
    return { modalAdd: false, btnStateAdd: { state: false }, dataToEdit: {} };
  },
  methods: {
    loadStes() {
      this.$refs.pop.LoadSte();
      console.log("log");
    },
    modalAddOn(datas) {
      this.modalAdd = true;
      this.dataToEdit = datas;
    },
    EditeEntities() {
      if (this.btnStateAdd.state) {
        this.modalAdd = false;
        this.$refs.pop.EditProject();
      }
    },
    PostNewClient() {
      if (this.btnStateAdd.state) {
        this.modalAdd = false;
        this.$refs.pop.PostNewClient();
      }
    },
    loadListClient() {
      this.$emit("load-list-client");
    },
    loadListSte() {
      this.$emit("load-list-ste");
    },
  },
};
</script>

<style lang="scss"></style>
