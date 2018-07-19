export const mixins = {
    methods: {
        block: (element) => {
            $(element).block({
                message: '<i class="icon-spinner4 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'transparent'
                }
            });
        },
        unBlock: (element) => {
            $(element).unblock();
        }
    }
};
