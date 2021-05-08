<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-present"></i> 调拨管理
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="container m-top">
        <div class="base-info-container">
          <div class="left">
            <div class="handle-box">
              <router-link to="/newAllocation">
                <el-button
                  type="primary"
                  class="handle-del mr10"
                  @click="delAllSelection"
                  >新增</el-button
                ></router-link
              >
            </div>
          </div>
          <div class="right">
            <el-input
              placeholder="调拨单号"
              class="handle-input mr10"
            ></el-input>
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="search"
              >搜索</el-button
            >
          </div>
        </div>
        <el-table
          :data="tableData"
          border
          class="table"
          header-cell-class-name="table-header"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            prop="number"
            label="序号"
            align="center"
          ></el-table-column>

          <el-table-column
            prop="numId"
            label="调拨单号"
            align="center"
          ></el-table-column>

          <el-table-column
            prop="status"
            align="center"
            label="单据状态"
          ></el-table-column>

          <el-table-column
            prop="count"
            align="center"
            label="资产数量"
          ></el-table-column>

          <el-table-column
            prop="ownOrganization"
            align="center"
            label="调入所属组织"
          ></el-table-column>

          <el-table-column
            prop="useOrganization"
            align="center"
            label="调入使用组织"
          ></el-table-column>

          <el-table-column
            prop="usePeople"
            align="center"
            label="调入使用人"
          ></el-table-column>

          <el-table-column
            prop="date"
            align="center"
            label="调拨日期"
          ></el-table-column>

          <el-table-column align="center" label="操作">
            <router-link to="/allocationDetail">
              <el-button type="text">详情</el-button>
            </router-link></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchListData } from "../api/index";
export default {
  name: "list",
  data() {
    return {
      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10,
      },
      tableData: [],
    };
  },
  methods: {
    getData() {
      fetchListData(this.query).then((res) => {
        this.tableData = res.list;
      });
    },
    search() {
      this.$message.success("搜索成功");
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
.m-top {
  margin-top: 10px;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}

.mr10 {
  margin-right: 10px;
}

.base-info-container {
  display: flex;
  margin: 10px auto;
  justify-content: flex-start;
  align-content: flex-start;
}

.left {
  flex: 1;
  padding-right: 5px;
}

.right {
  flex: 1;
  padding-left: 5px;
}

.table {
  width: 100%;
  font-size: 14px;
}
</style>