import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 自动导入module下所有模块
const routes = (modulesFiles => {
    return modulesFiles.keys().reduce((modules, modulePath) => {
        const value = modulesFiles(modulePath);
        modules.push(...value.default);
        return modules;
    }, []);
})(require.context('./module', false, /\.js$/));

const router = new Router({ routes, mode: 'history', scrollBehavior: () => ({ y: 0 }) });



export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router