<<<<<<< HEAD:src/views/App/Home.vue
<template>
  <div>
    <CRow>
      <AddNewProject :showSideText="true"></AddNewProject>
    </CRow>
    <CRow class="mt-3">
      <CCol md="7">
        <CTableWrapper :items="getShuffledUsersData()" small caption="Tâches" />
      </CCol>
      <CCol md="5">
        <CCard>
          <CCardHeader>
            General
          </CCardHeader>
          <CCardBody><CChartPieExample /></CCardBody>
        </CCard>
      </CCol>

      <!-- Tableau de projet -->
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Projet
            <div class="card-header-actions">
              <a
                href="#"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted">See All</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody class="table-responsive">
            <CDataTable
              class="m-0  table-borderless "
              hover
              :responsive="false"
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
              :header="false"
            >
              <td slot="user" slot-scope="{ item }">
                <CLink
                  :to="{
                    path: 'projets/' + item.user.name
                  }"
                  class="text-decoration-none"
                >
                  <div>{{ item.user.name }}</div>

                  <div class="small text-muted">
                    <span>
                      <template v-if="item.user.new">New</template>
                      <template v-else>Recurring</template>
                    </span>
                    | Crée le: {{ item.user.registered }}
                  </div>
                </CLink>
              </td>
              <td slot="country" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.country.flag" height="25" />
              </td>
              <td slot="usage" slot-scope="{ item }">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{ item.usage.value }}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{ item.usage.period }}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>

              <td slot="activity">
                <CRow class="ml-4 d-flex justify-content-arround">
                  <CButton
                    color="primary"
                    variant="ghost"
                    shape="pill"
                    size="sm"
                    class="mx-2"
                    ><CIcon name="cilList" class="mr-1 text-info "></CIcon
                  ></CButton>
                  <CButton
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
                  ></CButton>
                </CRow>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import * as Charts from "../charts/index";
import usersData from "../users/UsersData";
import CTableWrapper from "../base/Table.vue";
import AddNewProject from "./project/AddNewProject";
export default {
  name: "SHome",
  components: {
    ...Charts,
    CTableWrapper,
    AddNewProject
  },
  data() {
    return {
      selected: "Month",

      tableItems: [
        {
          avatar: { url: "img/avatars/5.jpg", status: "success" },
          user: {
            name: "Agapetus Tadeáš",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Friderik Dávid",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Dávid Raplang",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 73, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Rsichard Dávid",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 13, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        }
      ],
      tableFields: [{ key: "user" }, { key: "usage" }, { key: "activity" }]
    };
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "danger";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "success";
      }
      return $color;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(usersData.slice(0));
    }
  }
};
</script>

<style lang="scss"></style>
=======
<template>
  <div>
    <CRow>
      <AddNewProject :showSideText="true"></AddNewProject>
    </CRow>
    <CRow class="mt-3">
      <CCol md="7">
        <CTableWrapper :items="getShuffledUsersData()" small caption="Tâches" />
      </CCol>
      <CCol md="5">
        <CCard>
          <CCardHeader>
            General
          </CCardHeader>
          <CCardBody><CChartPieExample /></CCardBody>
        </CCard>
      </CCol>

      <!-- Tableau de projet -->
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Projet
            <div class="card-header-actions">
              <a
                href="#"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted">See All</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody class="table-responsive">
            <CDataTable
              class="m-0  table-borderless "
              hover
              :responsive="false"
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
              :header="false"
            >
              <td slot="user" slot-scope="{ item }">
                <CLink
                  :to="{
                    path: 'projets/' + item.user.name
                  }"
                  class="text-decoration-none"
                >
                  <div>{{ item.user.name }}</div>

                  <div class="small text-muted">
                    <span>
                      <template v-if="item.user.new">New</template>
                      <template v-else>Recurring</template>
                    </span>
                    | Crée le: {{ item.user.registered }}
                  </div>
                </CLink>
              </td>
              <td slot="country" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.country.flag" height="25" />
              </td>
              <td slot="usage" slot-scope="{ item }">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{ item.usage.value }}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{ item.usage.period }}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>

              <td slot="activity">
                <CRow class="ml-4 d-flex justify-content-arround">
                  <CButton
                    color="primary"
                    variant="ghost"
                    shape="pill"
                    size="sm"
                    class="mx-2"
                    ><CIcon name="cilList" class="mr-1 text-info "></CIcon
                  ></CButton>
                  <CButton
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
                  ></CButton>
                </CRow>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import * as Charts from "../charts/index";
import usersData from "../users/UsersData";
import CTableWrapper from "../base/Table.vue";
import AddNewProject from "./project/AddNewProject";
export default {
  name: "SHome",
  components: {
    ...Charts,
    CTableWrapper,
    AddNewProject
  },
  data() {
    return {
      selected: "Month",

      tableItems: [
        {
          avatar: { url: "img/avatars/5.jpg", status: "success" },
          user: {
            name: "Agapetus Tadeáš",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Friderik Dávid",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Dávid Raplang",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 73, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: {
            name: "Rsichard Dávid",
            new: true,
            registered: "Jan 1, 2015"
          },
          usage: { value: 13, period: "Jun 11, 2015 - Jul 10, 2015" },
          activity: "Last week"
        }
      ],
      tableFields: [{ key: "user" }, { key: "usage" }, { key: "activity" }]
    };
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "danger";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "success";
      }
      return $color;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(usersData.slice(0));
    }
  }
};
</script>

<style lang="scss"></style>
>>>>>>> 50c1963d302486def39dede06c098263984f8081:src/views/App/SProjectList.vue
