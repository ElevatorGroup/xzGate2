<template>
  <div class="pageBox">
    <div class="breadnav">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>员工自助</BreadcrumbItem>
        <BreadcrumbItem>个人薪资</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pd20 tabCard">
      <Tabs type="card">
        <TabPane label="个人薪资">
          <div class="searchBox">
            <Row :gutter="16">
              <Col span="8">所属组织：<Input v-model="searchData.group" placeholder="XXX" clearable style="width: 60%;"/></Col>
              <Col span="8">员工编号：<Input v-model="searchData.empNo" placeholder="XXX" clearable style="width: 60%"/></Col>
              <Col span="8">姓&nbsp;&nbsp;&nbsp;&nbsp;名：<Input v-model="searchData.empName" placeholder="XXX" clearable style="width: 60%"/></Col>
            </Row>
            <br>
            <Row :gutter="16">
              <Col span="8">
              期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 间：<DatePicker v-model="searchData.duration" type="daterange" split-panels placeholder="选择时间" style="width: 60%"></DatePicker>
              </Col>
              <Col span="5" offset="9">
              <Button size="large" type="error" icon="ios-search" style="width: 45%; margin-right: 10px;">搜索</Button>
              <Button size="large" type="error" ghost icon="ios-download-outline" style="width: 45%;" @click="exportData()">导出</Button>
              </Col>
            </Row>
          </div>
          <div class="tableData">
            <Table border  :columns="theadData" :data="tbodyData" ref="table"></Table>
            <div style="margin: 10px;height:35px;">
              <div style="float: right;">
                <Page placement="top" show-total show-sizer :total="pageData.total" :current="pageData.pageNum" :page-size="pageData.pageSize"
                      @on-change="changePage" @on-page-size-change="changePageSize"></Page>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="个人基本信息">个人基本信息</TabPane>
        <TabPane label="个人假期信息">个人假期信息</TabPane>
        <TabPane label="通讯录">通讯录</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchData:{group:"",empNo:"",empName:"",duration:""},
      theadData:[ //表头
        {title:'员工编号',key:'staffNum'},
        {title:'姓名',key:'staffName'},
        {title:'所属组织',key:'department'},
        {title:'岗位',key:'position'},
        {title:'薪资期间',key:'salaryTime'},
        {title:'应付工资',key:'salary'},
        {title:'代扣保险公积金合计',key:'providentFund'},
        {title:'应税所得',key:'taxableIncome'},
        {title:'代扣代缴个人所得税',key:'incomeTax'},
        {title:'实发工资',key:'actualSalary'},
        {title:'操作',key:'action',
          render: (h, params) => {
            return h('a', {
              on: {
                click: () => {
                  alert(params.index)
                }
              }
            }, '查看')
          }
        },
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
        url:'/salaryList',
        params:{}
      }).then(res=>{
        console.log(res);
        this.tbodyData=res.data.data;
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
    exportData () {
      this.$refs.table.exportCsv({
        filename: '导出'
      });
    }
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
