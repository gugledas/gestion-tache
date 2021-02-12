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
      <CBreadcrumbRouter
        class="border-0 mb-0"
        :items="[
          { text: 'Home', to: '/' },
          { text: 'parent', to: '#' },
          { text: 'parent2' }
        ]"
      />
      <div class="ml-auto d-flex flex-wrap aling-items-end">
        <SSearch></SSearch>
        <CDropdown color="dark" toggler-text="Options" class="ml-sm-n5 mt-2">
          <CDropdownItem>name</CDropdownItem>
          <CDropdownItem>statut</CDropdownItem>
          <CDropdownItem>Role</CDropdownItem>
          <CDropdownDivider></CDropdownDivider>
          <CDropdownItem>date</CDropdownItem>
        </CDropdown>
      </div>
    </CSubheader>
  </CHeader>
</template>

<script>
//import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import SSearch from "../views/App/search/Search";
import AddNewProject from "../views/App/project/AddNewProject";
export default {
  name: "TheHeader",
  components: {
    SSearch,
    AddNewProject
    //TheHeaderDropdownAccnt
  }
};
</script>
