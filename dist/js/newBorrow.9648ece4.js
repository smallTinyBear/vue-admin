(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["newBorrow"],{7496:function(e,t,l){"use strict";l("e157")},c92e:function(e,t,l){"use strict";l.r(t);var a=l("7a23"),n=Object(a["hb"])("data-v-7f3c47c0");Object(a["J"])("data-v-7f3c47c0");var c={class:"crumbs"},o=Object(a["p"])("i",{class:"el-icon-lx-add"},null,-1),u=Object(a["o"])(" 新建借用 "),r={class:"container m-top"},b=Object(a["o"])(" 基本信息 "),p={class:"base-info",style:{"margin-top":"10px"}},d={class:"child-flex"},i={class:"child-flex"},f={class:"child-flex"},O=Object(a["o"])(" 资产列表 "),j={style:{"margin-top":"10px"}},m=Object(a["o"])("移除"),s={style:{"margin-top":"20px"}};Object(a["H"])();var v=n((function(e,t,l,v,h,g){var k=Object(a["P"])("el-breadcrumb-item"),_=Object(a["P"])("el-breadcrumb"),y=Object(a["P"])("el-date-picker"),V=Object(a["P"])("el-col"),x=Object(a["P"])("el-form-item"),w=Object(a["P"])("el-option"),P=Object(a["P"])("el-select"),D=Object(a["P"])("el-input"),I=Object(a["P"])("el-table-column"),U=Object(a["P"])("el-button"),C=Object(a["P"])("el-table"),S=Object(a["P"])("el-form");return Object(a["G"])(),Object(a["k"])("div",null,[Object(a["p"])("div",c,[Object(a["p"])(_,{separator:"/"},{default:n((function(){return[Object(a["p"])(k,null,{default:n((function(){return[o,u]})),_:1})]})),_:1})]),Object(a["p"])("div",r,[b,Object(a["p"])(S,{ref:"form",model:h.form,"label-width":"90px"},{default:n((function(){return[Object(a["p"])("div",p,[Object(a["p"])("div",d,[Object(a["p"])(x,{label:"借用日期"},{default:n((function(){return[Object(a["p"])(V,{span:11},{default:n((function(){return[Object(a["p"])(y,{type:"date",placeholder:"选择日期",modelValue:h.form.date,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.form.date=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["p"])(x,{label:"预计归还"},{default:n((function(){return[Object(a["p"])(V,{span:11},{default:n((function(){return[Object(a["p"])(y,{type:"date",placeholder:"选择日期",class:"width:100%",modelValue:h.form.returnDate,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.form.returnDate=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]),Object(a["p"])("div",i,[Object(a["p"])(x,{label:"借用组织"},{default:n((function(){return[Object(a["p"])(P,{modelValue:h.form.unit,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.form.unit=e}),placeholder:"请选择"},{default:n((function(){return[Object(a["p"])(w,{key:"bbk",label:"研发部",value:"bbk"}),Object(a["p"])(w,{key:"xtc",label:"技术部",value:"xtc"}),Object(a["p"])(w,{key:"imoo",label:"市场部",value:"imoo"})]})),_:1},8,["modelValue"])]})),_:1}),Object(a["p"])(x,{label:"借用备注"},{default:n((function(){return[Object(a["p"])(D,{modelValue:h.form.numId,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.form.numId=e}),placeholder:"请输入备注"},null,8,["modelValue"])]})),_:1})]),Object(a["p"])("div",f,[Object(a["p"])(x,{label:"使用人"},{default:n((function(){return[Object(a["p"])(P,{modelValue:h.form.unit,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.form.unit=e}),placeholder:"请选择"},{default:n((function(){return[Object(a["p"])(w,{key:"bbk",label:"李晨",value:"bbk"}),Object(a["p"])(w,{key:"xtc",label:"刘成",value:"xtc"}),Object(a["p"])(w,{key:"imoo",label:"张翼飞",value:"imoo"})]})),_:1},8,["modelValue"])]})),_:1})])]),O,Object(a["p"])("div",j,[Object(a["p"])(C,{data:h.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header",onSelectionChange:e.handleSelectionChange},{default:n((function(){return[Object(a["p"])(I,{width:"90",label:"序号",align:"center",prop:"number"}),Object(a["p"])(I,{label:"资产编码",align:"center",prop:"numId"}),Object(a["p"])(I,{label:"资产名称",align:"center",prop:"name"}),Object(a["p"])(I,{label:"资产分类",align:"center",prop:"type"}),Object(a["p"])(I,{label:"所属组织",align:"center",prop:"ownOrganization"}),Object(a["p"])(I,{label:"使用组织",align:"center",prop:"useOrganization"}),Object(a["p"])(I,{label:"使用人",align:"center",prop:"usePeople"}),Object(a["p"])(I,{label:"管理员",align:"center",prop:"admin"}),Object(a["p"])(I,{label:"购买日期",align:"center",prop:"date"}),Object(a["p"])(I,{label:"操作",align:"center"},{default:n((function(){return[Object(a["p"])(U,{type:"text",icon:"el-icon-delete"},{default:n((function(){return[m]})),_:1})]})),_:1})]})),_:1},8,["data","onSelectionChange"])]),Object(a["p"])("div",s,[Object(a["p"])(x,{label:"添加资产"},{default:n((function(){return[Object(a["p"])(P,{modelValue:h.form.unit,"onUpdate:modelValue":t[6]||(t[6]=function(e){return h.form.unit=e}),placeholder:"请选择"},{default:n((function(){return[Object(a["p"])(w,{key:"bbk",label:"分组一",value:"bbk"}),Object(a["p"])(w,{key:"xtc",label:"选项一",value:"xtc"}),Object(a["p"])(w,{key:"imoo",label:"选项二",value:"imoo"})]})),_:1},8,["modelValue"])]})),_:1})])]})),_:1},8,["model"])])])})),h=l("365c"),g={name:"newCollect",data:function(){return{form:{numId:""},tableData:[],query:{address:"",name:"",pageIndex:1,pageSize:10}}},methods:{getData:function(){var e=this;Object(h["b"])(this.query).then((function(t){e.tableData=t.list}))}},created:function(){this.getData()}};l("7496");g.render=v,g.__scopeId="data-v-7f3c47c0";t["default"]=g},e157:function(e,t,l){}}]);
//# sourceMappingURL=newBorrow.9648ece4.js.map