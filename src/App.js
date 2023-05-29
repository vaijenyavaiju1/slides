import {Component} from 'react'
import './App.css'
import {v4} from 'uuid'

import Header from './components/Header'
import SlideItem from './components/SlideItem'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeSlide: initialSlidesList[0],
    stateSlidesList: initialSlidesList,
    isHeadingSelected: false,
    isDescriptionSelected: false,
  }

  componentDidMount() {
    const {stateSlidesList} = this.state
    this.setState({activeSlide: stateSlidesList[0]})
  }

  onChangeActiveSlide = arg => {
    this.setState({activeSlide: arg})
  }

  updateStateSlidesList = () => {
    const {activeSlide, stateSlidesList} = this.state
    this.setState({stateSlidesList: {...stateSlidesList, activeSlide}})
  }

  onChangeActiveSlideHeading = event => {
    const {activeSlide, stateSlidesList} = this.state
    const newActiveSlide = {...activeSlide, heading: event.target.value}
    const newStateList = [...stateSlidesList]

    const indexOfItem = stateSlidesList.findIndex(eachItem => {
      if (eachItem.id === activeSlide.id) {
        return true
      }
      return false
    })
    newStateList[indexOfItem].heading = event.target.value

    this.setState({
      activeSlide: newActiveSlide,
      stateSlidesList: newStateList,
    })
  }

  onChangeActiveSlideDescription = event => {
    const {activeSlide, stateSlidesList} = this.state
    const newActiveSlide = {...activeSlide, description: event.target.value}
    const newStateList = [...stateSlidesList]
    const indexOfItem = stateSlidesList.findIndex(eachItem => {
      if (eachItem.id === activeSlide.id) {
        return true
      }
      return false
    })
    newStateList[indexOfItem].description = event.target.value

    this.setState({
      activeSlide: newActiveSlide,
      stateSlidesList: newStateList,
    })
  }

  onAddNewSlide = () => {
    const {activeSlide, stateSlidesList} = this.state
    const newStateList = [...stateSlidesList]
    const indexOfItem = stateSlidesList.findIndex(eachItem => {
      if (eachItem.id === activeSlide.id) {
        return true
      }
      return false
    })

    console.log('Add Slide')
    const newSlide = {id: v4(), heading: 'Heading', description: 'Description'}
    console.log(newSlide)
    newStateList.splice(indexOfItem + 1, 0, newSlide)
    this.setState({
      activeSlide: newSlide,
      stateSlidesList: newStateList,
    })
  }

  onClickHeading = () => {
    this.setState({isHeadingSelected: true, isDescriptionSelected: false})
  }

  onBlurHeading = () => {
    this.setState({isHeadingSelected: false})
  }

  onClickDescription = () => {
    this.setState({isDescriptionSelected: true, isHeadingSelected: false})
  }

  onBlurDescription = () => {
    this.setState({isDescriptionSelected: false})
  }

  render() {
    const {
      activeSlide,
      stateSlidesList,
      isHeadingSelected,
      isDescriptionSelected,
    } = this.state

    return (
      <div className="overall-container">
        <Header />

        <div style={{backgroundColor: '#f8fafc', padding: '10px 0 0 10px'}}>
          <button
            type="button"
            className="new-button"
            onClick={this.onAddNewSlide}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              className="plus-img-prop"
              alt="new plus icon"
            />
            <p>New</p>
          </button>
        </div>

        <div className="slides-container">
          <ul className="sidebar-container">
            {stateSlidesList.map(eachItem => {
              const indexOfItem = stateSlidesList.indexOf(eachItem)

              return (
                <SlideItem
                  eachItem={eachItem}
                  indexOfItem={indexOfItem}
                  key={eachItem.id}
                  active={eachItem.id === activeSlide.id}
                  onChangeActiveSlide={this.onChangeActiveSlide}
                />
              )
            })}
          </ul>

          <div className="active-slide-container">
            <div className="active-slide-content">
              {isHeadingSelected ? (
                <input
                  className="active-slide-heading"
                  value={activeSlide.heading}
                  onChange={this.onChangeActiveSlideHeading}
                  onBlur={this.onBlurHeading}
                />
              ) : (
                <h1
                  className="active-slide-heading"
                  onClick={this.onClickHeading}
                >
                  {activeSlide.heading}
                </h1>
              )}

              {isDescriptionSelected ? (
                <input
                  className="active-slide-para"
                  value={activeSlide.description}
                  onChange={this.onChangeActiveSlideDescription}
                  onBlur={this.onBlurDescription}
                />
              ) : (
                <p
                  className="active-slide-para"
                  onClick={this.onClickDescription}
                >
                  {activeSlide.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
