import Swiper from 'swiper/bundle'

import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

export default swiper