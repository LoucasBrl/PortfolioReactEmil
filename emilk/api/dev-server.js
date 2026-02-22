import 'dotenv/config';
import app from './index.js';

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server API running on http://localhost:${PORT}`);
});
