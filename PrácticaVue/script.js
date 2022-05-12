new Vue({
  el: '#app',
  
  data () {
    return {
      title: '',
      time: 0,
      sum:0,
      courses: [
        {title:'Curso1', time:10}
      ]
    }
  },
  
  computed: {
    totalTime (){
        if (!this.courses.length) { return 0 }
      
        return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
    }
  },
  
  methods: {
    saveCourse(){  
      var course = new Object();
      course.title=this.title
      course.time=this.time  
      this.courses.push(course)
      console.log(this.courses)
    }
  }
})