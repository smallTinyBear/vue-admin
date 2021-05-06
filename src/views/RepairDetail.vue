<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-lx-info"></i> 维修详情
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container m-top">
      基本信息
      <div class="base-info">
        <div class="child-flex font-style">
          <div class="base-info-item">维修日期：2020-05-23</div>
          <div class="base-info-item">维修费用（元）：20.00</div>
        </div>
        <div class="child-flex font-style">
          <div class="base-info-item">报修人：李晨</div>
          <div class="base-info-item">报修备注：设备完好</div>
        </div>
        <div class="child-flex font-style">
          <div class="base-info-item">维修内容：换螺丝</div>
        </div>
      </div>
      资产列表
      <div style="margin-top: 20px">
        <el-table
          :data="tableData"
          border
          class="table"
          ref="multipleTable"
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
            label="资产编码"
            align="center"
            prop="numId"
          ></el-table-column>

          <el-table-column
            prop="name"
            align="center"
            label="资产名称"
          ></el-table-column>

          <el-table-column
            label="资产分类"
            align="center"
            prop="type"
          ></el-table-column>

          <el-table-column
            label="所属组织"
            align="center"
            prop="ownOrganization"
          ></el-table-column>

          <el-table-column
            label="使用组织"
            align="center"
            prop="useOrganization"
          ></el-table-column>

          <el-table-column
            label="使用人"
            align="center"
            prop="usePeople"
          ></el-table-column>

          <el-table-column
            label="管理员"
            align="center"
            prop="admin"
          ></el-table-column>

          <el-table-column
            label="购买日期"
            align="center"
            prop="date"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchListData } from "../api/index";
export default {
  name: "collectDetail",
  data() {
    return { tableData: [] };
  },
  methods: {
    getData() {
      fetchListData(this.query).then((res) => {
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

.base-info {
  display: flex;
  margin: 0 20px;
}

.child-flex {
  flex: 1;
}

.font-style {
  font-size: 14px;
  color: #606266;
}

.base-info-item {
  margin: 20px 0;
}
</style>

