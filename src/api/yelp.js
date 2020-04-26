import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization:'Bearer WFGLgE_OoSmAulpHShXssS8NXXMj25W6qsFIfAn1xyxgR0OcVS28X54Ibly_A6w_gqfS7yk5EbkMsPFBH_HmPvdfqzeclgQByjAIV8XkXbDkpOibdN9ziftysdSiXnYx'
  }
});