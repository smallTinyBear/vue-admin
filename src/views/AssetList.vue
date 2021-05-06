<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-goods"></i> 资产列表
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="container m-top">
        <div class="base-info-container">
          <div class="left">
            <div class="handle-box">
              <el-button
                type="primary"
                class="handle-del mr10"
                @click="delAllSelection"
                >打印标签</el-button
              >

              <el-button class="handle-del mr10" @click="delAllSelection"
                >导出</el-button
              >
            </div>
          </div>
          <div class="right">
            <el-input
              placeholder="资产编码、资产名称"
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
          ref="multipleTable"
          header-cell-class-name="table-header"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="status"
            label="资产状态"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="numId"
            align="center"
            label="资产编码"
          ></el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="资产名称"
          ></el-table-column>
          <el-table-column
            prop="type"
            align="center"
            label="资产分类"
          ></el-table-column>
          <el-table-column
            prop="useOrganization"
            align="center"
            label="使用组织"
          ></el-table-column>
          <el-table-column
            prop="usePeople"
            align="center"
            label="使用人"
          ></el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="购买日期"
          ></el-table-column>
          <el-table-column
            prop="area"
            align="center"
            label="资产区域名称"
          ></el-table-column>
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
  },
  created(){
      this.getData()
  }
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