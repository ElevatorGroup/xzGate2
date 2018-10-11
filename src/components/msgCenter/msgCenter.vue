<template>
  <div class="pageBox">
    <div class="breadnav">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>消息中心</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pd20">
      <div class="searchBox">
        <Row :gutter="16">
          <Col span="16">消息标题：<Input v-model="searchData.msgTitle" placeholder="XXX" clearable style="width: 80%;"/></Col>
          <Col span="8">发&nbsp;起&nbsp;&nbsp;人：<Input v-model="searchData.originator" placeholder="XXX" clearable style="width: 60%"/></Col>
        </Row>
        <br>
        <Row :gutter="16">
          <Col span="8">
            发起时间：<DatePicker v-model="searchData.originatorTime" type="date" placeholder="选择时间" style="width: 60%"></DatePicker>
          </Col>
          <Col span="8">
            消息类型：<Select v-model="searchData.msgType" style="width:60%" clearable>
              <Option v-for="item in msgTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="8">
          所在部门：<Input v-model="searchData.department" placeholder="XXX" clearable style="width: 60%"/>
          </Col>
        </Row>
        <br>
        <Row :gutter="16">
          <Col span="8">数据来源：<Select v-model="searchData.dataSources" style="width:60%" clearable>
              <Option v-for="item in dataSourcesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="8">所在公司：<Input v-model="searchData.company" placeholder="XXX" clearable style="width: 60%"/></Col>
          <Col span="2" offset="4"><Button size="large" type="error" icon="ios-search" style="width: 90px;">搜索</Button></Col>
        </Row>
      </div>
      <div class="tableData">
        <Table border  :columns="theadData" :data="tbodyData"></Table>
        <div style="margin: 10px;height:35px;">
          <div style="float: right;">
            <Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"
                  @on-change="changePage" @on-page-size-change="changePageSize"></Page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fullHeight: document.documentElement.clientHeight-236,
      searchData:{msgTitle:"",originator:"",originatorTime:"",department:"",msgType:"",dataSources:"",company:""},
      msgTypeList:[],//消息类型数据
      dataSourcesList:[],//数据来源数据
      theadData:[ //表头
        {title:'发布时间',key:'originatorTime'},
        {title:'标题',key:'newsTitle',className: 'overEllipsis',width:300,
          render: (h, params) => {
            return h('a', {
              attrs:{
                href:this.tbodyData[params.index].href,
                title:this.tbodyData[params.index].msgTitle,
                target:"_blank"
              }
            },this.tbodyData[params.index].msgTitle);
          }
        },
        {title:'数据来源',key:'dataSources'},
        {title:'类型',key:'msgType'},
        {title:'发起人',key:'originator'},
        {title:'部门',key:'department'},
        {title:'公司',key:'company'}
      ],
      tbodyData:[],
      pageData:{total:11,pageSize:10,pageNum:1}//分页参数
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      this.$ajax({
        method:'get',
        url:'/msgData',
        params:{}
      }).then(res=>{
        console.log(res);
        this.tbodyData=res.data.data.msgList;
        this.msgTypeList=res.data.data.msgType;
        this.dataSourcesList=res.data.data.dataSources;
      })
    },
    changePage (value) {
      //选择页码
      this.pageData.pageNum=value;
      this.getData();
    },
    changePageSize(value){
      //选择每页显示多少条数据
      this.pageData.pageSize = value;
      this.getData();
    },
  }
}
</script>

<style scoped>
.searchBox{
  padding: 0 35px 20px;
  border-bottom: 1px solid #ddd;
}
.tableData{
  padding: 20px 0 10px;
}
</style>
