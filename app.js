const express = require(express);
const mongoose = reuire('mongoose');
const userRoutes = require('./routes/userRoutes');
 const connectDB = require('./config/db');
  const app = express(); 
   app,use( express.json());
   connectDB();
   app.uue('/api',userRoutes);
   app.listen(500);