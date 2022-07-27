<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />

    <CHeaderNav>
      <CButton
        @click="loadLastUpdates"
        size="sm"
        variant="ghost"
        class=""
        color="dark"
        v-c-tooltip="{
          content: 'Dernières mises à jours',
          html: true,
          placement: 'bottom-start'
        }"
      >
        <CIcon name="cilEyedropper"> </CIcon>
      </CButton>
      <CButton
        @click="loadTacheEncour"
        size="sm"
        variant="ghost"
        class=""
        color="warning"
        v-c-tooltip="{
          content: 'Afficher les taches encours.',
          html: true,
          placement: 'bottom-start'
        }"
      >
        <CIcon name="cil-settings"> </CIcon>
      </CButton>
      <CButton
        v-c-tooltip="'Mes tâches'"
        size="sm"
        shape=""
        variant="ghost"
        color="primary"
        @click="loadMesTaches"
      >
        <CIcon name="cil-address-book" size="sm" />
      </CButton>
      <CButton
        v-c-tooltip="'Notes administrative'"
        size="sm"
        shape=""
        variant="ghost"
        color="danger"
        @click="loadNoteAdmin"
        class="bouton-note"
        v-if="notebtn"
      >
        <CIcon name="cil-speech" size="sm" />
      </CButton>
    </CHeaderNav>
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>

    <CHeaderNav class="mr-5 d-flex align-items-center ml-sm-auto mt-1">
      <div class="d-flex mx-3 user-space" v-if="currentUser">
        <span><CIcon class="mr-2 mb-1" name="cil-user" size="lg" /></span>
        <span class="logUser">{{ currentUser.name }}</span>
      </div>
      <div>
        <CLink v-c-tooltip="'Log Out'"
          ><CButton size="" shape="pill" color="light" @click="logOut">
            <CIcon name="cil-account-logout" size="sm" /></CButton
        ></CLink>
      </div>
      <AddNewProject></AddNewProject>

      <!-- <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CForm inline class="align-middle">
            <CInput
              class="mr-2 my-0"
              placeholder="Tapez une recherche"
              size="sm"
            />
            <CButton color="light" size="sm">
              Search
            </CButton>
          </CForm>
        </CHeaderNavLink>
      </CHeaderNavItem> -->
    </CHeaderNav>
    <CSubheader class="px-3">
      <!--
      <CBreadcrumbRouter
        class="border-0 mb-0"
        :items="[
          { text: 'Home', to: '/' },
          { text: 'parent', to: '#' },
          { text: 'parent2' }
        ]"
      />-->
      <BreadCrumb></BreadCrumb>
      <div
        class="ml-auto d-inline-flex flex-wrap aling-items-end justify-content-end sub-div"
      >
        <SSearch :styled="true"></SSearch>
        <CDropdown
          color="dark"
          toggler-text="Options"
          class="d-none ml-sm-n5 mt-2"
        >
          <CDropdownItem>name</CDropdownItem>
          <CDropdownItem>statut</CDropdownItem>
          <CDropdownItem>Role</CDropdownItem>
          <CDropdownDivider></CDropdownDivider>
          <CDropdownItem>date</CDropdownItem>
        </CDropdown>
      </div>
    </CSubheader>

    <!-- modal -->
    <CModal
      title="Dernière mise à jour"
      color="dark"
      size="lg"
      :show.sync="modalLast"
    >
      <CRow>
        itemsTache:
        <pre> {{ allTacheLoaded[100] }} </pre>
        ||e:
        <pre> {{ allTacheLoaded.length }} </pre>
        <CCol sm="6">
          <div class="form-inlinee">
            <div class="mb-2">Critère de filtrage :</div>
            {{ filterType }}
            <CSelect
              :value.sync="filterType"
              :options="filterOptions"
            ></CSelect>
          </div>
        </CCol>
        <CCol sm="6"> </CCol>
        <CCol sm="6" v-show="filterType == 'typeprojet'">
          <div class="form-inlinee">
            <div class="mb-2">Choisir un type :</div>
            {{ typeValue }}
            <CSelect :value.sync="typeValue" :options="typeOptions"></CSelect>
          </div>
        </CCol>
        <CCol sm="6" v-show="filterType == 'status'">
          <div class="form-inlinee">
            <div class="mb-2">Choisir un status:</div>
            {{ statuValue }}
            <CSelect
              :value.sync="statuValue"
              :options="statusOptions"
            ></CSelect>
          </div>
        </CCol>
        <CCol sm="6" v-show="filterType == 'duree'">
          <div class="form-inlinee">
            <div class="mb-2">Condition :</div>
            {{ conditionValue }}
            <CSelect
              :value.sync="conditionValue"
              :options="conditionOptions"
            ></CSelect>
          </div>
        </CCol>
        <CCol sm="6" v-show="filterType == 'duree'">
          <div class="form-inlinee">
            <div class="mb-2">
              Choisissez un <strong>%</strong> d'exécution :
            </div>
            {{ dureeValue }}
            <CSelect :value.sync="dureeValue" :options="dureeOptions"></CSelect>
          </div>
        </CCol>
      </CRow>

      <CDataTable
        class="m-0 table-borderless"
        hover
        :responsive="false"
        :items="allTacheLoaded"
        :fields="tableFields"
        :header="false"
        :loading="isLoading"
        cleanere
        table-filtere
        items-per-page-select
        :items-per-page="10"
        pagination
      >
        <td slot="user" slot-scope="{ item }">
          <CLink
            :to="{
              path: '/projets/' + item.idcontents
            }"
            class="text-decoration-none"
            ><div @click="modalLast = !modalLast">
              {{ item.titre }}
              <CBadge
                v-if="item.privaty == '1'"
                color="danger"
                position="top-start"
                shape="pill"
              >
                Privé
              </CBadge>
            </div>
            <div class="small text-muted mt-1">
              <span>
                <template>New</template>
                <template v-if="false">Recurring</template>
              </span>
              | Crée le: {{ item.created_at }}
            </div>
          </CLink>
        </td>
        <!-- <td slot="country" slot-scope="{ item }" class="text-center">
            <CIcon :name="item.country.flag" height="25" />
          </td> -->
        <td slot="usage" slot-scope="{ item }">
          <div class="clearfix">
            <div class="float-left">
              <!-- <strong>{{ 20 }}%</strong> -->
            </div>
            <div class="float-right">
              <small class="text-bold"
                ><strong>Updated: </strong> {{ item.update_at }}</small
              >
            </div>
          </div>
          <!-- <CProgress class="progress-xs" :value="20" color="primary" /> -->
        </td>

        <td slot="activity" slot-scope="{ item }">
          <CRow class="ml-4 d-flex justify-content-arround flex-nowrap">
            <CLink
              color="primary"
              variant="ghost"
              shape="pill"
              size="sm"
              class="mx-3"
            >
              <!-- <CIcon name="cilList" class="mr-1 text-info "></CIcon> -->
              {{ item.type }}
            </CLink>
            <!-- <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-2"
                ><CIcon name="cilFolder" class="mr-1 text-info "></CIcon
              ></CButton>
              <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-2"
                ><CIcon name="cilPlus" class="mr-1 text-info "></CIcon
              ></CButton> -->
          </CRow>
        </td>
      </CDataTable>
      <template slot="footer">
        <div class="d-flex justify-content-end border-bottom-1 mr-3">
          <CLink v-c-tooltip="'Actualiser'"
            ><CButton
              size="sm"
              shape="pill"
              color="secondary"
              @click="LoadTacheData"
            >
              <CIcon name="cil-reload" size="sm" /> </CButton
          ></CLink>
        </div>
        <div class="d-flex justify-content-end mr-3"></div>
      </template>
    </CModal>
    <TacheEncours
      @ev_modal_last="ev_modal_last"
      :modalLast="tacheEncoursModal"
      @update-modal="UpdateModalEncour"
    ></TacheEncours>
    <TacheEncours
      @ev_modal_last="ev_modal_last"
      :type="lastUpdate"
      :titleModal="titlelastUpdate"
      :colorModal="colorlastUpdate"
      :modalLast="LastUpdateModal"
      @update-modal="UpdateLastModal"
    ></TacheEncours>
    <TacheEncours
      @ev_modal_last="ev_modal_last"
      :type="mesTaches"
      :titleModal="titleMesTaches"
      :colorModal="colorMesTaches"
      :modalLast="MesTachesModal"
      @update-modal="UpdateModal"
    ></TacheEncours>
    <NoteAdmin
      @ev_modal_last="ev_modal_last"
      @hide-note="hideNote"
      @update-modal="updateNoteAd"
      :modalLast="notesAdmin"
    ></NoteAdmin>
  </CHeader>
