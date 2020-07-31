<template>
	<div class="app-container">
		<el-card class="box-card" body-style="padding:5px">
			<div slot="header" class="clearfix">
				<span>分组列表</span>
				<el-button type="primary" size="mini" style="float: right;">添加</el-button>
			</div>
			<div class="text item">
				<el-form ref="form" :model="query.params" label-width="80px" size="small">
					<el-form-item label="站点名称">
						<el-input v-model="query.params.stationFilter"></el-input>
					</el-form-item>
					<el-form-item label="分组">
						<el-select v-model="query.params.groupId" placeholder="请选择分组">
							<el-option label="所有" value="-1">所有</el-option>
							<el-option label="11" value="1">11</el-option>
						</el-select>
					</el-form-item>
					<el-button type="primary" size="mini" @click="fetchData">搜索</el-button>
				</el-form>
				<el-table v-loading="listLoading" :data="list" element-loading-text="Loading" size="mini" border fit highlight-current-row>
					<el-table-column label="ID">
						<template slot-scope="scope">
							{{ scope.$index }}
						</template>
					</el-table-column>
					<el-table-column label="站点名称" prop="stationName">
					</el-table-column>
					<el-table-column label="分组名称" prop="groupName">
					</el-table-column>
					<el-table-column label="串号" prop="serialNo">
					</el-table-column>
					<el-table-column label="灯杆数" prop="lampPostNum">
					</el-table-column>
				</el-table>
				<pagination v-show="total>0" :total="total" layout="total, prev, pager, next" :page.sync="query.pageNo" :limit.sync="query.pageSize" @pagination="fetchData" />
			</div>
		</el-card>
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
						runState: -1,
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
		}
	}
</script>
<style scoped>
	.el-form-item {
		width: 280px;
		display: inline-block;
	}
	
	.el-table--mini,
	.el-table--small {
		font-size: 14px;
	}
</style>