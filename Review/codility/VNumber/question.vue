<template>
    <div id="brinza-task-description">
        <p>A non-negative integer variable V is given. There are two actions available that modify its value:</p>
        <blockquote>
            <ul style="margin: 10px;padding: 0px;"><li>if V is odd, subtract 1 from it;</li>
                <li>if V is even, divide it by 2.</li>
            </ul>
        </blockquote>
        <p>These actions are performed until the value of V becomes 0.</p>
        <p>For example, if V initially contains value 28, it will become 0 after seven steps:</p>
        <blockquote>
            <ul style="margin: 10px;padding: 0px;">
                <li>V contains value 28, which is even: divide by 2 and obtain 14;</li>
                <li>V contains value 14, which is even: divide by 2 and obtain 7;</li>
                <li>V contains value 7, which is odd: subtract 1 and obtain 6;</li>
                <li>V contains value 6, which is even: divide by 2 and obtain 3;</li>
                <li>V contains value 3, which is odd: subtract 1 and obtain 2;</li>
                <li>V contains value 2, which is even: divide by 2 and obtain 1;</li>
                <li>V contains value 1, which is odd: subtract 1 and obtain 0.</li>
            </ul>
        </blockquote>
            <p>Write a function:</p>
        <blockquote>
            <p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(S);</tt></p>
        </blockquote>
        <p>that, given a zero-indexed string S consisting of N characters containing a binary representation of the initial value of variable V, returns the number of steps after which the value of V will become 0, as described above.</p>
        <p>For example, given string S = "<tt style="white-space:pre-wrap">011100</tt>" the function should return 7, because string S represents the number 28 and 28 becomes 0 after seven steps, as explained above.</p>
        <p>Write an <b><b>efficient</b></b> algorithm for the following assumptions:</p>
        <blockquote>
            <ul style="margin: 10px;padding: 0px;">
                <li>N is an integer within the range [<span class="number">1</span>..<span class="number">1,000,000</span>];
                </li>
                <li>string S consists only of the characters "<tt style="white-space:pre-wrap">0</tt>" and/or "<tt style="white-space:pre-wrap">1</tt>";</li>
                <li>the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit;</li>
                <li>the binary representation may contain leading zeros.</li>
            </ul>
        </blockquote>

        <h1> RESULT: {{ result }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return{
            result: 0,
            stringToBinary: parseInt('11100', 2) //to binary
        }
    },
    mounted() {
        this.result = this.counting(this.stringToBinary)
    },
    methods:{
        counting(string){
            let vNumber = parseInt(_string), counter = 0;
            while (vNumber > 0){
                counter++;
                vNumber = vNumber % 2 == 0 ? vNumber / 2 : vNumber - 1;
            }
            return counter;
        }
    }
}
</script>