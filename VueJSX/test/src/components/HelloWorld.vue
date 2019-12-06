
</<script>
export default {
  data () {
    return {
      rawHtml: "<h1> This is a Hello World </h1>",
    }
  },
  render(){
    return(
      <div>
        <div domPropsInnerHTML={this.rawHtml}> </div>
      </div>
    )
  }
}
</script>