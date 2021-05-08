<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-home"></i> 资产入库
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="container m-top">
        基本信息
        <div class="base-info-container">
          <div class="left">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="资产编号">
                <el-input
                  v-model="form.numId"
                  placeholder="请输入资产编号"
                ></el-input>
              </el-form-item>

              <el-form-item class="select-width" label="资产分类">
                <el-select v-model="form.type" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="select-width" label="使用组织">
                <el-select v-model="form.useOrganization" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="select-width" label="管理员">
                <el-select v-model="form.admin" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="right">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="资产名称">
                <el-input
                  v-model="form.name"
                  placeholder="请输入资产名称"
                ></el-input>
              </el-form-item>

              <el-form-item class="select-width" label="所属组织">
                <el-select v-model="form.ownOrganization" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="select-width" label="使用人">
                <el-select v-model="form.usePeople" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="select-width" label="区域">
                <el-select v-model="form.area" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
        补充信息
        <div class="base-info-container">
          <div class="left">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="存放地点">
                <el-input
                  v-model="form.address"
                  placeholder="请输入存放地点"
                ></el-input>
              </el-form-item>

              <el-form-item class="select-width" label="计量单位">
                <el-select v-model="form.unit" placeholder="请选择">
                  <el-option key="bbk" label="步步高" value="bbk"></el-option>
                  <el-option key="xtc" label="小天才" value="xtc"></el-option>
                  <el-option key="imoo" label="imoo" value="imoo"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="使用年限">
                <el-input
                  v-model="form.year"
                  placeholder="请输入使用年限"
                ></el-input>
              </el-form-item>

              <el-form-item label="供应商">
                <el-input
                  v-model="form.supplier"
                  placeholder="请输入供应商"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="right">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="规格型号">
                <el-input
                  v-model="form.model"
                  placeholder="请输入规格型号"
                ></el-input>
              </el-form-item>

              <el-form-item label="价格（元）">
                <el-input
                  v-model="form.price"
                  placeholder="请输入价格（元）"
                ></el-input>
              </el-form-item>

              <el-form-item label="购买日期">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    class="width:100%"
                    v-model="form.date"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="oncancel">取消</el-button>
        </el-form-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "warehousing",
  data() {
    return {
      form: {
        numId: "",
        name: "",
        type: "",
        useOrganization: "",
        admin: "",
        ownOrganization: "",
        usePeople: "",
        area: "",
        address: "",
        unit: "",
        year: "",
        supplier: "",
        model: "",
        price: "",
        date: "",
      },
    };
  },
  methods:{
    onSubmit(){
      this.$message.success("提交成功");
    },
    oncancel(){
      this.$message.success("取消成功");
    }
  }
};
</script>

<style scoped>
.m-top {
  margin-top: 10px;
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
.el-select {
  width: 100%;
}
</style>