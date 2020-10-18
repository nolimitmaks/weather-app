import React from 'react'
import {connect} from 'react-redux'

import LineChart from '../components/line_chart'

class WeatherList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            temp: []
        }

        this.renderWeather = this.renderWeather.bind(this)
    }

    renderWeather(cityData) {
        const name = cityData.city.name

        console.log(cityData.city.name)

        const temp = cityData.list.map(
            e => e.main.temp
        )
        return (
            <tr key={name}>
                <td>{name}</td>

                <td>
                    <LineChart temp={temp} />
                </td>
            </tr>
            
        )
    }

    render() {
        console.log(this.props.weather);
        return (
            <div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>

                
            </div>
        )
    }
}

function mapStateToProps({weather}) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList)
