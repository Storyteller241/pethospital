<template>
<div class="tips"> 
  <div class="img1">
    <img src="@/assets/images/tips.jpg">
    <span style="font-size: 50px;">
   😸动物小课堂🦮
    </span>
  </div>
  <div class="img2" style="font-size: 25px;">
    在日常的养宠过程中，有哪些基本的宠物医疗知识？
  </div>
  <div class="bq">
    <template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
    <el-tab-pane label="狗狗小知识" name="first">
      <div>

        <el-card >
          狗狗中暑?怎么办?
          <br/>
          <br/>
针对中暑的防治策略若狗呈中暑状，则需要先对宠物狗进行降温处理，将其置于阴凉通风处降温，同时在宠物狗的身上撒些冷水，帮助其降温。
          <br/>
          <br/>
          <br/>
          另外，要对宠物狗的体温进行监测，若体温达到40～41℃时，则需要立即送往宠物医院就诊。
          <br/>
          <br/>
          <br/>
          在夏季白天尽量不要带狗出门，尤其是长毛狗，更要做好避暑散热措施。在家可以打开空调帮助其降温。

        <img src="@/assets/images/gg.jpg" style="float: left;margin-left: 400px;margin-top: 30px;">
      </el-card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="猫咪小故事" name="second">

猫咪猫癣怎么办？
<br/>
<br/>
真菌治疗是一个非常漫长的过程，治疗周期在一个月到半年不等，感染严重情况下还需要内服抗真菌的药品，
<br/>
<br/>但如果猫咪才几个月不建议用内服方式，因为这些药品会对它的肝脏造成负担。
<br/>
<br/>
【内用】：维生素B，提高皮肤免疫力准没错，日常都可以吃，一天一颗。
<br/>
<br/>
伊曲康䟶，推荐口服用量10mg/kg(幼猫减半)，一般一周内就能见到明显效果，不建议连续使用超过30天。（禁忌不能给患有肝病的猫用）
<br/>
<br/>
【外用】：盐酸特比萘芬乳膏，请不要用“皮特芬”这个东西含有激素，容易让毛囊坏死，导致一块皮肤黑了秃了。
<br/>
<br/>
【药浴】：别相信网上那些产品，最简单的方法是用硫磺皂，超市买的那种就可以，进阶版：石硫合剂，这是有博主在实验室中被证实对猫癣唯一有效的外用药，用法1:100的比例兑水，缺点是一股臭鸡蛋味。
<br/>
<br/>
【其他】伊丽莎白头套，一般治疗真菌的药剂都有毒，可以防止猫咪舔到了药剂。
<img src="@/assets/images/mm.jpg" style="float: left;margin-left: 400px;margin-top: 30px;">
    </el-tab-pane>
    <el-tab-pane label="仓鼠小tips" name="third">
      仓鼠身上有肿瘤？？？！！！
      <br/>
<br/>
      若发现仓鼠身体出现肿瘤，应及时咨询专业宠物医生，配合医生的诊治。
      <br/>
<br/>经检查后，如果肿瘤属于良性的，经切除后便能根治;
<br/>
<br/>如属化脓性肿瘤，则需切开后，将肿瘤部位清洗干净及消毒，然后给予抗生素治疗;
<br/>
<br/>但如属于恶性肿瘤，就需要给予抗癌药物的治疗，治疗期间会存在药物副作用的可能性。
<img src="@/assets/images/cc.jpg" style="float: left;margin-left: 400px;margin-top: 30px;">
    </el-tab-pane>
    <el-tab-pane label="冷门宠物" name="ten">
      蜥蜴有寄生虫怎么办！
      <br/>
<br/>
寄生虫是一个大项，体内和体外都有，需要及时的进行防治，最好是预防下来。
<br/>
<br/>
体外：蜥蜴有体外寄生虫一般是表现为体表出现黑色或红色的凸起和小点。发现之后，需要立马进行清除，并进行箱子的消毒。
<br/>
<br/>
体内：需要特殊工具检查，按时进行疫苗接种，和体内杀虫。
<br/>
<br/>
<img src="@/assets/images/xy.jpg" style="float: left;margin-left: 400px;margin-top: 30px;">
    </el-tab-pane>
    <el-tab-pane label="宠物鸟常见病" name="six">
      养的鸟肠胃炎怎么办？？
      <br/>
