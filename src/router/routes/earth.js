export default [
    {
        path:'/earth',
        name:'earth',
        component:()=>import('@/views/Earth/Earth'),
        meta:{
            name:'数字类',
            requireAuth: true
        }
    }
]