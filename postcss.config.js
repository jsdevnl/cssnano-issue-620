module.exports = {
    plugins: [
        require('autoprefixer')({
            remove: true
        }),
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