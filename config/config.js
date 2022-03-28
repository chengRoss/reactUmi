import { defineConfig } from 'umi';
import routes from './router.config'; // 路由配置
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: routes,
  fastRefresh: {},
});
