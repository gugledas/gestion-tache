<template>
  <div>
    <CRow alignHorizontal="center">
      <CCol col="10">
        <CCard class="facture shadow">
          <div class="facture__header">
            <CRow
              class="first-header text-center p-5 m-0"
              alignVertical="center"
            >
              <CCol>
                <img
                  class="pr-2 mt-2"
                  src="../../assets/universe png.png"
                  height="40"
                  width="150"
              /></CCol>
              <CCol class="display-4">INVOICE</CCol>
            </CRow>
            <CRow class="second-header m-0 text-center" alignVertical="center">
              <CCol class="bg-info pt-2">
                <p>Invoice # <strong>52141</strong></p>
              </CCol>
              <CCol class="pt-2"
                ><p><Strong class="px-2">Date:</Strong> 01/02/2020</p></CCol
              >
            </CRow>
          </div>
          <div class="facture__id p-3 d-flex ml-5">
            <h5>Invoice to :</h5>
            <div class="ml-2">
              <h5>Dwayne Clark</h5>
              <h6>24 Dummy, street Area.</h6>
              <h6>Location, Lorem Ipsum,</h6>
              <h6>507xx745</h6>
            </div>
          </div>
          <CRow alignHorizontal="center" class="mb-4">
            <CCol md="11">
              <CDataTable
                striped
                outlined
                hover
                :responsive="false"
                :items="factTable"
                :fields="facFields"
                head-color="light"
                no-sorting
              >
                <td slot="sl" slot-scope="{ item }">
                  <Strong>{{ item.sl }}</Strong>
                </td>
              </CDataTable>
            </CCol>
          </CRow>
          <CRow class="mt-2" alignHorizontal="center">
            <CCol col="11" class="d-flex">
              <CCol col="6" class="">
                <div>
                  <h5>Payment Info:</h5>
                  <p class="m-0">
                    Account #: <strong class="ml-2"> 551 254 251 015</strong>
                  </p>
                  <p class="m-0">
                    ACT Name: <strong class="ml-2"> Lorem Ipsum</strong>
                  </p>
                  <p class="m-0">
                    Bank details:<strong class="ml-2">
                      Add Your bank Details
                    </strong>
                  </p>
                </div>
              </CCol>
              <CCol col="6" class="ml-5">
                <div class="d-flex justify-content-around">
                  <h5>Sub Total:</h5>
                  <span class="ml-5 h5">$5240.00</span>
                </div>
                <div class="d-flex justify-content-around">
                  <h5>Tax:</h5>
                  <span class="ml-5 h5">19.25%</span>
                </div>
                <div
                  class="d-flex justify-content-around bg-info mt-2 text-white p-2 mr-4"
                >
                  <h5>Total:</h5>
                  <span class="ml-5 h5">10 142.00 $</span>
                </div>
              </CCol>
            </CCol>
          </CRow>
          <CRow alignHorizontal="center" class="mt-5 mb-4">
            <CCol col="11" class="d-flex mb-3">
              <CCol col="6" class="">
                <h5>Terms & conditions</h5>

                <h6 class=" p-0 m-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate architecto cum aliquam aut ut?
                </h6>
              </CCol>
              <CCol col="6" class="pt-4 mt-5 text-center">
                <p class="m-0 p-0">______________________________</p>
                <h6 class="mt-1">Authorised sign</h6>
              </CCol>
            </CCol>
          </CRow>
          <CRow>
            <CCol col="12">
              <CCol class="bg-light p-0">
                <div
                  class="d-flex justify-content-around bg-info mt-2 text-white p-2 col-6"
                >
                  <h5>Thanks for your Business</h5>
                </div>
              </CCol>
            </CCol>
          </CRow>
        </CCard>
      </CCol>
    </CRow>
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
      factTable: [
        {
          sl: 1,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        },
        {
          sl: 2,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        },
        {
          sl: 3,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        },
        {
          sl: 4,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        }
      ],
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
      tableFields: [{ key: "user" }, { key: "usage" }, { key: "activity" }],
      facFields: [
        { key: "sl" },
        { label: "Tasks description", key: "item" },
        { key: "prix" },
        { label: "Qté", key: "quantite" },
        { key: "total", label: "Total" }
      ]
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