<br/>
      肠胃炎饲料腐败变质，饮水不洁，饲料投放不及时，都是致病的原因。
      <br/>
<br/>患鸟羽毛松弛，形体消瘦，精神委靡，粪便黏稠，带黄白色黏液，有恶臭。
<br/>
<br/>如不及时治疗，病鸟会衰竭而死。防治方法：肠胃病的关键是注意饲料和饮水的清洁。
<br/>
<br/>患鸟应移到温暖避风处隔离治疗。
<br/>
<br/>每天用痢特灵0.2-1毫克溶于糖水中滴喂.连喂3天。
<br/>
<br/>或用1-2毫克磺胺甲基嘧啶连续饲喂5天。
<br/>
<br/>此外，饲料中可加人适量木炭粉，以吸收其肠胃中的毒素。
<br/>
<br/>还可用矽炭银片10-20毫克，研碎，塞人鸟口中，然后用25%菊萄糖水1毫升徐徐滴入口中，
<br/>
<br/>见有吞咽动作后，才能继续滴入，否则会呛入长管中。每日2次，连续3天。
<br/>
<br/>痢特灵(呋喃唑酮)0.2-1毫克溶入1毫升25%的葡萄糖水中，用滴竹滴口服，每日用2次，连服3天。
<br/>
<br/>痢特灵有毒性，使用时应注意剂量。大蒜是常用的土药，以0.5毫克或1克捣碎口服。
<img src="@/assets/images/nn.jpg" style="float: left;margin-left: 400px;margin-top: 30px;">
    </el-tab-pane>
    <el-tab-pane label="羊驼？羊驼！" name="seven">

<img src="@/assets/images/oo.jpg" style="float: left;">
羊驼容易生病吗？
      <br/>
<br/>
估计不少养过宠物的老父亲老母亲都很担心这个问题，羊驼的体质因驼而异，
<br/>
<br/>但如果羊驼本身就是健康的，再加上后期不乱喂东西，注意消暑防寒基本上问题不大，
<br/>
<br/>精神状态良好的羊驼身体状况也不容易出问题。
    </el-tab-pane>
    <el-tab-pane label="滴滴！宠物貂" name="nine">
      宠物貂拉稀怎么办
      <br/>
<br/>
拉稀是一种症状，很多原因可以引起拉稀。常见的有物理刺激，细菌感染和病毒感染。
<br/>
<br/>
喂食坚果类零食和吞食了不易消化的异物可以引起拉稀，常见拉出类似鼻涕状粪便，
<br/>
<br/>有时夹杂血丝和未消化的异物。轻易改变粮食或添加其他饲料也可能导致拉稀。
<br/>
<br/>
细菌感染引起的拉稀多因采食了变质貂食物和不清洁貂饮水，
<br/>
<br/>多见排便很稀，不成型，病貂精神沉郁，采食量下降。
<br/>
<br/>
应激反应也很容易导致拉稀，尤其是宠物貂经过长途运输到达专卖店后一两天内，
<br/>
<br/>这种情况可以不用治疗，会自己恢复。
<img src="@/assets/images/dd.jpg" style="float: left;margin-left: 400px;margin-top: 30px;">    
</el-tab-pane>
  </el-tabs>
  </template>
</div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.tips {
  width: 100%;
  height: 1000px;
  /* background-color: #ffffff; */
  margin: 0 auto;
}
.img1 {
  width: 100%;
  height: 400px;
  background-color: #612c2c;
  color: rgb(130, 106, 40);
}
.img2 {
  width: 100%;
  height: 200px;
    background-color: transparent;
   font-family: fantasy;
   color: rgb(255, 234, 174);
  /* background-color: rgba(255, 244, 173, 0.2); */
}
.bq {
  margin-top: 10px;
  font-size: 20px;
  margin-left: 200px;
  margin: 0 auto;
}
.el-tabs__item {
        height: 60px;
        line-height: 60px;
        width: calc(100% / 4);
      }
</style>