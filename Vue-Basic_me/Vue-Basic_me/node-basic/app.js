const express = require(`express`);
const app = express();
//express 모듈이 웹서버를 만들어줌
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env.local") });
//.eve.local과 연결

//파일 업로드 모듈 multer
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정, 파일이름이 항상 일정하게 형식을 맞춰줌.
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});
var upload = multer({ storage: storage });

//cors, 등록된 애들만 나의 웹서버로 호출할 수 있게끔 하는 것
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8097",
  //웹서버 등록하고 받아주겠다
  credentials: true,
};

app.use(cors(corsOption));
//우리 웹서버에서 corsOption의 주소를 쓰겠다 선언

app.use(
  express.json({
    limit: "50mb",
  })
);
//용량을 50mb로 제한하겠다

const server = app.listen(3000, () => {
  var dir = __dirname + "/uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  //uploads폴더가 없으면 서버가 실행될 때 체크해서 만들어줌

  console.log("Server stared. port 3000.");
  //Express로 서버 구축할시 사용하는 default port는 3000
});

app.use("/static", express.static(__dirname + "/uploads"));
//업로드 폴더를 외부에서도 접속 가능하게 만들어줌. static은 uploads 폴더 접속 주소를 가리기 위해서 사용 => 접근할 때 주소는 /static.

const dbPool = require("mysql").createPool({
  database: process.env.database,
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  //설정한 비밀번호 입력
});

app.post("/api/uploadFile", upload.single("attachment"), async (req, res) => {
  //두 번째 파라미터는 파일 하나씩 받는 것, 키 명을 attachment라 정한 것.
  console.log(req.file);
  return res.status(200).json(req.file);
});

app.delete("/api/deleteFile", async (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.query.filename);
  console.log(path);
  fs.unlink(filePath, (err) => {
    //unlink filePath가 실제 존재하면 삭제, 존재하지 않으면 에러를 띄움
    if (err) {
      console.error(err);
      res.status(400).json({
        type: "E",
        msg: "파일을 삭제할 수 없습니다. 다시 시도하세요.",
      });
    }

    res.status(200).json({ type: "S", msg: "성공적으로 삭제되었습니다." });
  });
});

app.get("/api/getUserList", async (req, res) => {
  const userList = { data: [{ name: "Daeeui Hong", gender: "Male" }] };
  res.send(userList);
});

app.get("/api/getList", async (req, res) => {
  try {
    res.send(await sys.db("list"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});
//sql.js 내용이 변경되는 것을 감지해서 sql을 업데이트 함.

app.post("/api/:alias", async (req, res) => {
  try {
    res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const sys = {
  async db(alias, param = [], where = "") {
    //alias에 createPerson이 들어감
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
