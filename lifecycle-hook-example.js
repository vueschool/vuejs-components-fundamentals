let BlogPostComponent = {
  props: ['id'],
  data () {
    return {
      blogPost: null
    }
  },
  created () {
    axios.get('api/posts/' + this.id).then(response => {
      this.blogPost = response.data
    })
  }
}