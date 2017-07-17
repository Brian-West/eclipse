webpackJsonp([7],{482:function(e,a,t){t(544);var r=t(185)(t(500),t(526),"data-v-1270ac8f",null);e.exports=r.exports},500:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){var e=this;return{allowSubmit:!0,hostUrl:"/VR",ruleForm:{nickName:""},rules:{nickName:[{validator:function(a,t,r){var o=e.$data,s=/[^\w\u4E00-\u9fa5]/;return t?t.gblen()<4||t.gblen()>16?(o.allowSubmit=!0,r(new Error("长度为4 - 16个字节"))):t.match(s)?(o.allowSubmit=!0,r(new Error("昵称只能有汉字、英文、数字组成"))):void(o.allowSubmit=!1):(o.allowSubmit=!0,r(new Error("昵称不能为空")))},trigger:"change"}]}}},methods:{codeParsing:function(e){var a=this,t=function(e,t){a.$message({title:e,message:t,type:"error"})};switch(e){case-1:t("系统错误","未知错误，请上报管理员");break;case 201:t("输入域错误","验证码错误");break;case 300:t("输入域错误","邮箱或密码错误");break;case 301:t("权限问题","用户已禁用，请联系管理员");break;case 302:t("权限问题","用户未激活，请去邮箱激活用户");break;case 303:t("注册问题","邮箱已占用，请更改邮箱");break;case 304:t("注册问题","昵称已占用，请更改昵称");break;case 400:t("权限问题","用户未登录，请重新登录");break;case 401:t("权限问题","用户无权访问，请联系管理员");break;case 402:t("操作错误","删除错误,请刷新重试");break;case 500:t("系统错误","未知错误，请上报管理员");break;case 600:t("TIME_OUT","访问超时，请检查网络连接");break;case 700:t("激活错误","非法激活链接，请联系管理员");break;case 800:t("激活错误","用户已被激活，请直接登录")}},submitForm:function(){var e=this,a=this;console.log(a.ruleForm),this.$confirm("确定要修改昵称？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios({url:"/user/changeNickName",method:"post",baseURL:a.hostUrl,data:a.ruleForm}).then(function(t){"200"==t.data.code?(e.$message({type:"success",message:"修改成功"}),localStorage.setItem("ms_username",a.ruleForm.nickName)):(console.log(t.data.code),a.codeParsing(t.data.code)),setTimeout(function(){window.location.reload()},1e3)}).catch(function(t){console.log("Error:",t),e.$message({type:"warning",message:"网络无连接"}),localStorage.setItem("ms_username",a.ruleForm.nickName)})}).catch(function(){e.$message({type:"info",message:"已取消"})})}}}},506:function(e,a,t){a=e.exports=t(82)(void 0),a.push([e.i,".crumbs[data-v-1270ac8f]{text-decoration:none}.form-box[data-v-1270ac8f]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-1270ac8f]{width:220px;margin-left:80px}.submit-btn button[data-v-1270ac8f]{width:100%}",""])},526:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-date"}),e._v(" 个人信息管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("修改昵称")])],1)],1),e._v(" "),t("div",{staticClass:"form-box"},[t("el-form",{ref:"ruleForm",attrs:{"label-position":"right","label-width":"80px",model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{label:"新昵称",prop:"nickName"}},[t("el-input",{ref:"abc",on:{keyup:function(e){}},model:{value:e.ruleForm.nickName,callback:function(a){e.ruleForm.nickName=a},expression:"ruleForm.nickName"}})],1)],1),e._v(" "),t("div",{staticClass:"submit-btn"},[t("el-button",{attrs:{type:"primary",disabled:e.allowSubmit},on:{click:function(a){e.submitForm("ruleForm")}}},[e._v("确认")])],1)],1)])},staticRenderFns:[]}},544:function(e,a,t){var r=t(506);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(186)("e736721e",r,!0)}});