import request from '@/utils/request.js'
import { useTokenStore } from '@/store/token.js'

//
export const articleCategoryListService = ()=>{
    // const tokenStore = useTokenStore();
    //在pinia中的数据不是响应式数据，不用.value
    // return request.get('/category/list',{header:{'Authorization':tokenStore.token}})
    return request.get('/category/list')
}

//
export const articleCategoryAddService = (categoryData)=>{
    return request.post('/category/add',categoryData)
}

//
export const articleCategoryUpdateService = (categoryData) =>{
    return request.put('/category/update',categoryData)
}

export const articleCategoryDeleteService = (id) =>{
    return request.delete('/category/delete?id=' + id)
}

export const articleListService = (params) =>{
    return request.get('/article/list',{params:params})
}

export const articleAddService = (articleData) =>{
    return request.post('/article/add',articleData)
}

export const articleUpdateService = (articleData) =>{
    return request.post('/article/update',articleData)
}

export const articleDeleteService = (id) =>{
    return request.delete('/article/delete?id='+ id)
}