const express = require("express");
const router = express.Router();
const sqlClient = require("./config");
const jwt = require("jsonwebtoken");
const url = require("url");


/**
 * 注册
 */
router.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  const sql = "insert into user values(null,?,?,'user',null,null,null,null,?,null)";
  const arr = [username, password, email]
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "(๑•̀ㅂ•́)و✧注册成功"
      })
    } else {
      res.send({
        status: 401,
        msg: '哦豁，注册失败'
      })
    }
  })
})

/**
 * 登录
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "select * from user where username=? and password=?";
  const arr = [username, password];
  sqlClient(sql, arr, result => {
    if (result.length > 0) {
      let token = jwt.sign({
        username,
        id: result[0].id,
        role: result[0].role,
      }, 'soomekeys')

      res.send({
        status: 200,
        token,
        username,
        role: result[0].role,
        id: result[0].id,
      })
    } else {
      res.send({
        status: 401,
        msg: "┭┮﹏┭┮，登陆失败"
      })
    }
  })
})


/**
*上传图片
*/
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./upload/")
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname)
//   }
// })

// var createFolder = function (folder) {
//   try {
//     fs.accessSync(folder);
//   } catch (e) {
//     fs.mkdirSync(folder);
//   }
// }

// var uploadFolder = './upload/';
// createFolder(uploadFolder);
// var upload = multer({ storage: storage });


// router.post('/upload', upload.single('file'), function (req, res, next) {
//   var file = req.file;
//   console.log('文件类型：%s', file.mimetype);
//   console.log('原始文件名：%s', file.originalname);
//   console.log('文件大小：%s', file.size);
//   console.log('文件保存路径：%s', file.path);
//   res.json({ res_code: '0', name: file.originalname, url: file.path });
// });



/**--------------------用户模块----------------------- */

//用户信息
router.get("/userInfo", (req, res) => {
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from user order by id limit 10 offset " + (page - 1) * 10;
  sqlClient(sql, null, result => {
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        status: 500,
        msg: "查询失败"
      })
    }
  })
})


//个人中心
router.get("/userInfo22", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from user order by id"
  const arr = [id];
  sqlClient(sql, arr, result => {
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        status: 500,
        msg: "查询失败"
      })
    }
  })
})

//个人中心用户编辑
router.get("/userInfo22/edit77", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const username = url.parse(req.url, true).query.username || '';
  const userage = url.parse(req.url, true).query.userage || '';
  const petname = url.parse(req.url, true).query.petname || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const tel = url.parse(req.url, true).query.tel || '';
  const email = url.parse(req.url, true).query.email || '';
  const address = url.parse(req.url, true).query.address || '';
  const sql = "update user set username= ?,userage= ?,petname= ?,breed= ?,tel = ?,email= ?,address= ? where id= ?";
  const arr = [username, userage, petname, breed, tel, email, address, id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "编辑成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "编辑失败"
      })
    }
  })
})


//用户编辑
router.get("/userInfo/edit", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const username = url.parse(req.url, true).query.username || '';
  const userage = url.parse(req.url, true).query.userage || '';
  const petname = url.parse(req.url, true).query.petname || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const tel = url.parse(req.url, true).query.tel || '';
  const email = url.parse(req.url, true).query.email || '';
  const address = url.parse(req.url, true).query.address || '';
  const sql = "update user set username= ?,userage= ?,petname= ?,breed= ?,tel = ?,email= ?,address= ? where id= ?";
  const arr = [username, userage, petname, breed, tel, email, address, id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "编辑成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "编辑失败"
      })
    }
  })
})

/**
 * 添加用户
 */

router.get("/userInfo/add", (req, res) => {
  // const id = url.parse(req.url, true).query.id || '';
  const username = url.parse(req.url, true).query.username || '';
  const password = url.parse(req.url, true).query.password || '';
  const role = url.parse(req.url, true).query.role || '';
  const userage = url.parse(req.url, true).query.userage || '';
  const petname = url.parse(req.url, true).query.petname || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const tel = url.parse(req.url, true).query.tel || '';
  const email = url.parse(req.url, true).query.email || '';
  const address = url.parse(req.url, true).query.address || '';
  const sql = "insert into user values (null,?,?,?,?,?,?,?,?,?)";
  const arr = [username, password, role, userage, petname, breed, tel, email, address];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "添加成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "添加失败"
      })
    }
  })
})

/**
 * 用户删除
 */
