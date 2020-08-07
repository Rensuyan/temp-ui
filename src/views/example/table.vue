<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>站点列表</span>
        <el-button type="primary" size="small" style="float: right;">添加</el-button>
      </div>
      <div class="text item">
        <el-form ref="form" inline :model="query.params" label-width="80px" size="small">
          <el-form-item label="站点名称">
            <el-input v-model="query.params.stationFilter" />
          </el-form-item>
          <el-form-item label="分组">
            <el-select v-model="query.params.groupId" placeholder="请选择分组">
              <el-option label="所有" value="-1"></el-option>
              <el-option label="11" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" size="small" @click="fetchData">搜索</el-button>
        </el-form>
        <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" size="mini" border fit highlight-current-row>
          <el-table-column label="ID">
            <template slot-scope="scope">
              {{ scope.$index }}
            </template>
          </el-table-column>
          <el-table-column label="站点名称" prop="stationName" />
          <el-table-column label="分组名称" prop="groupName" />
          <el-table-column label="串号" prop="serialNo" />
          <el-table-column label="灯杆数" prop="lampPostNum" />
          <el-table-column label="操作">
            <template slot-scope="{row,$index}">
              <el-button type="primary" size="mini" @click="handleEdit(row)">
                <!-- row传递本行数据-->
                编辑
              </el-button>
              <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination v-show="total>0" :total="total" layout="total, prev, pager, next" :page.sync="query.pageNo" :limit.sync="query.pageSize" @pagination="fetchData" />
      </div>
    </el-card>
    <!-- 弹出框-->
    <el-dialog :title="dialogCurrData.stationName" :visible.sync="dialogFormVisible" width="350px">
      <el-form ref="dataForm" :model="dialogCurrData" label-position="left" label-width="70px" size="small">

        <el-form-item label="站点名称" prop="stationName">
           <el-input v-model="dialogCurrData.stationName" />
        </el-form-item>
        <el-form-item label="串号" prop="serialNo">
           <el-input v-model="dialogCurrData.serialNo" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small">
          取消
        </el-button>
        <el-button type="primary" @click="" size="small">
          确认
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { getStationList } from '@/api/station'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: true,
      dialogFormVisible: false,
      dialogCurrData: {},
      total: 0,
      query: {
        pageSize: 15,
        pageNo: 1,
        params: {
          stationFilter: '',
          groupId: -1,
          lampEnable: -1,
          cableEnable: -1,
          leakEnable: -1,
          runState: -1
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getStationList(this.query).then(res => {
        this.list = res.data.records
        this.total = res.data.total
        this.listLoading = false
      })
    },
    handleEdit(row) {
      //console.log(row)
      this.dialogFormVisible = true;
      this.dialogCurrData = row;
    },
    handleDelete(row, index) {

    }
  }
}
</script>
<style scoped>

</style>
