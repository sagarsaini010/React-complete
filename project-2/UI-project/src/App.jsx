import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/Section2'
const App = () => {
  const users =[
    {
      img:'https://i.pinimg.com/736x/55/32/1f/55321fb59e25d9e12818f2c196dd8c37.jpg',
      intro:'',
      tag:'Satiesfied'
    },
    {
      img:'https://i.pinimg.com/736x/5b/15/de/5b15de98cf03d83b27ff65ed2b5830a5.jpg',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://i.pinimg.com/736x/7e/7a/fb/7e7afbe655706a9dee1d459262d144d3.jpg',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://i.pinimg.com/1200x/8e/7a/f2/8e7af294d07faaaaecc6aac8f20e0b95.jpg',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://i.pinimg.com/1200x/5f/64/22/5f6422472f1357e8df257d1ddc77a598.jpg',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App