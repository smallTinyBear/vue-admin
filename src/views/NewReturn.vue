<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-lx-add"></i> 新建退还
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container m-top">
      基本信息
      <el-form ref="form" :model="form" label-width="90px">
        <div class="base-info">
          <div class="child-flex">
            <el-form-item label="退还日期">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </div>
          <div class="child-flex">
            <el-form-item label="退还备注">
              <el-input
                v-model="form.numId"
                placeholder="请输入备注"
              ></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
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
      <!-- <div style="margin-top: 20px">
        <el-form-item label="添加资产">
          <el-select v-model="form.unit" placeholder="请选择">
            <el-option key="bbk" label="分组一" value="bbk"></el-option>
            <el-option key="xtc" label="选项一" value="xtc"></el-option>
            <el-option key="imoo" label="选项二" value="imoo"></el-option>
          </el-select>
        </el-form-item>
      </div> -->
      <div style="margin-top:20px">
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchListData } from "../api/index";
export default {
  name: "newRetrun",
  data() {
    return {
      form: {},
      tableData: [],
    };
  },
  methods: {
    getData() {
      fetchListData(this.query).then((res) => {
        this.tableData = res.list;
      });
    },
    onSave() {
      this.$message.success("保存成功");
    },
    onCancel() {
      this.$message.success("取消成功");
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.m-top {
  margin-top: 10px;
}

.base-info {
  display: flex;
  margin-top: 20px;
}

.child-flex {
  flex: 1;
}
</style>