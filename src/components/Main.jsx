import "./Main.css"
import { Cards } from './Cards'

export const Main = ({product}) => {
    
  return (
    <div className="main">
         {product.map((product) => (
        <div key={product.Id}>
          <Cards product={product} />
        </div>
      ))}
    </div>
  )
}
