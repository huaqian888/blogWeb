import { createPinia } from 'pinia';
import { usePersist } from 'pinia-use-persist';

const store = createPinia();
store.use(usePersist);//持久化插件

export default store;