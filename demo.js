import { hyper } from '@hyperio/client'

const { data } = hyper(process.env.HYPER)

async function main() {
  //const res = await data('movie').post({id: '1', title: 'Ghostbusters'})
  const res = await data('movie').get('1')
  console.log(res)
}

main()