<!--搜索控制台的复用组件-->
<template>

<div  class="search-container"  :style="{ height: isActive||!state ? 'auto' : '70px' }">
    <el-form id="sn-search" v-model="searchValue" label-width="100px" style="width:100%"  class="demo-searchValue">
            <el-row>
                <span v-for="(item,index) in searchFormList" :key="index">
                    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6" v-if="item.itemType === 1&&item.isShow">
                        <el-form-item   :label="item.label" >
                            <el-input
                                type="text"
                                v-model.trim="searchValue[item.model]"
                                :placeholder="item.placeholder"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6" v-else-if="item.itemType === 3&&item.isShow">
                        <el-form-item  :label="item.label">
                            <el-select
                                v-if="item.isMultiple&&item.multipleValue"
                                filterable
                                :multiple="item.isMultiple"
                                clearable
                                v-model="multipleFrom[item.multipleValue]"
                                @input="$forceUpdate()"
                                @change="selectChange(item.multipleValue,index,item.model)"
                                :placeholder="item.placeholder"
                            >
                                <el-option key="0" :value="''" v-if="item.selectAll" :label="'全部'"></el-option>
                                <el-option
                                    v-for="x,i in enums[item.enumsName]"
                                    :key="i+1"
                                    :label="x[item.optionLabel]"
                                    :value="x[item.optionValue]"
                                >
                                </el-option>
                            </el-select>
                                <el-select
                                v-if="item.isMultiple&&!item.multipleValue"
                                filterable
                                :multiple="item.isMultiple"
                                clearable
                                v-model="searchValue[item.model]"
                                @input="$forceUpdate()"
                                :placeholder="item.placeholder"
                            >
                                <el-option key="0" :value="''" v-if="item.selectAll" :label="'全部'"></el-option>
                                <el-option
                                    v-for="x,i in enums[item.enumsName]"
                                    :key="i+1"
                                    :label="x[item.optionLabel]"
                                    :value="x[item.optionValue]"
                                >
                                </el-option>
                            </el-select>
                             <el-select
                                v-if="!item.isMultiple"
                                filterable
                                clearable
                                v-model="searchValue[item.model]"
                                :placeholder="item.placeholder"
                            >
                                <el-option key="0" :value="''" v-if="!item.selectAll" :label="'全部'"></el-option>
                                <el-option
                                    v-for="x,i in item.enumsfunc?enumsList[item.enumsfunc]:enums[item.enumsName]"
                                    :key="i+1"
                                    :label="x[item.optionLabel]"
                                    :value="x[item.optionValue]"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                     </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6"  v-else-if="item.itemType === 4&&item.isShow">
                        <el-form-item  :label="item.label">
                            <el-autocomplete
                                class="inline-input"
                                v-model="searchValue[item.model]"
                                :fetch-suggestions="((queryString,cb)=>{querySearchFunc(queryString,cb,item)})"
                                :placeholder="item.label"
                                :trigger-on-focus="false"
                                @select="selectFunc(item,$event)"
                            ></el-autocomplete>
                        </el-form-item>
                    </el-col>
                     <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6"  v-else-if="item.itemType === 5&&item.isShow">
                            <div>
                                <el-form-item :label="item.label" style="height:33px;line-height:33px;">
                                <el-date-picker
                                    v-model="timeForm[item.TimeAll]"
                                    :type="item.TimeType"
                                    range-separator="-"
                                    :value-format="item.valueFormat?item.valueFormat:'yyyy-MM-dd HH:mm'"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    @input="$forceUpdate()"
                                    prefix-icon="el-icon-date"
                                    @change="timeChange(item.TimeAll,item.model,item.model2)"
                                >
                                </el-date-picker>
                            </el-form-item>
                            </div>
                     </el-col>
                     <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6"  v-else-if="item.itemType === 6&&item.isShow">
                        <el-form-item  :label="item.label">
                            <el-col :span="11">
                                <el-input v-model="searchValue[item.model]" placeholder="发货地址"></el-input>
                            </el-col>
                            <el-col :span="2" style="display: flex; justify-content: center">-</el-col>
                            <el-col :span="11">
                                <el-input v-model="searchValue[item.model2]" placeholder="收货地址"></el-input>
                            </el-col>
                        </el-form-item>
                     </el-col>
                      <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6"  v-else-if="item.itemType === 7&&item.isShow">
                            <div>
                                <el-form-item :label="item.label" style="height:33px;line-height:33px;">
                                   <el-date-picker
                                    v-model="searchValue[item.model]"
                                    :type="item.TimeType"
                                    placeholder="请选择对账周期"
                                     value-format="yyyy-MM"
                                    clearable
                                >
                                </el-date-picker>
                            </el-form-item>
                            </div>
                     </el-col>
                </span>
            </el-row>
     </el-form>
           <div class="handle">
                <span class="expand" @click="isActive = !isActive" v-show="state">
                    <span v-show="isActive"> <i class="iconfont icon-shouqi" style="font-size: 12px !important"></i>收起</span>
                    <span v-show="!isActive"> <i class="iconfont icon-zhankai1" style="font-size: 12px !important"></i>展开</span></span
                >
                <button class="search-btn" :disabled="btnLoading" @click="searchBtn"></button>
                <button class="reset-btn" :disabled="btnLoading" @click="resetForm"></button>
                <button class="setting-btn" v-if="configBtn" @click="openDrawer"></button>
            </div>
        <el-drawer
        title="自定义搜索框"
        :visible.sync="drawer"
        direction="rtl"
        :before-close="handleClose">
        <div class="container-body" :style="{height: windowHeight-200+'px'}">
            <p class="title">已选择搜索条件</p>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <draggable v-model="configList"  chosenClass="chosen" forceFallback="true" group="people" animation="1000" @start="onStart" @end="onEnd">
            <div v-for="(data,index) in configList" :key="index" class="checkList"> 
                <el-checkbox  v-if="!data.hidden" @change="atpresentChange" :label="data"  v-model="data.isShow"  :disabled="data.isBin">{{data.label}}</el-checkbox>
                <img src="https://sinostoragedev.oss-cn-hangzhou.aliyuncs.com/upload/82A5EDE0496449BC4D656ACDE36783F0.svg" alt="">
            </div>
            </draggable>
        </div>
         <div class="footer_btn">
                <el-button class="csp-btn default-2n" plain @click="handleClose()">
                        <span>取 消</span>
                    </el-button>
                    <el-button
                        class="csp-btn default-1"
                        @click="saveSearchConfig"
                    >确 认</el-button>
            </div>
        </el-drawer>
