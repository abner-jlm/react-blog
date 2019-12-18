import { observable, action } from 'mobx';

const axios = require('axios');
class Demo {
   @observable articleList = [];
   @observable editText = ''
   @observable editArticle = null
   @action onGetEditText = (id) => {
      let url = 'http://localhost:3000/api/article/getArticle'
      return new Promise((resolve, reject)=>{
         axios.get(url, {
            params: {
               id: id
            }
         }).then((res) => {
            this.editArticle =  res.data.data[0]
            this.editText = res.data.data[0].contents
            resolve(res)
         }).catch((err) => {
            console.warn('fetch error: 请求失败 error message :', err)
            reject(err)
         })
      })
   }

   @action onGetArticle = () => {
      fetch('http://localhost:3000/api/article/articleList').then(res => res.json()).then((res) => {
         console.log('文章', res.data)
         this.articleList = res.data
      }).catch((err) => {
         console.warn('fetch error: 请求失败 error message :', err)
         this.articleList = []
      })
   }
}
export default new Demo();