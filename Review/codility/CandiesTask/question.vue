
<template>
    <div>
        <div id="brinza-task-description">
            <p>Mary has N candies. The i-th candy is of a type represented by an integer T[i].</p>
            <p>Mary's parents told her to share the candies with her brother. She must give him exactly half the candies. Fortunately, the number of candies N is even.</p>
            <p>After giving away half the candies, Mary will eat the remaining ones. She likes variety, so she wants to have candies of various types. Can you find the maximum number of different types of candy that Mary can eat?</p>
            <p>Write a function:</p>
            <blockquote>
                <p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap">
                    <code>function solution(T);</code>
                </p>
            </blockquote>
                <p>that, given an array T of N integers, representing all the types of candies, returns the maximum possible number of different types of candy that Mary can eat after she has given N/2 candies to her brother.</p>
                <p>For example, given:</p>
            <code style="white-space:pre-wrap">    T = {{ candies[0].toString() }}</code>
                <p>the function should return 3. One optimal strategy for Mary is to give away one candy of type 4, one of type 7 and one of type 6. The remaining candies would be [3, 7, 6]: three candies of different types.</p>
                <p>Given:</p>
            <code style="white-space:pre-wrap">    
                T = {{ candies[1].toString() }}
            </code>
            <p>the function should also return 3. Here, Mary starts with ten candies. She can give away five candies of type 80 and the remaining candies would be <tt style="white-space:pre-wrap">[1000000000, 123456789, 80, 80, 80]</tt>. There are only three different types in total, i.e. <tt style="white-space:pre-wrap">80</tt>, <tt style="white-space:pre-wrap">1000000000</tt> and <tt style="white-space:pre-wrap">123456789</tt>.</p>
            <p>Write an <b><b>efficient</b></b> algorithm for the following assumptions:</p>
            <blockquote>
                <ul style="margin: 10px;padding: 0px;">
                    <li>N is an integer within the range [<span class="number">2</span>..<span class="number">100,000</span>];</li>
                    <li>N is even;</li>
                    <li>each element of array T is an integer within the range [<span class="number">1</span>..<span class="number">1,000,000,000</span>].</li>
                </ul>
            </blockquote>
        </div>
        <div>
            <h1 v-for="candy in candies" :key="candy"> 
                {{ candy.toString() }} : {{ giveCandies(candy) }}
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            candies:[
                [3, 4, 7, 7, 6, 6],
                [80, 80, 1000000000, 80, 80, 80, 80, 80, 80, 123456789]
            ]
        }
    },
    methods: {
        giveCandies(candies) {
            let _set = new Set();
            for(i in candies)
                _set.add(candies[i])
            return Math.min(_set.size, (candies.length/2))
        }
    }
}
</script>