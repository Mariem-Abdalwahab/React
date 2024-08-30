(function(){
    // creation

    const customRedux = (function (){

        function createStore(reducer){
            let state = ["mariem"]

            const getState = () => state;
            
            const dispatch = () =>{}
            const subscribe = () =>{}

            return{
                getState,
                dispatch,
                subscribe
            }
        };



        return {
            createStore
        }
    })()

    // registeration
    if(!window.customRedux){
        window.customRedux = window.$Redux = customRedux;
    }
})()