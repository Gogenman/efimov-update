export const textAnimation = {
    left: {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * .2
            }
        })
    },
    right: {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * .2
            }
        })
    }
}



export const imgAnimation = {
    left: {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * .2
            }
        })
    },
    right: {
        hidden: {
            x: 100,
            opacity: 0,
            clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 0 100%)'
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0 100%)',
            transition: {
                delay: custom * .2
            }
        })
    },
   
}

export const gridAnimation = {
    hidden: {
        transform: 'scale(0.9)',
        opacity: 0,
    },
    visible: custom => ({
        transform: 'scale(1)',
        opacity: 1,
        transition: {
            delay: custom * .2
        }
    })
}

