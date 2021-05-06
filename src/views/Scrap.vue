<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-rank"></i> 报废管理
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="container m-top">
        <div class="base-info-container">
          <div class="left">
            <div class="handle-box">
              <router-link to="/newScrap">
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
              placeholder="报废单号"
              class="handle-input mr10"
            ></el-input>
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleSearch"
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
            width="90"
            label="序号"
            align="center"
          ></el-table-column>

          <el-table-column
            prop="noId"
            label="报废单号"
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
            prop="date"
            align="center"
            label="报废日期"
          ></el-table-column>

          <el-table-column
            prop="reson"
            align="center"
            label="报废原因"
          ></el-table-column>

          <el-table-column
            prop="publcDate"
            align="center"
            label="发起日期"
          ></el-table-column>

          <el-table-column
            prop="people"
            align="center"
            label="发起人"
          ></el-table-column>
          <el-table-column align="center" label="操作">
            <router-link to="/scrapDetail">
              <el-button type="text">详情</el-button>
            </router-link></el-table-column
          >
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchScrapData } from "../api/index";
export default {
  name: "list",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getData() {
      fetchScrapData().then((res) => {
        this.tableData = res.list;
      });
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