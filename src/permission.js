import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'





NProgress.configure({
    showSpinner: false
})

router.beforeEach(async(to, from, next) => {

    next()

})


router.afterEach(() => {

    NProgress.done()

})