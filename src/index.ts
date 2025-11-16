
import server from './infra/http/server';
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
