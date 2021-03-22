export default  [
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/video/Happy'),
        meta:{
            name:'娱乐',
            requireAuth:true
        }
    }
]