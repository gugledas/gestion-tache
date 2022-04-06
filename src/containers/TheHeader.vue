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
        @click="modalLast = !modalLast"
        size="sm"
        variant="ghost"
        class=""
        color="warning"
        v-c-tooltip="{
          content: 'Afficher les dernieres taches visités.',
          html: true,
          placement: 'bottom-start',
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
          placement: 'bottom-start',
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
    </CHeaderNav>
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>

    <CHeaderNav class="mr-5 d-flex align-items-center ml-sm-auto mt-1">
      <div class="d-flex mx-3 user-space" v-if="currentUser"><span><CIcon class="mr-2 mb-1" name="cil-user" size="lg"/></span> <span class="logUser">{{currentUser}}</span> </div>
      <div><CLink v-c-tooltip="'Log Out'"
        ><CButton size="" shape="pill" color="light" @click="logOut">
          <CIcon name="cil-account-logout" size="sm"/></CButton
      ></CLink></div>
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
      <div class="ml-auto d-flex flex-wrap aling-items-end">
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
    <CModal title="Last Updated" color="dark" size="lg" :show.sync="modalLast">
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
      <CDataTable
        class="m-0 table-borderless"
        hover
        :responsive="false"
        :items="itemsTache"
        :fields="tableFields"
        :header="false"
        :loading="isLoading"
        cleaner
        table-filter
        items-per-page-select
        :items-per-page="10"
        pagination
      >
        <td slot="user" slot-scope="{ item }">
          <CLink
            :to="{
              path: '/projets/' + item.idcontents,
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
      :type="mesTaches"
      :titleModal="titleMesTaches"
      :colorModal="colorMesTaches"
      :modalLast="MesTachesModal"
      @update-modal="UpdateModal"
    ></TacheEncours>
  </CHeader>
</template>

<script>
//import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import SSearch from "../views/App/search/Search";
import AddNewProject from "../views/App/project/AddNewProject";
import BreadCrumb from "../Steph/Crumb/BreadCrumb";
import SelectDb from "../views/App/config/SelectDb";
import TacheEncours from "../Steph/Header/TacheEncours.vue";
export default {
  name: "TheHeader",
  components: {
    SSearch,
    AddNewProject,
    BreadCrumb,
    TacheEncours,
    //TheHeaderDropdownAccnt
  },
  data() {
    return {
      mesTaches: "mestaches",
      titleMesTaches: "Mes tâches",
      colorMesTaches: "primary",
      MesTachesModal: false,
      modalLast: false,
      isLoading: false,
      itemsTache: [],
      tableFields: [
        { key: "user", _style: "min-width:550px;", filter: false },
        { key: "usage", _style: "min-width:200px;" },
        { key: "activity", _style: "width:600px;" },
      ],
      tacheEncoursModal: false,
    };
  },
  mounted() {
    this.LoadTacheData();
  },
  computed : {
     users() {
       let utilisateur = this.$store.state.utilisateur
      let user = [];
      if (utilisateur && utilisateur.length) {
        for (let person of utilisateur) {
          let obj = {};
          obj["uid"] = person["uid"][0]["value"];
          obj["name"] = person["name"][0]["value"];
          obj["mail"] = person["mail"][0]["value"];
          user.push(obj);
        }
      }

      return user;
    },
    currentUser() {
      let utilisateur = this.users
      let vallue = ''
      let user = JSON.parse(window.localStorage.getItem("current_user"))
      if(user) {
        utilisateur.forEach(element => {
          if(element.uid == user)vallue= element
        });
        
      }
       return vallue.name
    }
  },
  methods: {

    loadMesTaches() {
      this.MesTachesModal = true;
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
        this.itemsTache = response;
        this.isLoading = false;
      });
    },
    ev_modal_last() {
      this.tacheEncoursModal = false;
      this.MesTachesModal = false;
    },
    UpdateModalEncour(val) {
      this.tacheEncoursModal = val;
    },
    UpdateModal(val) {
      this.MesTachesModal = val;
    },
  },
};
</script>
<style lang="scss">
@keyframes bat {
  25%{transform: scale(103%);}
  50%{transform: scale(100%);}
  75%{transform: scale(103%);}
  100%{transform: scale(100%);}
}
.user-space {
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 16px rgb(163, 163 ,163 , 0.45);
  padding: 5px 10px;
  transition: ease-in-out 1s;
  transform: scale(100%);
  animation: bat 5s linear  infinite ;
}
.logUser {
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;    
  //margin-top: 5px;
}
</style>