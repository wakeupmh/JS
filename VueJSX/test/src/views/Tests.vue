<script>
    export default {
        methods: {
            greater(){
                let greaterClass = {
                    find: nums =>{
                        const min = Number.MAX_VALUE;
                        const max = Number.MIN_VALUE;
                        nums.forEach(element => {
                            if(num < min) 
                                min = num;
                            else if(num > max)
                                max = num;
                        });
                    },
                    getMin: () => min,
                    getMax: () => max
                }
                return greaterClass
            }
        },
        render () { 
            return (
            <div>
                <div class="about">
                <h1>This is an about page</h1>
                </div>
            </div>
            ) 
        }
    }
</script>