router.get("/userInfo/del", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  const sql = "delete from user where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "删除成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "删除失败"
      })
    }
  })
})
/**-----------------医生模块-------------------- */
//医生信息
router.get("/docInfo", (req, res) => {
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from docinfo order by id limit 10 offset " + (page - 1) * 10;
  sqlClient(sql, null, result => {
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        status: 500,
        msg: "查询失败"
      })
    }
  })
})
//医生编辑
router.get("/docInfo/edit2", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const name = url.parse(req.url, true).query.name || '';
  const age = url.parse(req.url, true).query.age || '';
  const cons = url.parse(req.url, true).query.cons || '';
  const des = url.parse(req.url, true).query.des || '';
  const lic = url.parse(req.url, true).query.lic || '';
  const sql = "update docinfo set name= ?,age= ?,cons= ?,des= ?,lic= ? where id= ?";
  const arr = [name, age, cons, des, lic, id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "编辑成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "编辑失败"
      })
    }
  })
})
/**
 * 添加医生
 */

router.get("/docInfo/add2", (req, res) => {
  // const id = url.parse(req.url, true).query.id || '';
  const name = url.parse(req.url, true).query.name || '';
  const age = url.parse(req.url, true).query.age || '';
  const cons = url.parse(req.url, true).query.cons || '';
  const des = url.parse(req.url, true).query.des || '';
  const lic = url.parse(req.url, true).query.lic || '';
  const sql = "insert into docinfo values (null,?,?,?,?,?)";
  const arr = [name, age, cons, des, lic];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "添加成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "添加失败"
      })
    }
  })
})
/**
 * 医生删除
 */
router.get("/docInfo/del2", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  const sql = "delete from docinfo where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "删除成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "删除失败"
      })
    }
  })
})
/**----------------宠物模块------------------ */
//宠物信息
router.get("/petInfo", (req, res) => {
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from petinfo order by id limit 10 offset " + (page - 1) * 10;
  sqlClient(sql, null, result => {
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        status: 500,
        msg: "查询失败"
      })
    }
  })
})
//诊室宠物添加
router.get("/petInfo/add0", (req, res) => {
  const name = url.parse(req.url, true).query.name || '';
  const age = url.parse(req.url, true).query.age || '';
  const symptom = url.parse(req.url, true).query.symptom || '';
  const cons = url.parse(req.url, true).query.cons || '';
  const doc = url.parse(req.url, true).query.doc || '';
  const img = url.parse(req.url, true).query.img || '';
  const zhuyuan = url.parse(req.url, true).query.zhuyuan || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const sql = "insert into petinfo values (null,?,?,?,?,?,?,?,?)";
  const arr = [name, age, symptom, cons, doc, img, zhuyuan, breed];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "添加成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "添加失败"
      })
    }
  })
})
//宠物编辑
router.get("/petInfo/edit1", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const name = url.parse(req.url, true).query.name || '';
  const age = url.parse(req.url, true).query.age || '';
  const symptom = url.parse(req.url, true).query.symptom || '';
  const cons = url.parse(req.url, true).query.cons || '';
  const doc = url.parse(req.url, true).query.doc || '';
  const zhuyuan = url.parse(req.url, true).query.zhuyuan || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const sql = "update petinfo set name= ?,age= ?,symptom= ?,cons= ?,doc= ?,zhuyuan= ?,breed= ? where id= ?";
  const arr = [name, age, symptom, cons, doc, zhuyuan, breed, id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "编辑成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "编辑失败"
      })
    }
  })
})
/**
 * 诊室宠物删除
 */
router.get("/petInfo/del0", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  const sql = "delete from petinfo where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "删除成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "删除失败"
      })
    }
  })
})
/**----------------预约模块--------------------- */
//预约信息
router.get("/petRegister", (req, res) => {
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from petregister order by id limit 10 offset " + (page - 1) * 10;
  sqlClient(sql, null, result => {
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        status: 500,
        msg: "查询失败"
      })
    }
  })
})

//添加预约
router.get("/petRegister/add1", (req, res) => {

  const username = url.parse(req.url, true).query.username || '';
  const userage = url.parse(req.url, true).query.userage || '';
  const tel = url.parse(req.url, true).query.tel || '';
  const petname = url.parse(req.url, true).query.petname || '';
  const petage = url.parse(req.url, true).query.petage || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const symptom = url.parse(req.url, true).query.symptom || '';
  const doc = url.parse(req.url, true).query.doc || '';
  const sql = "insert into petregister values (null,?,?,?,?,?,?,?,?)";
  const arr = [username, userage, tel, petname, petage, breed, symptom, doc];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "添加成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "添加失败"
      })
    }
  })
})
//预约信息编辑
router.get("/petRegister/edit5", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const username = url.parse(req.url, true).query.username || '';
  const userage = url.parse(req.url, true).query.userage || '';
  const tel = url.parse(req.url, true).query.tel || '';
  const petname = url.parse(req.url, true).query.petname || '';
  const petage = url.parse(req.url, true).query.petage || '';
  const breed = url.parse(req.url, true).query.breed || '';
  const symptom = url.parse(req.url, true).query.symptom || '';
  const doc = url.parse(req.url, true).query.doc || '';
  const sql = "update petregister set username= ?,userage= ?,tel= ?,petname = ?,petage= ?,breed= ?,symptom= ?,doc= ? where id= ?";
  const arr = [username, userage, tel, petname, petage, breed, symptom, doc, id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "编辑成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "编辑失败"
      })
    }
  })
})
/**
 * 预约信息删除
 */