</template>

<script>
//import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import SSearch from "../views/App/search/Search";
import AddNewProject from "../views/App/project/AddNewProject";
import BreadCrumb from "../Steph/Crumb/BreadCrumb";
import SelectDb from "../views/App/config/SelectDb";
import TacheEncours from "../Steph/Header/TacheEncours.vue";
import moment from "moment";
export default {
  name: "TheHeader",
  components: {
    SSearch,
    AddNewProject,
    BreadCrumb,
    TacheEncours,
    NoteAdmin: () => import("../Steph/Header/NoteAdmin.vue")
    //TheHeaderDropdownAccnt
  },
  data() {
    return {
      mesTaches: "mestaches",
      titleMesTaches: "Mes tâches",
      colorMesTaches: "primary",
      lastUpdate: "lastupdates",
      titlelastUpdate: "Dernière mise à jour",
      colorlastUpdate: "dark",
      LastUpdateModal: false,
      MesTachesModal: false,
      modalLast: false,
      isLoading: false,
      itemsTache: [],
      notebtn: false,
      tableFields: [
        { key: "user", _style: "min-width:550px;", filter: false },
        { key: "usage", _style: "min-width:200px;" },
        { key: "activity", _style: "width:600px;" }
      ],
      tacheEncoursModal: false,
      notesAdmin: false,
      /* filter */
      filterType: "",
      filterOptions: [
        { value: "", label: "Aucun" },
        { value: "typeprojet", label: "Type de projet" },
        { value: "status", label: "Status d'exécution" },
        { value: "duree", label: "Durée d'exécution" }
      ],
      statusOptions: [
        { value: "0", label: "New" },
        { value: "2", label: "Encours" },
        { value: "1", label: "Terminé" },
        { value: "3", label: "Annulé" }
      ],
      dureeOptions: [
        { value: "50", label: "50 %" },
        { value: "75", label: "75 %" },
        { value: "100", label: "100 %" },
        { value: "200", label: "200 %" }
      ],
      conditionOptions: [
        { value: "superieur", label: "Supérieur à" },
        { value: "inferieur", label: "Inférieur à" }
      ],
      typeValue: "tache",
      conditionValue: "superieur",
      statuValue: "1",
      dureeValue: "50"
    };
  },
  mounted() {
    this.LoadTacheData();
  },
  computed: {
    users() {
      return this.$store.getters.userList;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
    typeOptions() {
      return this.$store.state.allType;
    },
    allTacheLoaded() {
      let type = this.filterType;

      return this.filteredTache(type);
    }
  },
  methods: {
    filteredTache(type) {
      let allTaches = this.itemsTache;
      let newDatas = [];
      switch (type) {
        case "typeprojet":
          this.isLoading = true;
          //alert();
          allTaches.filter((item) => {
            if (item.type == this.typeValue) {
              newDatas.push(item);
            }
          });
          this.isLoading = false;
          break;
        case "status":
          allTaches.filter((item) => {
            if (item.status == this.statuValue) {
              newDatas.push(item);
            }
          });
          break;
        case "duree":
          allTaches.filter((item) => {
            let duree = parseInt(this.dureeValue, 10);
            if (this.conditionValue == "superieur") {
              if (item.percentage && item.percentage > duree) {
                newDatas.push(item);
              }
            } else {
              if (item.percentage && item.percentage < duree) {
                newDatas.push(item);
              }
            }
          });
          break;
        default:
          newDatas = allTaches;
      }
      return newDatas;
    },
    hideNote() {
      this.notebtn = true;
    },
    loadNoteAdmin() {
      this.notesAdmin = true;
    },

    loadMesTaches() {
      this.MesTachesModal = true;
    },
    loadLastUpdates() {
      this.LastUpdateModal = true;
    },
    loadTacheEncour() {
      this.tacheEncoursModal = true;
    },
    logOut() {
      window.localStorage.clear();
      let redirectPage = window.location.origin + "#/pages/login";
      if (window.location.pathname != "/")
        redirectPage =
          window.location.origin + window.location.pathname + "#/pages/login";
      console.log("utilisateur deconnecter", redirectPage);
      window.location.replace(redirectPage);
      // document.location.pathname = "#/pages/login";
    },
    LoadTacheData() {
      this.isLoading = true;
      SelectDb.selectAll().then((response) => {
        this.itemsTache = this.formatedItemsTache(response);
        this.isLoading = false;
      });
    },
    formatedItemsTache(data) {
      let realData = data;
      if (data && data.length) {
        for (let item of data) {
          this.addPercentage(item);
        }
      }
      return realData;
    },
    addPercentage(item) {
      var date_fin_proposer = moment.unix(item.date_fin_proposer);
      var date_depart_proposer = moment.unix(item.date_depart_proposer);
      var exact = moment.unix(this.currentTime);
      if (item && item.date_fin_reel && item.date_fin_reel > 0) {
        exact = moment.unix(item.date_fin_reel);
      }
      var val = exact.diff(date_depart_proposer, "minutes");
      var max = date_fin_proposer.diff(date_depart_proposer, "minutes");
      var percentage = (val * 100) / max;
      item.percentage = parseInt(percentage);
    },
    ev_modal_last() {
      this.tacheEncoursModal = false;
      this.MesTachesModal = false;
      this.notesAdmin = false;
      this.LastUpdateModal = false;
    },
    UpdateModalEncour(val) {
      this.tacheEncoursModal = val;
    },
    UpdateLastModal(val) {
      this.LastUpdateModal = val;
    },
    UpdateModal(val) {
      this.MesTachesModal = val;
    },
    updateNoteAd(val) {
      this.notesAdmin = val;
    }
  }
};
</script>
<style lang="scss">
// @keyframes bat {
//   25%{transform: scale(103%);}
//   50%{transform: scale(100%);}
//   75%{transform: scale(103%);}
//   100%{transform: scale(100%);}
// }
.sub-div {
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
}
.user-space {
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 50px;
  border-radius: 10px;
  //box-shadow: 0px 0px 16px rgb(163, 163 ,163 , 0.45);
  padding: 5px 10px;
  transition: ease-in-out 1s;
  transform: scale(100%);
  // animation: bat 5s linear  infinite ;
}
.logUser {
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 700;
  color: black;
  letter-spacing: 2px;
  //margin-top: 5px;
}
.bouton-note {
  animation: moove infinite ease-in-out 4s;
  transition: 0.3s;
  &:hover {
    animation: none;
  }
}
@keyframes moove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
/*
1: je doit recuperer toutes les taches et les ajouter les valeur min et val et percentage
2: apliquer des filtre en fonction du type de filtre choisis
  si type == typeprojet 
    on renvois tout les projets avec le type == projet
  si type == durre 
    on recupere toutes les taches et on renvoie en fonction de la condition 
  si type == status 
    on renvois toutes les tache qui ont un status terminer
 */
</style>
