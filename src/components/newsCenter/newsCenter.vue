<template>
  <div class="pageBox">
    <div class="breadCrub">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>新闻中心</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pageareMain">
      <div class="searchBox">
        <Row :gutter="16">
          <Col span="16">新闻标题：<Input v-model="searchData.newsTitle" placeholder="XXX" clearable style="width: 80%;"/></Col>
          <Col span="8">发&nbsp;起&nbsp;&nbsp;人：<Input v-model="searchData.originator" placeholder="XXX" clearable style="width: 60%"/></Col>
        </Row>
        <br>
        <Row :gutter="16">
          <Col span="8">
            发起时间：<DatePicker v-model="searchData.originatorTime" type="date" placeholder="选择时间" style="width: 60%"></DatePicker>
          </Col>
          <Col span="8">
            所在部门：<Input v-model="searchData.department" placeholder="XXX" clearable style="width: 60%"/>
          </Col>
          <Col span="8">
          所在公司：<Input v-model="searchData.company" placeholder="XXX" clearable style="width: 60%"/>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="2" offset="20"><Button size="large" type="error" icon="ios-search" style="width: 105px;">搜索</Button></Col>
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
      searchData:{newsTitle:"",originator:"",originatorTime:"",department:"",company:""},
      theadData:[ //表头
        {title:'发布时间',key:'originatorTime'},
        {title:'标题',key:'newsTitle',className: 'overEllipsis',width:350,
          render: (h, params) => {
            return h('a', {
              attrs:{
                href:this.tbodyData[params.index].href,
                title:this.tbodyData[params.index].newsTitle,
                target:"_blank"
              }
            },this.tbodyData[params.index].newsTitle);
          }
        },
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
        url:'/newsList',
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
