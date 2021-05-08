<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-lx-cart"></i> 借用&归还
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container m-top">
      <el-tabs v-model="tab">
        <el-tab-pane label="借用" name="first">
          <div class="base-info-container">
            <div class="left">
              <div class="handle-box">
                <router-link to="/newBorrow">
                  <el-button
                    type="primary"
                    class="handle-del mr10"
                    @click="delAllSelection"
                    >新增</el-button
                  >
                </router-link>
              </div>
            </div>
            <div class="right">
              <el-input
                placeholder="借用单号"
                class="handle-input mr10"
              ></el-input>
              <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
          </div>
          <el-table
            :data="collectData"
            border
            class="table"
            header-cell-class-name="table-header"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              width="90"
              label="序号"
              align="center"
              prop="number"
            ></el-table-column>

            <el-table-column
              prop="noId"
              label="借用单号"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="status"
              label="单据状态"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="count"
              label="资产数量"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="organization"
              label="领用组织"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="people"
              label="领用人"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="date"
              label="领用日期"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="launchDate"
              label="发起日期"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="launchPeople"
              label="申请人"
              align="center"
            ></el-table-column>

            <el-table-column label="操作" align="center">
              <router-link to="/borrowDetail">
                <el-button type="text">详情</el-button>
              </router-link>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="归还" name="second">
          <div class="base-info-container">
            <div class="left">
              <div class="handle-box">
                <router-link to="/newRevert">
                  <el-button
                    type="primary"
                    class="handle-del mr10"
                    @click="delAllSelection"
                    >新增</el-button
                  >
                </router-link>
              </div>
            </div>
            <div class="right">
              <el-input
                placeholder="归还单号"
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
            :data="returnData"
            border
            class="table"
            header-cell-class-name="table-header"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              width="90"
              label="序号"
              align="center"
              prop="number"
            ></el-table-column>

            <el-table-column
              prop="noId"
              label="归还单号"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="status"
              label="单据状态"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="count"
              label="资产数量"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="date"
              label="归还日期"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="remark"
              label="归还备注"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="launchDate"
              label="发起日期"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="launchPeople"
              label="发起人"
              align="center"
            ></el-table-column>

            <el-table-column label="操作" align="center">
              <router-link to="/revertDetail">
                <el-button type="text">详情</el-button>
              </router-link>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { fetchCollectData, fetchReturnData } from "../api/index";
export default {
  name: "collect",
  data() {
    return {
      tab: "first",
      collectData: [],
      returnData: [],
    };
  },
  methods: {
    getCollectData() {
      fetchCollectData().then((res) => {
        this.collectData = res.list;
      });
    },
    getReturnData() {
      fetchReturnData().then((res) => {
        this.returnData = res.list;
      });
    },
    search() {
      this.$message.success("搜索成功");
    },
  },
  created() {
    this.getCollectData();
    this.getReturnData();
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