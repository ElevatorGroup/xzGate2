<template>
  <div class="pageBox">
    <div class="breadnav">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>新闻中心</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="pd20">
      <div class="searchBox">
        <Row>
          <Col span="12">新闻标题：<Input v-model="searchData.newsTitle" placeholder="XXX" clearable style="width: 502px"/></Col>
          <Col span="6">发&nbsp;&nbsp;起&nbsp;&nbsp;人：<Input v-model="searchData.originator" placeholder="XXX" clearable style="width: 200px"/></Col>
        </Row>
        <br>
        <Row>
          <Col span="6">
            发起时间：<DatePicker v-model="searchData.originatorTime" type="date" placeholder="选择时间" style="width: 200px"></DatePicker>
          </Col>
          <Col span="6">
            所在部门：<Input v-model="searchData.department" placeholder="XXX" clearable style="width: 200px"/>
          </Col>
          <Col span="6">
          所在公司：<Input v-model="searchData.company" placeholder="XXX" clearable style="width: 200px"/>
          </Col>
        </Row>
        <br>
        <Row>
          <Col span="6" offset="15"><Button size="large" type="error" icon="ios-search" style="width: 110px;">搜索</Button></Col>
        </Row>
      </div>
      <div class="tableData">
        <Table border stripe :height="fullHeight" :columns="theadData" :data="tbodyData"></Table>
        <div style="margin: 10px;overflow: hidden">
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
            searchData:{newsTitle:"",originator:"",originatorTime:"",department:"",company:""},
            theadData:[
                {title:'发布时间',key:'originatorTime'},
                {title:'标题',key:'newsTitle'},
                {title:'发起人',key:'originator'},
                {title:'部门',key:'department'},
                {title:'公司',key:'company'}
            ],
            tbodyData:[
                {
                    originatorTime:"2018-10-11",
                    newsTitle:"新闻标题1",
                    originator:"张三",
                    department:"办公室",
                    company:"运营公司"
                },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题2",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题3",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题4",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题5",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题6",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题7",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题8",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题9",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题10",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              },
              {
                originatorTime:"2018-10-11",
                newsTitle:"新闻标题11",
                originator:"张三",
                department:"办公室",
                company:"运营公司"
              }
            ],
            pageData:{total:11,pageSize:10,pageNum:1}
        }
    },
    methods:{
        changePage (value) {
            this.pageData.pageNum=value;
            // this.getData();
        },
        changePageSize(value){
            this.pageData.pageSize = value;
            // this.getData();
        },
    }
}
</script>

<style scoped>
.searchBox{
  padding: 0 50px 20px;
  border-bottom: 1px solid #ddd;
}
  .tableData{
    padding: 20px 0 10px;
  }
</style>
