webpackJsonp([4],{485:function(a,t,s){s(559);var e=s(185)(s(503),s(543),"data-v-de7c5d8e",null);a.exports=e.exports},503:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeName2:"first",allowSubmit:!0,hostURL:"/VR",data:{id:1,name:"name1",pic_location:"./static/img/img.jpg",screen_type:"22222",resolution:"222222",weight:1,cpu:1,memory:1,battery_capacity:1,heat:1,irradiance:1,sound_pressure:1,boundary_warning:"222222222",em_compability_path:"./static/img/img.jpg",angle_of_field:1,refresh_rate:1,system_latency:1,trace_mode:1,trace_range:1,avg_sight_change:1,avg_ssq:1,avg_cvs:1}}},methods:{codeParsing:function(a){var t=this,s=function(a,s){t.$message({title:a,message:s,type:"error"})};switch(a){case-1:s("系统错误","未知错误，请上报管理员");break;case 201:s("输入域错误","验证码错误");break;case 300:s("输入域错误","邮箱或密码错误");break;case 301:s("权限问题","用户已禁用，请联系管理员");break;case 302:s("权限问题","用户未激活，请去邮箱激活用户");break;case 303:s("注册问题","邮箱已占用，请更改邮箱");break;case 304:s("注册问题","昵称已占用，请更改昵称");break;case 400:s("权限问题","用户未登录，请重新登录");break;case 401:s("权限问题","用户无权访问，请联系管理员");break;case 402:s("操作错误","删除错误,请刷新重试");break;case 500:s("系统错误","未知错误，请上报管理员");break;case 600:s("TIME_OUT","访问超时，请检查网络连接");break;case 700:s("激活错误","非法激活链接，请联系管理员");break;case 800:s("激活错误","用户已被激活，请直接登录")}},getData:function(a){var t=this;t.data={},t.$axios({url:"/ivr/"+a,method:"get",baseURL:t.hostURL}).then(function(a){console.log(a.data),t.data=a.data.payload}).catch(function(a){console.log(a)})}},mounted:function(){var a=this,t=location.href.split("?"),s=t[1];console.log(s),a.getData(s)}}},521:function(a,t,s){t=a.exports=s(82)(void 0),t.push([a.i,".crumbs[data-v-de7c5d8e]{text-decoration:none}.bread[data-v-de7c5d8e]{font-size:16px}.form-box[data-v-de7c5d8e]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-de7c5d8e]{width:220px;margin-left:80px}.submit-btn button[data-v-de7c5d8e]{width:100%}.product-box[data-v-de7c5d8e]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.box-param[data-v-de7c5d8e]{width:100%;margin-top:5px}.param-title[data-v-de7c5d8e]{height:40px;border-top:none;border-bottom:1px solid #e6e6e6;text-align:center}.param-title h3[data-v-de7c5d8e]{]padding:0 20px;font:normal 16px/40px Microsoft YaHei,arial}.param-tab table[data-v-de7c5d8e]{table-layout:fixed;width:100%;border-collapse:collapse;border:1px solid #e6e6e6;border-bottom:0 none}.param-tab th[data-v-de7c5d8e]{width:118px;padding:15px 0 0 20px;background:#fafafa;border-right:1px solid #e6e6e6;text-align:left;font:700 16px/26px Microsoft YaHei,arial;vertical-align:top}.param-tab td[data-v-de7c5d8e]{width:605px;padding:8px 0 6px;vertical-align:top}.tab-content[data-v-de7c5d8e]{padding:6px 20px 8px}ul[data-v-de7c5d8e]{list-style:none}.category li[data-v-de7c5d8e]{position:relative;padding:2px 0 2px 138px;line-height:26px;_zoom:1;word-wrap:break-word;font:14px/26px Microsoft YaHei,arial;color:#666}.para-name[data-v-de7c5d8e]{position:absolute;top:2px;left:0;font-weight:700}.para-val[data-v-de7c5d8e]{position:relative;color:#666;border-bottom:1px dashed #0a50a1}.img-container[data-v-de7c5d8e]{max-width:50%}.img-container img[data-v-de7c5d8e]{width:100%}",""])},543:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-date"}),a._v("产品中心")]),a._v(" "),s("el-breadcrumb-item",[a._v("产品列表")]),a._v(" "),s("el-breadcrumb-item",[a._v("一体机")]),a._v(" "),s("el-breadcrumb-item",[a._v("详细参数")])],1)],1),a._v(" "),s("div",{staticClass:"product-box"},[s("div",{staticClass:"box-param"},[s("div",{staticClass:"param-title"},[s("h3",[a._v(a._s(a.data.name))])]),a._v(" "),s("div",{staticClass:"param-tab"},[s("table",[s("tbody",[s("tr",[s("th",[a._v("产品外观")]),a._v(" "),s("td",[s("div",{staticClass:"tab-content"},[s("ul",{staticClass:"category"},[s("div",{staticClass:"img-container"},[s("img",{attrs:{src:a.data.pic_location}})])])])])])])]),a._v(" "),s("table",[s("tbody",[s("tr",[s("th",[a._v("产品配置")]),a._v(" "),s("td",[s("div",{staticClass:"tab-content"},[s("ul",{staticClass:"category"},[s("li",[s("span",{staticClass:"para-name"},[a._v("屏幕类型")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.screen_type))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("分辨率")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.resolution))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("重量")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.weight))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("CPU")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.cpu))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("内存")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.memory))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("电池容量")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.battery_capacity))])])])])])])])]),a._v(" "),s("table",[s("tbody",[s("tr",[s("th",[a._v("安全性")]),a._v(" "),s("td",[s("div",{staticClass:"tab-content"},[s("ul",{staticClass:"category"},[s("li",[s("span",{staticClass:"para-name"},[a._v("温升/发热")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.heat))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("蓝光辐照度")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.irradiance))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("声压")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.sound_pressure))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("边界警示")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.boundary_warning))])])])])])])])]),a._v(" "),s("table",[s("tbody",[s("tr",[s("th",[a._v("电磁兼容性")]),a._v(" "),s("td",[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"img-container"},[s("img",{attrs:{src:a.data.em_compability_path}})])])])])])]),a._v(" "),s("table",[s("tbody",[s("tr",[s("th",[a._v("性能")]),a._v(" "),s("td",[s("div",{staticClass:"tab-content"},[s("ul",{staticClass:"category"},[s("li",[s("span",{staticClass:"para-name"},[a._v("视场角")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.angle_of_field))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("刷新率")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.refresh_rate))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("系统延迟")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.system_latency))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("跟踪模式")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.trace_mode))])]),a._v(" "),s("li",[s("span",{staticClass:"para-name"},[a._v("跟踪范围")]),a._v(" "),s("span",{staticClass:"para-val"},[a._v(a._s(a.data.trace_range))])])])])])])])])])])])])},staticRenderFns:[]}},559:function(a,t,s){var e=s(521);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);s(186)("51a1b3ac",e,!0)}});