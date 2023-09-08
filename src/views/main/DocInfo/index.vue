<template>
  <div style="width: 1300px; padding-top: 20px; margin: auto;">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="ID"
      label="ID"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="petname"
      label="宠物名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="number"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>