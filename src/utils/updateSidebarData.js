import store from '../store';
import { financetags } from '@/api/login'

function updateSideBarData() {
    console.log(store.state.Sidebar);return
    if (store.state.Sidebar) {
    
        financetags({}).then(res => {
            store.commit('SaveSidebar', res.data.tag)
        })
    }

}
export default updateSideBarData
