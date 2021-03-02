<template>
  <div>
    <CCard>
      <CCardHeader>
        {{ title }}
        <div class="card-header-actions">
          <a
            href="#"
            class="card-header-action"
            rel="noreferrer noopener"
            target="_blank"
          >
            <small class="text-muted"></small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody class="">
        <CDataTable
          class="m-0  table-borderless "
          hover
          :responsive="false"
          :items="items"
          :fields="tableFields"
          :header="false"
          cleaner
          table-filter
          items-per-page-select
          :items-per-page="5"
          pagination
        >
          <td slot="user" slot-scope="{ item }">
            <div>
              <CLink
                :to="{
                  path: 'projets/' + item.idcontents
                }"
                class="text-decoration-none"
              >
                {{ item.titre }}
              </CLink>
            </div>
            <div class="small text-muted mt-1">
              <span>
                <template>New</template>
                <template v-if="false">Recurring</template>
              </span>
              | Crée le: {{ item.created_at }}
            </div>
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

          <td slot="activity">
            <CRow class="ml-4 d-flex justify-content-arround flex-nowrap">
              <CLink
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-3"
                ><CIcon name="cilList" class="mr-1 text-info "></CIcon
              ></CLink>
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
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    title: {
      type: String,
      required: true,
      default: "title"
    }
  },
  data() {
    return {
      tableFields: [
        { key: "user", _style: "min-width:550px;", filter: false },
        { key: "usage", _style: "min-width:200px;" },
        { key: "activity", _style: "width:600px;" }
      ]
    };
  }
};
</script>

<style></style>
