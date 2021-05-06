<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-lx-add"></i> 新建领用
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="container m-top">
      基本信息
      <el-form ref="form" :model="form" label-width="90px">
        <div class="base-info" style="margin-top: 10px">
          <div class="child-flex">
            <el-form-item label="领用日期">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date"
                ></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="预计退还">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  class="width:100%"
                  v-model="form.returnDate"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </div>

          <div class="child-flex">
            <el-form-item label="领用组织">
              <el-select v-model="form.unit" placeholder="请选择">
                <el-option key="bbk" label="研发部" value="bbk"></el-option>
                <el-option key="xtc" label="技术部" value="xtc"></el-option>
                <el-option key="imoo" label="市场部" value="imoo"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="领用备注">
              <el-input
                v-model="form.numId"
                placeholder="请输入备注"
              ></el-input>
            </el-form-item>
          </div>

          <div class="child-flex">
            <el-form-item label="使用人">
              <el-select v-model="form.unit" placeholder="请选择">
                <el-option key="bbk" label="李晨" value="bbk"></el-option>
                <el-option key="xtc" label="刘成" value="xtc"></el-option>
                <el-option key="imoo" label="张翼飞" value="imoo"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        资产列表
        <div style="margin-top: 10px">
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

            <el-table-column label="操作" align="center">
              <el-button type="text" icon="el-icon-delete">移除</el-button>
            </el-table-column>
          </el-table>
        </div>
        <div style="margin-top: 20px">
          <el-form-item label="添加资产">
            <el-select v-model="form.unit" placeholder="请选择">
              <el-option key="bbk" label="分组一" value="bbk"></el-option>
              <el-option key="xtc" label="选项一" value="xtc"></el-option>
              <el-option key="imoo" label="选项二" value="imoo"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { fetchListData } from "../api/index";
export default {
  name: "newCollect",
  data() {
    return {
      form: {
        numId: "",
      },
      tableData: [],
      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10,
      },
    };
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
}

.child-flex {
  flex: 1;
}

.el-select {
  width: 100%;
}
</style>