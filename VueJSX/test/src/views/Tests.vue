<script>
export default {
  data() {
    return {
      min: Number.MAX_VALUE,
      max: Number.MIN_VALUE
    };
  },
  methods: {
    greater() {
      let greaterClass = {
        find: nums => {
          nums.forEach(num => {
            if (num < this.min) {
              this.min = num;
            } else if (num > this.max) {
              this.max = num;
            }
          });
        },
        getMin: () => this.min,
        getMax: () => this.max
      };
      return greaterClass;
    },
    test(array) {
      let algorithm = this.greater();
      algorithm.find(array);
    }
  },
  mounted() {
    this.test([5, 6, 7, 19])
  },
  render() {
    return (
      <div>
        <div class="about">
          <h1>MIN: {this.min}</h1>
          <h1>MAX: {this.max}</h1>
        </div>
      </div>
    );
  }
};
</script>