router.get("/petRegister/del5", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  const sql = "delete from petregister where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "删除成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "删除失败"
      })
    }
  })
})


/**-------------------宠物领养模块------------------- */
//领养宠物信息
router.get("/adpetInfo", (req, res) => {
  const page = url.parse(req.url, true).query.page || 1;
  const sql = "select * from adpetinfo order by id limit 10 offset " + (page - 1) * 10;
  sqlClient(sql, null, result => {
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        status: 500,
        msg: "查询失败"
      })
    }
  })
})


//领养宠物编辑
router.get("/adpetInfo/edit4", (req, res) => {
  const id = url.parse(req.url, true).query.id || '';
  const name = url.parse(req.url, true).query.name || '';
  const age = url.parse(req.url, true).query.age || '';
  const status1 = url.parse(req.url, true).query.status1 || '';
  const des = url.parse(req.url, true).query.des || '';
  const adname = url.parse(req.url, true).query.adname || '';
  const adtel = url.parse(req.url, true).query.adtel || '';
  const adadress = url.parse(req.url, true).query.adadress || '';
  const sql = "update adpetInfo set name= ?,age= ?,status1= ?,des= ?,adname = ?,adtel= ?,adadress= ? where id= ?";
  const arr = [name, age, status1, des, adname, adtel, adadress, id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "编辑成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "编辑失败"
      })
    }
  })
})

//领养宠物添加
router.get("/adpetInfo/add3", (req, res) => {
  const name = url.parse(req.url, true).query.name || '';
  const age = url.parse(req.url, true).query.age || '';
  const status1 = url.parse(req.url, true).query.status1 || '';
  const des = url.parse(req.url, true).query.des || '';
  const adname = url.parse(req.url, true).query.adname || '';
  const adtel = url.parse(req.url, true).query.adtel || '';
  const adadress = url.parse(req.url, true).query.adadress || '';
  const sql = "insert into adpetinfo values (null,?,?,?,?,?,?,?)";
  const arr = [name, age, status1, des, adname, adtel, adadress];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "添加成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "添加失败"
      })
    }
  })
})

/**
 * 领养宠物删除
 */
router.get("/adpetInfo/del3", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  const sql = "delete from adpetinfo where id=?"
  const arr = [id];
  sqlClient(sql, arr, result => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "删除成功"
      })
    } else {
      res.send({
        status: 500,
        msg: "删除失败"
      })
    }
  })
})





// router.post("/userInfo/edit",(req,res) =>{
//   let params = req.body.val;
//   if(params){
//     connection.query(`UPDATE userInfo SET name='${params.name}',age=${params.age},address='${params.address}' WHERE id=${params.id} ;`, function(err,result){
//       if(err){
//         res.send("修改失败"+err);
//       }else {
//         console.log(result,'修改')
//         res.send("修改成功");
//       }
//     });
//   }

// })
// router.get("/userInfo/edit", (req, res) => {
//   const page = url.parse(req.url, true).query.page || 1;
//   const sql = "UPDATE user SET name = ?,age = ?,petname = ?,tel = ?,email = ?address = ?breed = ? WHERE id = ? " + (page - 1) * 10;
//   sqlClient(sql, null, result => {
//     if (result.length > 0) {
//       res.send({
//         status: 200,
//         result
//       })
//     } else {
//       res.send({
//         status: 500,
//         msg: "查询失败"
//       })
//     }
//   })
// })

// router.get("/userInfo1", (req, res) => {
//   const page = url.parse(req.url, true).query.page || 1;
//   const sql = "select * from user order by username limit 10 offset " + (page - 1) * 10;
//   sqlClient(sql, null, result => {
//     if (result.length > 0) {
//       res.send({
//         status: 200,
//         result
//       })
//     } else {
//       res.send({
//         status: 500,
//         msg: "查询失败"
//       })
//     }
//   })
// })

module.exports = router;