</div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

.custom-btn{
    color: rgb(87, 111, 234);
    cursor: pointer;
    font-family: 'PingFangSC-Regular';
    display: inline-block;
}
  /deep/.el-drawer {
    width: 310px !important;
    font-family: 'PingFangSC-Regular';
}
/deep/ .el-form-item--small.el-form-item {
    margin-bottom: 16px;
}
.container-body{
    padding:20px;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    .title{
        margin-bottom: 10px;
        color:#1a1a1a;
    }
}
.footer_btn{
    position: absolute;
    bottom: 5%;
    width: 100%;
    text-align: center;
}
/deep/ .el-checkbox{
    color:#1a1a1a;
    display: block !important;
    line-height: 30px !important;
}
/deep/ .el-drawer__header{
    padding: 27px;
    font-size: 18px;
    background-color: #06a774;
    color: #fff;
    margin-bottom: 0px;
}
.isActive{
   height: auto !important;
}
.search-container {
    background: #fff;
    padding: 25px 20px 0;
    border-radius: 3px 3px 0 0;
    height: 70px;
    transition-property: height;
    transition-duration: 1s;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}
.handle{
    width: 230px;
    height: 32px;
    line-height: 32px;
    text-align: right;
    // border-left: 1px solid #EAECF0;
        button{
            border:none;
            height: 32px;
            width: 32px;
            cursor: pointer;
            margin: 0px 5px;
        }
        button:hover{
            opacity: 0.7;
        }
        .search-btn{
            background: url('https://sinostoragedev.oss-cn-hangzhou.aliyuncs.com/upload/A6670B361BF25C70059EC4B456F409DE.svg') no-repeat;
            background-size: 100% 100%;
        }
        .reset-btn{
            background: url('https://sinostoragedev.oss-cn-hangzhou.aliyuncs.com/upload/10C822A9F97DD7F1087EA0EA10E4F8CA.svg') no-repeat;
            background-size: 100% 100%;
        }
        .setting-btn{
            background: url('https://sinostoragedev.oss-cn-hangzhou.aliyuncs.com/upload/4D0F3A1783F75B35028436FD40E8805C.svg') no-repeat;
            background-size: 100% 100%;

        }

}
.expand {
    color: #06a774;
    font-size: 14px;
    cursor: pointer;
    margin: 0px 8px;
    vertical-align: text-bottom;
}
.checkList{
    position: relative;
    img{
        display: none;
        position: absolute;
        right: 0;
        top: 6px;
    }
}
.checkList:hover{
    img{
        display: inline-block;
    }
}
</style>