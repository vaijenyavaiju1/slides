import './index.css'

const SlideItem = props => {
  const {eachItem, indexOfItem, active, onChangeActiveSlide} = props
  const {id, heading, description} = eachItem
  console.log(active)
  const listClassName = active ? 'slide-item back-col' : 'slide-item'

  const changeActiveSlide = () => {
    onChangeActiveSlide(eachItem)
  }
  console.log(`slideTab${indexOfItem + 1}`)

  return (
    <li
      key={id}
      className={listClassName}
      onClick={changeActiveSlide}
      testid={`slideTab${indexOfItem + 1}`}
    >
      <p style={{margin: '0 5px 0 0'}}>{indexOfItem + 1}</p>

      <div className="slide-item-content">
        <h1 className="slide-item-heading">{heading}</h1>
        <p className="slide-item-para">{description}</p>
      </div>
    </li>
  )
}

export default SlideItem
