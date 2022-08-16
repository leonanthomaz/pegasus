const express = require("express");
const server = express();
const path = require('path');

const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 8888

const authRouter = require('./routes/auth')
const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')

const bodyParser = require('body-parser');
const cors = require('cors');

const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");

server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());

// server.use(cors());
// server.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','https://pegasus-front-end.vercel.app');
//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({msg: "Finalmente problema de cors resolvido!"});
//     }
//     next();
// });

// server.use(cors());
// server.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", 
//               "X-PINGOTHER, Content-Type, Authorization")
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//   }
//   next()
// })

//aaa
server.use(cors({origin:true,credentials: true}));
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  if (req.method === "OPTIONS") {
      return res.status(200).end();
  } else {
      next(); 
  }
});

//
// server.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", process.env.URL_FRONTEND)
//   res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,PATCH,POST,DELETE")
//   res.header("Access-Control-Allow-Headers", 
//               "X-PINGOTHER, Content-Type, Authorization")
//   server.use(cors())
//   next()
// })

// const corsOptions ={
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }
// server.use(cors(corsOptions)) // Use this after the variable declaration

//
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Conectado ao Mongo");
    }
);


//middleware
server.use(helmet());
helmet({
  crossOriginResourcePolicy: false,
})
server.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/post");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const storageProfile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/person");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
const uploadProfile = multer({ storage: storageProfile });

server.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json({ msg: "Arquivo enviado com sucesso!"});
  } catch (error) {
    console.error(error);
  }
}); 

server.post("/upload/profile", uploadProfile.single("file"), (req, res) => {
  try {
    return res.status(200).json({ msg: "Arquivo enviado com sucesso!"});
  } catch (error) {
    console.error(error);
  }
});

server.use('/auth', authRouter)
server.use('/posts', postRouter)
server.use('/users', userRouter)

server.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
})

