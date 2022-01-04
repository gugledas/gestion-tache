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
        @click="tacheEncoursModal = !tacheEncoursModal"
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
    </CHeaderNav>
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>

    <CHeaderNav class="mr-5 ml-sm-auto mt-1">
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
        <CDropdown color="dark" toggler-text="Options" class="ml-sm-n5 mt-2">
          <CDropdownItem>name</CDropdownItem>
          <CDropdownItem>statut</CDropdownItem>
          <CDropdownItem>Role</CDropdownItem>
          <CDropdownDivider></CDropdownDivider>
          <CDropdownItem>date</CDropdownItem>
        </CDropdown>
      </div>
    </CSubheader>

    <!-- modal -->
    <CModal title="Last Updated" color="light" size="lg" :show.sync="modalLast">
      <CDataTable
        class="m-0 table-borderless"
        hover
        responsive
        :items="itemsTache"
        :fields="tableFields"
        :header="false"
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
      :modalLast="tacheEncoursModal"
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
      modalLast: false,
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
  methods: {
    LoadTacheData() {
      this.isLoading = true;
      SelectDb.selectAll().then((response) => {
        this.itemsTache = response;
        this.isLoading = false;
      });
    },
    UpdateModal(val) {
      this.tacheEncoursModal = val;
    },
  },
};
</script>
