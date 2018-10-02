module.exports = {
    plugins: [
        require('cssnano')({
            preset: [
                'advanced', 
                {
                    discardComments: {
                        removeAll: true
                    },
                    discardUnused: false,
                    mergeIdents: false,
                    reduceIdents: false,
                    safe: true,
                    sourcemap: true,
                    zindex: false            
                }
            ]
        }),
    ],
};